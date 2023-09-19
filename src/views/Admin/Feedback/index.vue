<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
        <h1 class="text-xl font-semibold">Письма</h1>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getFeedback"
            :columns="columns"
            :numbered="true"
            :pagination="getFeedback.meta"
            :source="getFeedback"
            @call_to_refresh="feedback()"
        >
          <template #default="{ row, column, index }">
            <template v-if="column.name === 'Картинка'">
              <img v-if="row.icon" :src="row.icon" class="w-10 h-10 rounded-md"/>
              <p v-else class="text-red-500">Нет данных</p>
            </template>
            <template v-if="column.name === 'Действия'">
              <div class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-secondaryColor"
                    @click="editCategory(row)"
                >
                  <font-awesome-icon
                      :icon="['fas', 'pen-to-square']"
                      class="w-6"
                  />
                </div>
                <div
                    class="flex items-center cursor-pointer text-red-500"
                    @click="removeCategory(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" class="w-6"/>
                </div>
              </div>

            </template>
          </template>
        </TableComponent>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import {useMeta} from "vue-meta";

export default {
  name: "AdminFeedback",
  setup() {
    useMeta({title: "Письма"});
  },
  data() {
    return {
      columns: [
        {name: "Имя", fname: "name"},
        {name: "Email", fname: "email"},
        {name: "Телефон", fname: "phone"},
        {name: "Дата создания", fname: "created_at"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getFeedback'])
  },
  components: {TableComponent},
  mounted() {
    this.feedback();
  },
  methods: {
    ...mapActions(['feedback']),
  }
}
</script>