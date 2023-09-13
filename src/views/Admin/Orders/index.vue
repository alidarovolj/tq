<template>
  <div class="py-20">
    <div class="bg-white rounded-xl">
      <div class="flex justify-between py-3 px-7 border-b">
        <h1 class="text-xl font-semibold">Заказы</h1>
      </div>
      <div class="overflow-y-auto">
        <TableComponent
            v-if="getOrders"
            :columns="columns"
            :numbered="true"
            :source="getOrders"
            @call_to_refresh="orders()"
        >
          <template #default="{ row, column }">
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
        {name: "Тип доставки", fname: "delivery_type"},
        {name: "Адрес доставки", fname: "delivery_address"},
        {name: "Телефон", fname: "phone"},
        {name: "Стоимость заказа", fname: "amount"},
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