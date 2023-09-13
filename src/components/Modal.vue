<template>
  <div v-if="isVisible">
    <div class="h-screen lg:h-full relative z-[1000]">
      <div
          class="bg-black hidden lg:block fixed left-0 top-0 w-full h-full opacity-30"
          @click="close_modal"
      ></div>
      <div
          :class="{ '!p-0': componentName === 'AssignCourier', 'lg:w-[1200px]' : componentName === 'FinalDeliveryPrint' }"
          class="fixed w-full lg:w-[800px] rounded-md bg-white lg:max-h-[800px] overflow-y-auto dark:bg-darkBg text-black dark:text-darkText left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-4 h-full lg:h-auto z-40"
      >
        <div
            class="absolute z-30 right-0 top-0 bg-white dark:bg-blackColor dark:text-white rounded-md flex justify-center items-center cursor-pointer w-8 h-8"
            @click="close_modal"
        >
          <font-awesome-icon :icon="['fas', 'xmark']"/>
        </div>
        <component
            :is="componentName"
            :tran-id="recId"
            class="dark:text-white"
            @request-to-close="close_modal"
            @send-add-id="acc_data"
        >
          <slot/>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "@/components/Modal/Registration.vue";
import Login from "@/components/Modal/Login.vue";
import CreateProduct from "@/components/Modal/CreateProduct.vue";
import EditProduct from "@/components/Modal/EditProduct.vue";
import RemoveProduct from "@/components/Modal/RemoveProduct.vue";
import CreateCategory from "@/components/Modal/CreateCategory.vue";
import RemoveCategory from "@/components/Modal/RemoveCategory.vue";
import EditCategory from "@/components/Modal/EditCategory.vue";

export default {
  name: "ModalSlot",
  components: {
    Registration,
    Login,
    CreateProduct,
    EditProduct,
    RemoveProduct,
    CreateCategory,
    RemoveCategory,
    EditCategory
  },
  props: {
    isVisible: {
      type: Boolean,
      required: false,
    },
    componentName: {
      type: String,
      required: false,
    },
    recId: {
      type: Object,
      required: false,
    },
  },
  emits: ["requestToClose", "sendAddId", "close_modal", "acc_data"],
  methods: {
    close_modal() {
      this.$emit("close_modal", false);
    },
    acc_data(val) {
      this.$emit("acc_data", val);
    },
  },

};
</script>
