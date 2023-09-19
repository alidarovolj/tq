<template>
  <div class="pt-24 lg:pt-10">
    <div v-if="getCurrentUser" class="container mx-auto px-4 lg:px-0">
      <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Профиль пользователя: {{
          getCurrentUser.data.name
        }}</h1>
      <div class="block lg:flex items-start justify-between">
        <div class="w-full lg:w-1/3 mb-10 lg:mb-0">
          <p class="font-semibold text-xl mb-4">Данные пользователя</p>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Имя: </p>
            <p class="w-half">{{ getCurrentUser.data.name }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Email: </p>
            <p class="w-half">{{ getCurrentUser.data.email }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Телефон: </p>
            <p class="w-half">{{ getCurrentUser.data.phone }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Город: </p>
            <p class="w-half">{{ getCurrentUser.data.city }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Тип доставки: </p>
            <p class="w-half">{{ getCurrentUser.data.delivery_type }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Адрес доставки: </p>
            <p class="w-half">{{ getCurrentUser.data.delivery_address }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Админ: </p>
            <p v-if="getCurrentUser.data.is_admin === true" class="w-half">Да</p>
            <p v-else class="w-half">Нет</p>
          </div>
          <p v-if="editState === false" class="bg-mainColor px-10 py-2 w-max text-white rounded-md cursor-pointer" @click="editState = true">Изменить</p>
          <p v-else class="bg-mainColor px-10 py-2 w-max text-white rounded-md cursor-pointer" @click="editState = false">Отменить</p>
        </div>
        <div class="w-full lg:w-1/3">
          <p class="font-semibold text-xl mb-4">Смена пароля</p>
          <form @submit.prevent="changePassword" class="mb-2 text-base">
            <div class="flex flex-col mb-2 w-full">
              <label
                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                  for="first_name"
              >
                Текущий пароль
              </label>
              <input
                  v-model="form.current_password"
                  :class="{
                      'border-red-500': v$.form.current_password.$errors.length,
                    }"
                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                  name="first_name"
                  placeholder="Введите текущий пароль"
                  type="text"
              />
            </div>
            <div class="flex flex-col mb-2 w-full">
              <label
                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                  for="first_name"
              >
                Новый пароль
              </label>
              <input
                  v-model="form.new_password"
                  :class="{
                      'border-red-500': v$.form.new_password.$errors.length,
                    }"
                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                  name="first_name"
                  placeholder="Введите новый пароль"
                  type="text"
              />
            </div>
            <div class="flex flex-col mb-2 w-full">
              <label
                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                  for="first_name"
              >
                Подтвердите пароль
              </label>
              <input
                  v-model="form.confirm_password"
                  :class="{
                      'border-red-500': v$.form.confirm_password.$errors.length,
                    }"
                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                  name="first_name"
                  placeholder="Подтвердите пароль"
                  type="text"
              />
            </div>
            <button type="submit" class="bg-mainColor px-10 py-2 w-max text-white rounded-md">Изменить пароль</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {inject} from "vue";

export default {
  name: "ProfilePage",
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  setup() {
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  validations() {
    return {
      form: {
        current_password: {required},
        new_password: {required},
        confirm_password: {required},
      },
    };
  },
  data() {
    return {
      editState: false,
      form: {
        current_password: null,
        new_password: null,
        confirm_password: null,
      },
      changeUserData: {
        name: null,
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('token_exp');
      this.$router.go({name: 'MainPage'})
    },
    changePassword() {
      console.log(this.form)
    }
  }
}
</script>