<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        Забыли пароль?
      </h2>
    </div>
    <form class="block text-sm mt-5" @submit.prevent="forgotPasswordLocal">
      <div class="flex flex-col mb-5 w-full">
        <label
            class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
            for="first_name"
        >
          Телефон
        </label>
        <input
            v-model="form.phone"
            :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
            class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
            name="first_name"
            placeholder="Введите телефон"
            type="text"
        />
      </div>
      <div class="flex justify-center">
        <div>
          <button
              v-if="loading === false"
              class="w-max mr-3 px-6 py-2.5 rounded-md text-center bg-mainColor text-white cursor-pointer"
              type="submit"
              @click="forgotPasswordLocal(1)">
            Отправить
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            Подождите
          </div>
        </div>
        <div
            class="w-max text-black flex items-center rounded-md px-5 py-2 cursor-pointer"
            @click="close_modal"
        >
          <p class="dark:text-red-500">Отменить</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {inject} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";

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
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  data() {
    return {
      loading: false,
      donePass: false,
      form: {
        phone: null,
      }
    }
  },
  validations() {
    return {
      form: {
        phone: {required},
      },
    };
  },
  computed: {
    ...mapGetters(["getConfirmedOrder"]),
  },
  methods: {
    ...mapActions(["forgotPassword", "orders"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async forgotPasswordLocal(status) {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.forgotPassword(this.form)
          .then(() => {
            this.toast(true, "Пароль отправлен вам на телефон");
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
