<template>
  <div>
    <form
      action=""
      @submit.prevent="sendForm"
      class="bg-secondaryColor dark:bg-darkBg p-7 rounded-2xl"
    >
      <p class="text-2xl font-semibold mb-5">
        {{ $t("mainPage.hero.form.header") }}
      </p>
      <div class="mb-5">
        <input
          class="dark:bg-darkElBg dark:border-darkBg"
          :class="{
            'border-red-500': v$.form.name.$errors.length,
          }"
          v-model="form.name"
          :placeholder="$t('mainPage.hero.form.name')"
          type="text"
        />
        <p class="text-red-500 text-sm mt-2" v-if="v$.form.name.$errors.length">
          {{ $t("mainPage.hero.form.errors.name") }}
        </p>
      </div>
      <div class="mb-5">
        <input
          class="dark:bg-darkElBg dark:border-darkBg"
          :class="{
            'border-red-500': v$.form.email.$errors.length,
          }"
          v-model="form.email"
          placeholder="Email"
          type="text"
        />
        <p
          class="text-red-500 text-sm mt-2"
          v-if="v$.form.email.$errors.length"
        >
          {{ $t("mainPage.hero.form.errors.email") }}
        </p>
      </div>
      <div class="mb-5">
        <input
          class="dark:bg-darkElBg dark:border-darkBg"
          :class="{
            'border-red-500': v$.form.phone.$errors.length,
          }"
          v-model="form.phone"
          v-mask="'+7(###) ###-##-##'"
          placeholder="+7 (777) 777-77-77"
          type="text"
        />
        <p
          class="text-red-500 text-sm mt-2"
          v-if="v$.form.phone.$errors.length"
        >
          {{ $t("mainPage.hero.form.errors.phone") }}
        </p>
      </div>
      <button
        class="px-5 py-4 mb-5 rounded-2xl font-semibold bg-mainColor text-white w-full"
        type="submit"
      >
        <span v-if="!loading">{{ $t("mainPage.hero.form.button") }}</span>
        <Loader v-else />
      </button>
      <div class="flex items-start">
        <input v-model="form.agreement" class="mt-2 mr-4" type="checkbox" />
        <p
          @click="form.agreement = !form.agreement"
          class="text-xs"
          :class="{
            'text-red-500': v$.form.agreement.$errors.length,
          }"
        >
          {{ $t("mainPage.hero.form.agreement") }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import Loader from "@/components/General/Loader.vue";

export default {
  name: "SendMessage",
  data() {
    return {
      loading: false,
      form: {
        name: null,
        email: null,
        phone: null,
        agreement: false,
      },
    };
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
        email: { required, email },
        phone: { required },
        agreement: { accepted: (val) => val === true },
      },
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.notify(false, "Пожалуйста, проверьте заполненность формы");
        return;
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