<template>
  <div v-if="isSingleAdminRoute">
    <router-view></router-view>
  </div>
  <div v-else class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div
          class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
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
          <template v-if="column.name === 'Верифицирован'">
            <p v-if="row.is_verified === true"
               class="text-green-500 bg-green-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Да</p>
            <p v-else class="text-red-500 bg-red-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Нет</p>
          </template>
          <template v-if="column.name === 'Действия'">
            <div class="flex text-lg">
              <div
                  class="flex items-center cursor-pointer text-red-500"
                  @click="removeUsers(row.id)"
              >
                <font-awesome-icon :icon="['fas', 'trash']" class="w-6"/>
              </div>
              <div v-if="row.is_verified === false" class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-green-500"
                    @click="confirmVerify(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'check']" class="w-6"/>
                </div>
              </div>
              <div v-else class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-red-500"
                    @click="refuseVerify(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'xmark']" class="w-6"/>
                </div>
              </div>
            </div>
          </template>
        </template>
      </TableComponent>
    </div>
  </div>
  <Modal
      :is-visible="modalStateRemove"
      :rec-id="removeData"
      component-name="RemoveUser"
      @close_modal="(val) => (modalStateRemove = val)"
  />
  <Modal
      :is-visible="modalStateConfirmVerify"
      :rec-id="verifyData"
      component-name="ConfirmVerify"
      @close_modal="(val) => (modalStateConfirmVerify = val)"
  />
  <Modal
      :is-visible="modalStateRefuseVerify"
      :rec-id="verifyData"
      component-name="RefuseVerify"
      @close_modal="(val) => (modalStateRefuseVerify = val)"
  />
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import {useRoute} from "vue-router";
import Modal from "@/components/Modal.vue";
import {useMeta} from "vue-meta";

export default {
  name: "AdminPage",
  components: {Modal, TableComponent},
  setup() {
    useMeta({title: "Пользователи"});
  },
  data() {
    return {
      modalStateRemove: null,
      modalStateConfirmVerify: null,
      modalStateRefuseVerify: null,
      removeData: null,
      verifyData: null,
      columns: [
        {name: "Имя", fname: "name"},
        {name: "Телефон", fname: "phone"},
        {name: "Email", fname: "email"},
        {name: "Адрес", fname: "delivery_address"},
        {name: "Тип доставки", fname: "delivery_type"},
        {name: "Администратор", fname: "is_admin"},
        {name: "Верифицирован", fname: "is_verified"},
        {name: "Действия", fname: "actions"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
    isSingleAdminRoute() {
      const route = useRoute();
      return route.name === "AdminProducts" || route.name === "AdminCategories" || route.name === "AdminOrders" || route.name === "AdminNews" || route.name === "AdminFeedback";
    },
  },
  mounted() {
    this.users()
  },
  methods: {
    ...mapActions(['users', 'verifyUser']),
    removeUsers(id) {
      this.modalStateRemove = true;
      this.removeData = id;
    },
    confirmVerify(id) {
      this.modalStateConfirmVerify = id
      this.verifyData = id
    },
    refuseVerify(id) {
      this.modalStateRefuseVerify = id
      this.verifyData = id
    }
  }
}
</script>