<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        Введите ваш телефон
      </h2>
      <p class="text-sm text-center">
        Введите ваш телефон, а после подтвердите его кодом, что придет на данный номер.
      </p>
    </div>
    <form class="flex flex-col justify-center text-sm mt-5" @submit.prevent="verifyPhone">
      <div class="flex flex-col mb-2 w-full">
        <label
            class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
            for="first_name"
        >
          Телефон
        </label>
        <input
            v-model="form.phone"
            v-mask="'+7(###) ###-##-##'"
            :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
            :disabled="secondPhase === true"
            class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
            name="first_name"
            placeholder="+7(###) ###-##-##"
            type="text"
        />
      </div>
      <div v-if="secondPhase === true" class="my-3 w-1/2 mx-auto flex items-center justify-center flex-col">
        <p class="text-xl font-bold mb-2">Введите код:</p>
        <input
            v-model="verification.code"
            class="w-1/2 mx-auto py-2 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white text-2xl text-center"
            type="text">
      </div>
      <div class="flex justify-center">
        <div
            class="w-max text-black mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
            @click="close_modal"
        >
          <p class="dark:text-red-500">Отменить</p>
        </div>
        <div v-if="!secondPhase">
          <button
              v-if="loading === false"
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-mainColor text-white cursor-pointer"
              type="submit">
            Отправить
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            Подождите
          </div>
        </div>
        <div v-else>
          <p
              v-if="loading === false"
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-mainColor text-white cursor-pointer"
              @click="verifyCode">
            Верифицировать
          </p>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            Подождите
          </div>
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
import {mask} from "vue-the-mask";

export default {
  name: "RolesDelete",
  props: {
    tranId: {
      type: Object,
      required: false,
    },
  },
  directives: {
    mask,
  },
  emits: ['requestToClose', 'sendAddId'],
  validations() {
    return {
      form: {
        phone: {required},
      },
    };
  },
  setup() {
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  data() {
    return {
      cleanPhoneNumber: null,
      secondPhase: false,
      loading: false,
      form: {
        phone: null,
      },
      verification: {
        phone: null,
        code: null,
      }
    }
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions(['sendMessage', 'validatePhone']),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    removeSymbols() {
      this.cleanPhoneNumber = this.form.phone.replace(/\D/g, "");
      this.form.phone = this.cleanPhoneNumber
    },
    async verifyPhone() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      this.removeSymbols()
      this.$router.push({query: {phone: this.cleanPhoneNumber}})
      await this.sendMessage()
          .then(response => {
            console.log(response)
            this.loading = false;
            this.toast(true, "Введите присланный код");
            this.secondPhase = true;
            this.verification.phone = this.cleanPhoneNumber
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
    async verifyCode() {
      await this.validatePhone(this.verification)
          .then(response => {
            console.log(response)
            this.loading = false;
            this.toast(true, "Телефон успешно подтвержден");
            this.close_modal()
            this.$emit("sendAddId", this.verification.phone);
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
