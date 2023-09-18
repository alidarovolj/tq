<template>
  <div class="py-0 lg:py-10 pb-10">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b dark:bg-darkBgColor dark:text-whiteColor dark:border-0 rounded-t-lg">
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
          <template #default="{ row, column }">
            <template v-if="column.fname === 'is_paid'">
              <p v-if="row.is_paid === true"
                 class="text-green-500 bg-green-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Да</p>
              <p v-else class="text-red-500 bg-red-500 bg-opacity-25 px-4 py-1 rounded-lg w-max">Нет</p>
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
    useMeta({title: "Заказы"});
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
        {name: "Тип доставки", fname: "delivery_type"},
        {name: "Адрес доставки", fname: "delivery_address"},
        {name: "Телефон", fname: "phone"},
        {name: "Стоимость заказа", fname: "amount"},
        {name: "Оплачен", fname: "is_paid"},
      ],
    }
  },
  computed: {
    ...mapGetters(['getOrders'])
  },
  components: {Modal, TableComponent},
  mounted() {
    this.orders();
  },
  methods: {
    ...mapActions(['orders']),
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