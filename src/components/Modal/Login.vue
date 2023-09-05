<template>
  <div>
    <div class="lg:w-full mb-5">
      <h2 class="text-center text-2xl font-medium mb-2">Авторизация</h2>
      <p class="text-center text-sm">Выполните авторизацию</p>
      <div
          class="flex flex-col justify-between h-full text-xs"
      >
        <form action="" @submit.prevent="sendForm">
          <div class="block lg:flex">
            <div
                class="w-full mt-0 lg:mt-0 h-max scroll-container lg:h-max overflow-y-auto pb-5 px-1"
            >
              <div class="content h-max">
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    Email
                  </label>
                  <input
                      v-model="form.email"
                      :class="{
                      'border-red-500': v$.form.email.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      placeholder="mail@mail.com"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    Пароль
                  </label>
                  <input
                      v-model="form.password"
                      :class="{
                      'border-red-500': v$.form.password.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      placeholder="Введите пароль"
                      type="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-3">
            <div
                class="w-max text-black dark:text-white mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
                @click="close_modal"
            >
              <p class="dark:text-darkText">Отменить</p>
            </div>
            <div>
              <button
                  v-if="loading === false"
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer"
                  type="submit">
                Сохранить
              </button>
              <div
                  v-else
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer flex items-center">
                <p class="spinner mr-2"></p>
                Подождите
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import {inject} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";

export default {
  name: "LoginModal",
  emits: ["requestToClose"],
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
      form: {
        email: "",
        password: "",
      }
    }
  },
  validations() {
    return {
      form: {
        password: {required},
        email: {required, email}
      },
    };
  },
  computed: {
    ...mapGetters(["getAuth", "getUser"]),
  },
  methods: {
    ...mapActions(["authUser", "setUser", "currentUser"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.authUser(this.form)
          .then(() => {
            this.loading = false;
            this.toast(true, "Авторизация успешна");
            this.close_modal();
            this.setUser();
            this.currentUser()
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

}
</script>