<template>
  <div>
    <div class="lg:w-full mb-5">
      <h2 class="text-center text-2xl font-medium mb-2">Регистрация</h2>
      <p class="text-center text-sm">Выполните регистрацию для создания заказов в своем личном кабинете</p>
    </div>
    <div
        class="flex flex-col justify-between h-full text-xs"
    >
      <form action="" @submit.prevent="registerUserLocal">
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
                  Имя
                </label>
                <input
                    v-model="form.name"
                    :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
                    name="first_name"
                    placeholder="Введите имя"
                    type="text"
                />
              </div>
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
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
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
                  Телефон
                </label>
                <input
                    v-model="form.phone"
                    :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
                    name="first_name"
                    placeholder="+7(###) ###-##-##"
                    type="text"
                />
              </div>
              <div class="flex flex-col mb-2 w-full">
                <label
                    class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                    for="first_name"
                >
                  Город
                </label>
                <input
                    v-model="form.city"
                    :class="{
                      'border-red-500': v$.form.city.$errors.length,
                    }"
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
                    name="first_name"
                    placeholder="Введите название города"
                    type="text"
                />
              </div>
              <div class="flex flex-col mb-2 w-full">
                <YandexMap @send_data="addressSet"/>
                <p v-if="v$.form.delivery_address.$errors.length" class="text-red-500 text-center font-semibold">
                  Пожалуйста, укажите адрес</p>
              </div>
              <div class="flex flex-col mb-2 w-full">
                <label
                    class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                    for="first_name"
                >
                  Тип доставки
                </label>
                <select
                    id=""
                    v-model="form.delivery_type"
                    :class="{
                      'border-red-500': v$.form.delivery_type.$errors.length,
                    }"
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
                    name="">
                  <option :value="null">Выберите тип</option>
                  <option value="Внутригородская">Внутригородская</option>
                  <option value="Междугородняя">Междугородняя</option>
                </select>
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
                    class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBg dark:text-darkText"
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
              class="w-max text-black mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
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
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {inject} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";
import YandexMap from "@/components/General/YandexMap.vue";

export default {
  name: "Registration",
  components: {YandexMap},
  emits: ["requestToClose", "sendAddId", "close_modal"],
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
        name: null,
        phone: null,
        city: null,
        delivery_address: null,
        password: null,
        delivery_type: null,
        email: null
      },
    };
  },
  computed: {
    ...mapGetters(['getRegisteredUser']),
  },
  validations() {
    return {
      form: {
        name: {required},
        phone: {required},
        city: {required},
        delivery_address: {required},
        password: {required},
        delivery_type: {required},
        email: {required, email}
      },
    };
  },
  methods: {
    ...mapActions([
      "registerUser"
    ]),
    clearModal() {
      this.form = {
        name: null,
        phone: null,
        city: null,
        delivery_address: null,
        password: null,
        delivery_type: null,
        email: null
      };
    },
    addressSet(val) {
      this.form.delivery_address = val.address
    },
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async registerUserLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }

      await this.registerUser(this.form)
          .then(response => {
            console.log(response)
            this.loading = false;
            this.toast(true, "Регистрация успешна");
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
