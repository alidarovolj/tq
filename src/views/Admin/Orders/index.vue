<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div
          class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
        <h1 class="text-xl font-semibold">Заказы</h1>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getOrders"
            :columns="columns"
            :numbered="true"
            :pagination="getOrders.meta"
            :source="getOrders"
            @call_to_refresh="orders()"
        >
          <template #default="{ row, column, index }">
            <template v-if="column.fname === 'is_paid'">
              <p v-if="row.is_paid === true"
                 class="text-green-500 bg-green-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Да</p>
              <p v-else class="text-red-500 bg-red-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Нет</p>
            </template>
            <template v-if="column.fname === 'products'">
              <div>
                <div
                    class="text-xs"
                    v-for="(item, ind) of row.products.slice(0, showProducts.includes(index) ? row.products.length : 1)"
                    :key="ind"
                >
                  <div class="flex items-start">
                    <p class="font-bold mr-2">x{{ item.count }}</p>
                    <p class="whitespace-nowrap">{{ item.product_data.name }}</p>
                  </div>
                </div>
                <button class="text-mainColor" v-if="row.products.length > 1" @click="showProd(index)">
                  {{ showProducts.includes(index) ? 'Скрыть' : 'Показать все' }}
                </button>
              </div>
            </template>
            <template v-if="column.name === 'Действия'">
              <div v-if="row.is_paid === false" class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-green-500"
                    @click="confirmOrder(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'check']" class="w-6"/>
                </div>
              </div>
              <div v-else class="flex text-lg">
                <div
                    class="flex items-center cursor-pointer text-red-500"
                    @click="refuseOrder(row.id)"
                >
                  <font-awesome-icon :icon="['fas', 'xmark']" class="w-6"/>
                </div>
              </div>
            </template>
          </template>
        </TableComponent>
      </div>
    </div>
  </div>
  <Modal
      :is-visible="modalStateConfirm"
      :rec-id="confirmData"
      component-name="ConfirmOrder"
      @close_modal="(val) => (modalStateConfirm = val)"
  />
  <Modal
      :is-visible="modalStateRefuse"
      :rec-id="refuseData"
      component-name="RefuseOrder"
      @close_modal="(val) => (modalStateRefuse = val)"
  />
</template>

<script>
import TableComponent from "@/components/General/Table.vue";
import {mapActions, mapGetters} from "vuex";
import Modal from "@/components/Modal.vue";
import {useMeta} from "vue-meta";

export default {
  name: "AdminOrders",
  setup() {
    useMeta({title: "Заказы"});
  },
  data() {
    return {
      modalStateConfirm: false,
      modalStateRefuse: false,
      confirmData: null,
      refuseData: null,
      showProducts: [], // Добавьте эту переменную
      columns: [
        {name: "Имя", fname: "name"},
        {name: "Тип доставки", fname: "delivery_type"},
        {name: "Продукты", fname: "products"},
        {name: "Адрес доставки", fname: "delivery_address"},
        {name: "Телефон", fname: "phone"},
        {name: "Стоимость заказа", fname: "amount"},
        {name: "Оплачен", fname: "is_paid"},
        {name: "Действия", fname: "actions"},
      ],
    };
  },
  computed: {
    ...mapGetters(["getOrders"]),
  },
  components: {Modal, TableComponent},
  mounted() {
    this.orders();
  },
  methods: {
    ...mapActions(["orders"]),
    confirmOrder(id) {
      this.modalStateConfirm = true;
      this.confirmData = id;
    },
    refuseOrder(id) {
      this.modalStateRefuse = true;
      this.refuseData = id;
    },
    showProd(index) {
      const indexToRemove = this.showProducts.indexOf(index);

      if (indexToRemove !== -1) {
        this.showProducts.splice(indexToRemove, 1); // Remove the element
      } else {
        this.showProducts.push(index); // Add the element if it doesn't exist
      }
    },
  },
};
</script>