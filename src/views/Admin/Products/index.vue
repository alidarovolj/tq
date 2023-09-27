<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div
          class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
        <h1 class="text-xl font-semibold">Продукты</h1>
        <p class="bg-mainColor text-white px-5 py-2 rounded-md cursor-pointer" @click="modalState = true">Добавить
          продукт</p>
      </div>
      <div v-if="getProducts" class="w-full">
        <Search
            class="mb-3 lg:mb-0"
            :placeholder="'Найти продукт'"
            @changed="products"
        />
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
            <template v-if="column.fname === 'is_active'">
              <p v-if="row.is_active === true"
                 class="text-center text-green-500 bg-green-500 bg-opacity-25 px-4 py-1 rounded-lg w-full">
                Активен</p>
              <p v-else class="w-full text-red-500 bg-red-500 bg-opacity-25 px-4 py-1 rounded-lg text-center">
                Деактивирован</p>
            </template>
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
                <div v-if="row.is_active === false" class="flex text-lg">
                  <div
                      class="flex items-center cursor-pointer text-green-500"
                      @click="confirmProduct(row.id)"
                  >
                    <font-awesome-icon :icon="['fas', 'check']" class="w-6"/>
                  </div>
                </div>
                <div v-else class="flex text-lg">
                  <div
                      class="flex items-center cursor-pointer text-red-500"
                      @click="refuseProduct(row.id)"
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
  <Modal
      :is-visible="modalStateActivateProduct"
      :rec-id="actData"
      component-name="ActivateProduct"
      @close_modal="(val) => (modalStateActivateProduct = val)"
  />
  <Modal
      :is-visible="modalStateDeactivateProduct"
      :rec-id="actData"
      component-name="DeactivateProduct"
      @close_modal="(val) => (modalStateDeactivateProduct = val)"
  />
</template>

<script>
import {useMeta} from "vue-meta";
import {mapActions, mapGetters} from "vuex";
import Search from "@/components/General/Search.vue";
import TableComponent from "@/components/General/Table.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "AdminProducts",
  components: {Modal, TableComponent, Search},
  setup() {
    useMeta({title: "Продукты"});
  },
  data() {
    return {
      modalState: false,
      modalStateEdit: false,
      modalStateRemove: false,
      modalStateActivateProduct: false,
      modalStateDeactivateProduct: false,
      editData: null,
      removeData: null,
      actData: null,
      columns: [
        {name: "Название", fname: "name"},
        {name: "Картинка", fname: "icon"},
        {name: "Описание", fname: "description"},
        {name: "Цена", fname: "price"},
        {name: "Категории", fname: "category.name"},
        {name: "Кол-во", fname: "quantity"},
        {name: "uuid (Мой Склад)", fname: "uuid"},
        {name: "Статус", fname: "is_active"},
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
    confirmProduct(id) {
      this.actData = id;
      this.modalStateActivateProduct = true
    },
    refuseProduct(id) {
      this.actData = id
      this.modalStateDeactivateProduct = true
    }
  }
}
</script>