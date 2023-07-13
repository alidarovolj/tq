<template>
  <section class="mt-20">
    <div class="container mx-auto px-4 lg:px-0 dark:text-darkText">
      <div class="w-1/2 mx-auto rounded-2xl bg-white p-7">
        <p class="text-2xl font-semibold mb-5">
          {{ $t("login.header") }}
        </p>
        <div class="flex justify-center"></div>
        <form action="" @submit.prevent="sendForm">
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              :class="{
                '!border-red-500 border': v$.form.email.$errors.length,
              }"
              v-model="form.email"
              :placeholder="$t('login.email.placeholder')"
              type="text"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.email.$errors.length"
            >
              {{ $t("login.email.name") }}
            </p>
          </div>
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              :class="{
                '!border-red-500 border': v$.form.password.$errors.length,
              }"
              v-model="form.password"
              :placeholder="$t('login.password.placeholder')"
              type="password"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.password.$errors.length"
            >
              {{ $t("registration.login.name") }}
            </p>
          </div>
          <button
            class="px-5 py-4 mb-5 rounded-2xl font-semibold bg-mainColor text-white w-full"
            type="submit"
          >
            <span v-if="!loading">{{ $t("login.button") }}</span>
            <Loader v-else />
          </button>
          <p class="text-mainColor text-sm text-center">
            {{ $t("login.login_alias") }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
  
  <script>
import { mask } from "vue-the-mask";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import Loader from "@/components/General/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      loading: false,
      form: {
        email: null,
        password: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getAuth", "getUser"]),
  },
  components: {
    Loader,
  },
  directives: {
    mask,
  },
  validations() {
    return {
      form: {
        email: { required, email },
        password: { required },
      },
    };
  },
  methods: {
    ...mapActions(["authUser", "setUser"]),
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        console.log(this.v$);
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }
      await this.authUser(this.form);
      await this.setUser();

      if (this.getAuth) {
        this.loading = false;
        this.notify(true, "Вы успешно вошли на сайт");
        this.$router.push("/");
      } else {
        this.loading = false;
        this.notify(false, "Email или пароль неверны");
      }
    },
  },
  setup() {
    const notify = (toastState, toastText) => {
      if (toastState) {
        toast.success(toastText, {
          autoClose: 2000,
        });
      } else {
        toast.error(toastText, {
          autoClose: 2000,
        });
      }
    };
    return {
      v$: useVuelidate(),
      notify,
    };
  },
};
</script>