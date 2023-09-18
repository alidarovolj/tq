<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
        <h1 class="text-xl font-semibold">Категории</h1>
        <p class="bg-mainColor text-white px-5 py-2 rounded-md cursor-pointer" @click="modalState = true">Добавить
          категорию</p>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getCategories"
            :columns="columns"
            :numbered="true"
            :pagination="getCategories.meta"
            :source="getCategories"
            @call_to_refresh="categories()"
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
  <Modal
      :is-visible="modalState"
      component-name="CreateCategory"
      @close_modal="(val) => (modalState = val)"
  />
  <Modal
      :is-visible="modalStateEdit"
      :rec-id="editData"
      component-name="EditCategory"
      @close_modal="(val) => (modalStateEdit = val)"
  />
  <Modal
      :is-visible="modalStateRemove"
      :rec-id="removeData"
      component-name="RemoveCategory"
      @close_modal="(val) => (modalStateRemove = val)"
  />
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal.vue";
import {useMeta} from "vue-meta";

export default {
  name: "AdminCategories",
  setup() {
    useMeta({title: "Категории"});
  },
  data() {
    return {
      modalState: false,
      modalStateEdit: false,
      modalStateRemove: false,
      editData: null,
      removeData: null,
      columns: [
        {name: "Имя", fname: "name"},
        {name: "Картинка", fname: "icon"},
        {name: "Действия", fname: "actions"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getCategories'])
  },
  components: {Modal, TableComponent},
  mounted() {
    this.categories();
  },
  methods: {
    ...mapActions(['categories']),
    removeCategory(id) {
      this.modalStateRemove = true;
      this.removeData = id;
    },
    editCategory(id) {
      this.editData = id;
      this.modalStateEdit = true;
    },
  }
}
</script>