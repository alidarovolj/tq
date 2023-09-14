<template>
  <div v-if="isSingleAdminRoute">
    <router-view></router-view>
  </div>
  <div v-else class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b">
        <h1 class="text-xl font-semibold">Пользователи</h1>
      </div>
      <TableComponent
          v-if="getUsers"
          :columns="columns"
          :numbered="true"
          :pagination="getUsers.meta"
          :source="getUsers"
          @call_to_refresh="users()"
      >
        <template #default="{ row, column, index }">
          <template v-if="column.name === 'Адрес'">
            <p>{{ row.city }}, {{ row.delivery_address }}</p>
          </template>
          <template v-if="column.name === 'Администратор'">
            <p v-if="row.is_admin === true"
               class="text-green-500 bg-green-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Да</p>
            <p v-else class="text-red-500 bg-red-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Нет</p>
          </template>
        </template>
      </TableComponent>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import {useRoute} from "vue-router";

export default {
  name: "AdminPage",
  components: {TableComponent},
  data() {
    return {
      columns: [
        {name: "Имя", fname: "name"},
        {name: "Телефон", fname: "phone"},
        {name: "Email", fname: "email"},
        {name: "Адрес", fname: "delivery_address"},
        {name: "Тип доставки", fname: "delivery_type"},
        {name: "Администратор", fname: "is_admin"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
    isSingleAdminRoute() {
      const route = useRoute();
      return route.name === "AdminProducts" || route.name === "AdminCategories" || route.name === "AdminOrders" || route.name === "AdminNews";
    },
  },
  mounted() {
    this.users()
  },
  methods: {
    ...mapActions(['users'])
  }
}
</script>