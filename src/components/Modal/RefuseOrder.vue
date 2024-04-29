<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        {{ $t("refuseOrder.title") }}
      </h2>
      <p class="text-sm text-center">
        {{ $t("refuseOrder.subTitle") }}
      </p>
    </div>
    <form class="flex justify-center text-sm mt-5" @submit.prevent="confirmOrderLocal">
      <div class="flex justify-center">
        <div>
          <button
              v-if="loading === false"
              class="w-max mr-3 px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer"
              type="submit"
              @click="confirmOrderLocal(0)">
            {{ $t("general.confirm") }}
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            {{ $t("general.wait") }}
          </div>
        </div>
      </div>
      <div
          class="w-max text-black flex items-center rounded-md px-5 py-2 cursor-pointer"
          @click="close_modal"
      >
        <p class="dark:text-red-500">
          {{ $t("general.cancel") }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {inject} from "vue";

export default {
  name: "RefuseOrder",
  props: {
    tranId: {
      type: Object,
      required: false,
    },
  },
  emits: ['requestToClose'],
  setup() {
    const toast = inject("notify");
    return {toast};
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(["getConfirmedOrder"]),
  },
  methods: {
    ...mapActions(["confirmOrder", "orders"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async confirmOrderLocal(status) {
      this.loading = true;
      await this.confirmOrder({id: this.tranId, conf_state: status})
          .then(() => {
            if (status === 1) {
              this.toast(true, "Заказ подтвержден");
            } else {
              this.toast(false, "Заказ отклонен");
            }
            this.orders();
            this.close_modal();
          })
          .catch((error) => {
            if (error.response.data.errors) {
              if (Object.keys(error.response.data.errors).length > 0) {
                Object.values(error.response.data.errors).forEach((err) => {
                  this.toast(false, this.$t(err[0]))
                })
              }
            } else {
              this.toast(false, this.$t(error.response.data.message))
            }
          }).finally(() => {
            this.loading = false;
          })
    },
  },
};
</script>
