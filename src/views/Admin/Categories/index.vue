<template>
  <div class="py-20">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b">
        <h1 class="text-xl font-semibold">Категории</h1>
        <p class="bg-mainColor text-white px-5 py-2 rounded-md cursor-pointer" @click="modalState = true">Добавить
          категорию</p>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getCategories"
            :columns="columns"
            :numbered="true"
            :source="getCategories"
            @call_to_refresh="categories()"
        >
          <template #default="{ row, column }">
            <template v-if="column.name === 'Картинка'">
              <img v-if="row.icon" :src="row.icon" class="w-10 h-10 rounded-md"/>
              <p v-else class="text-red-500">Нет данных</p>
            </template>
            <template v-if="column.name === 'Действия'">
              <div class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-secondaryColor"
                    @click="editProduct(row)"
                >
                  <font-awesome-icon
                      :icon="['fas', 'pen-to-square']"
                      class="w-6"
                  />
                </div>
                <div
                    class="flex items-center cursor-pointer text-red-500"
                    @click="removeProduct(row.id)"
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

export default {
  name: "AdminCategories",
  data() {
    return {
      modalState: false,
      modalStateEdit: false,
      modalStateRemove: false,
      editData: null,
      removeData: null,
      columns: [
        {name: "ID", fname: "id"},
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
    removeProduct(id) {
      this.modalStateRemove = true;
      this.removeData = id;
    },
    editProduct(id) {
      this.editData = id;
      this.modalStateEdit = true;
    },
  }
}
</script>