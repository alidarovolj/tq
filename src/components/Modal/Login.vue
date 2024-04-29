<template>
  <div v-if="stage">
    <div class="lg:w-full mb-5">
      <h2 class="text-center text-2xl font-medium mb-2">
        {{ $t('login.header') }}
      </h2>
      <p class="text-center text-sm">
        {{ $t('login.subTitle') }}
      </p>
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
                    {{ $t('login.password') }}
                  </label>
                  <input
                      v-model="form.password"
                      :class="{
                      'border-red-500': v$.form.password.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('login.placeholder')"
                      type="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <p
              @click="stage = false"
              class="text-red-500 text-center cursor-pointer mb-5">
            {{ $t("general.forgotPass") }}
          </p>
          <div class="flex justify-center mt-3">
            <div
                class="w-max text-black dark:text-white mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
                @click="close_modal"
            >
              <p class="dark:text-red-500">
                {{ $t("general.cancel") }}
              </p>
            </div>
            <div>
              <button
                  v-if="loading === false"
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer"
                  type="submit">
                {{ $t("general.save") }}
              </button>
              <div
                  v-else
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer flex items-center">
                <p class="spinner mr-2"></p>
                {{ $t("general.wait") }}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        {{ $t('general.forgotPass') }}
      </h2>
    </div>
    <form
        class="block text-xs mt-5"
        @submit.prevent="forgotPasswordLocal">
      <div class="flex flex-col mb-5 w-full">
        <label
            class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
            for="first_name"
        >
          {{ $t('form.phone.name') }}
        </label>
        <input
            v-model="formForgot.phone"
            class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
            name="first_name"
            :placeholder="$t('form.phone.placeholder')"
            type="text"
        />
      </div>
      <p
          @click="stage = true"
          class="text-red-500 text-center cursor-pointer mb-5">
        {{ $t("general.backToAuth") }}
      </p>
      <div class="flex justify-center">
        <div
            class="w-max text-black flex items-center rounded-md px-5 py-2 cursor-pointer"
            @click="close_modal"
        >
          <p class="dark:text-red-500">
            {{ $t("general.cancel") }}
          </p>
        </div>
        <div>
          <div
              v-if="loading === true"
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            {{ $t("general.wait") }}
          </div>
          <button
              v-else
              class="w-max mr-3 px-6 py-2.5 rounded-md text-center bg-mainColor text-white cursor-pointer"
              type="submit"
              @click="forgotPasswordLocal(1)">
            {{ $t("general.save") }}
          </button>
        </div>
      </div>
    </form>
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
  props: {
    tranId: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      loading: false,
      modalStateForgot: true,
      stage: true,
      donePass: false,
      formForgot: {
        phone: null,
      },
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
    ...mapGetters(["getAuth", "getUser", "getConfirmedOrder"]),
  },
  methods: {
    ...mapActions(["authUser", "setUser", "currentUser", "forgotPassword", "orders"]),
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
      console.log(this.getAuth)
      if (!this.getAuth.data.errors) {
        this.loading = false;
        this.toast(true, "Авторизация успешна");
        this.close_modal();
        this.setUser();
        this.currentUser()
      } else {
        this.loading = false;
        this.toast(false, "Данные неверны");
      }
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

}
</script>