<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b">
        <h1 class="text-xl font-semibold">Продукты</h1>
        <p class="bg-mainColor text-white px-5 py-2 rounded-md cursor-pointer" @click="modalState = true">Добавить
          продукт</p>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getProducts"
            :columns="columns"
            :numbered="true"
            :pagination="getProducts.meta"
            :source="getProducts.data"
            @call_to_refresh="products()"
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
      component-name="CreateProduct"
      @close_modal="(val) => (modalState = val)"
  />
  <Modal
      :is-visible="modalStateEdit"
      :rec-id="editData"
      component-name="EditProduct"
      @close_modal="(val) => (modalStateEdit = val)"
  />
  <Modal
      :is-visible="modalStateRemove"
      :rec-id="removeData"
      component-name="RemoveProduct"
      @close_modal="(val) => (modalStateRemove = val)"
  />
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal.vue";

export default {
  name: "AdminProducts",
  components: {Modal, TableComponent},
  data() {
    return {
      modalState: false,
      modalStateEdit: false,
      modalStateRemove: false,
      editData: null,
      removeData: null,
      columns: [
        {name: "Название", fname: "name"},
        {name: "Картинка", fname: "icon"},
        {name: "Описание", fname: "description"},
        {name: "Цена", fname: "price"},
        {name: "ID категории", fname: "category_id"},
        {name: "Действия", fname: ""},
      ],
    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getCategories'])
  },
  mounted() {
    this.products()
  },
  methods: {
    ...mapActions(['products', 'categories']),
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