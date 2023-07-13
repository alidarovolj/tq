<template>
  <section class="mt-20">
    <div class="container mx-auto px-4 lg:px-0 dark:text-darkText">
      <div class="w-1/2 mx-auto rounded-2xl bg-white p-7">
        <p class="text-2xl font-semibold mb-5">
          {{ $t("registration.header") }}
        </p>
        <div class="flex justify-center"></div>
        <form action="" @submit.prevent="sendForm">
          <div class="flex justify-between">
            <div class="mb-5 w-third">
              <input
                class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
                :class="{
                  '!border-red-500 border': v$.form.name.$errors.length,
                }"
                v-model="form.name"
                :placeholder="$t('registration.name.placeholder')"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.name.$errors.length"
              >
                {{ $t("registration.name.name") }}
              </p>
            </div>
            <div class="mb-5 w-third">
              <input
                class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
                :class="{
                  '!border-red-500 border': v$.form.lastname.$errors.length,
                }"
                v-model="form.lastname"
                :placeholder="$t('registration.lastname.placeholder')"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.lastname.$errors.length"
              >
                {{ $t("registration.lastname.name") }}
              </p>
            </div>
            <div class="mb-5 w-third">
              <input
                class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
                :class="{
                  '!border-red-500 border': v$.form.patro.$errors.length,
                }"
                v-model="form.patro"
                :placeholder="$t('registration.patro.placeholder')"
                type="text"
              />
              <p
                class="text-red-500 text-sm mt-2"
                v-if="v$.form.patro.$errors.length"
              >
                {{ $t("registration.patro.name") }}
              </p>
            </div>
          </div>
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              :class="{
                '!border-red-500 border': v$.form.email.$errors.length,
              }"
              v-model="form.email"
              :placeholder="$t('registration.email.placeholder')"
              type="text"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.email.$errors.length"
            >
              {{ $t("registration.email.name") }}
            </p>
          </div>
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              v-mask="'+7(###) ###-##-##'"
              :class="{
                '!border-red-500 border': v$.form.phone.$errors.length,
              }"
              v-model="form.phone"
              placeholder="+7 (777) 777-77-77"
              type="text"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.phone.$errors.length"
            >
              {{ $t("registration.phone.name") }}
            </p>
          </div>
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              :class="{
                '!border-red-500 border': v$.form.password.$errors.length,
              }"
              v-model="form.password"
              :placeholder="$t('registration.password.placeholder')"
              type="password"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.password.$errors.length"
            >
              {{ $t("registration.password.name") }}
            </p>
          </div>
          <div class="mb-5">
            <input
              class="dark:bg-darkElBg dark:border-darkBg bg-secondaryColor"
              :class="{
                '!border-red-500 border':
                  v$.form.password_confirmation.$errors.length,
              }"
              v-model="form.password_confirmation"
              :placeholder="$t('registration.confirm_password.placeholder')"
              type="password"
            />
            <p
              class="text-red-500 text-sm mt-2"
              v-if="v$.form.password_confirmation.$errors.length"
            >
              {{ $t("registration.confirm_password.name") }}
            </p>
          </div>
          <button
            class="px-5 py-4 mb-5 rounded-2xl font-semibold bg-mainColor text-white w-full"
            type="submit"
          >
            <span v-if="!loading">{{ $t("registration.button") }}</span>
            <Loader v-else />
          </button>
          <p class="text-mainColor text-sm text-center">
            {{ $t("registration.login_alias") }}
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
        name: null,
        lastname: null,
        patro: null,
        phone: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getRegistration"]),
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
        name: { required },
        lastname: { required },
        patro: { required },
        phone: { required },
        email: { required, email },
        password: { required },
        password_confirmation: { required },
      },
    };
  },
  methods: {
    ...mapActions(["registration"]),
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        console.log(this.v$);
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
      }
      await this.registration(this.form);

      if (this.getRegistration.success == true) {
        this.loading = false;
        this.notify(false, "Вы успешно зарегистрированы!");
        this.$router.push("/");
      } else if (this.getRegistration.success == false) {
        this.loading = false;
        this.notify(false, this.getRegistration.error);
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