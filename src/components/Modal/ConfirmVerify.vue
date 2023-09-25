<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        Подтвердите верификацию
      </h2>
      <p class="text-sm text-center">
        Вы уверены что хотите подтвердить верификацию данного пользователя?
      </p>
    </div>
    <form class="flex justify-center text-sm mt-5">
      <div class="flex justify-center">
        <div>
          <button
              v-if="loading === false"
              class="w-max mr-3 px-6 py-2.5 rounded-md text-center bg-green-500 dark:bg-green-500 text-white cursor-pointer"
              type="submit"
              @click="confirmVerifyUser(1)">
            Подтвердить
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            Подождите
          </div>
        </div>
      </div>
      <div
          class="w-max text-black flex items-center rounded-md px-5 py-2 cursor-pointer"
          @click="close_modal"
      >
        <p class="dark:text-red-500">Отменить</p>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {inject} from "vue";

export default {
  name: "ConfirmOrder",
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
    ...mapGetters(["getVerifiedUser"]),
  },
  methods: {
    ...mapActions(["verifyUser", "users"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async confirmVerifyUser(status) {
      this.loading = true;
      await this.verifyUser({id: this.tranId, status: status})
          .then(() => {
            if (status === 1) {
              this.toast(true, "Верификация подтверждена");
            } else {
              this.toast(false, "Верификация отмена");
            }
            this.users();
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
