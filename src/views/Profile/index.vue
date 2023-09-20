<template>
  <div class="pt-24 lg:pt-10">
    <div v-if="getCurrentUser" class="container mx-auto px-4 lg:px-0">
      <h1 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Профиль пользователя: {{
          getCurrentUser.data.name
        }}</h1>
      <div class="block lg:flex items-start dark:text-whiteColor">
        <div class="w-full lg:w-1/3 mb-10 lg:mb-0">
          <p class="font-semibold text-xl mb-4">Данные пользователя</p>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Email: </p>
            <p class="w-half">{{ getCurrentUser.data.email }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Телефон: </p>
            <p class="w-half">{{ getCurrentUser.data.phone }}</p>
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Имя: </p>
            <p v-if="editState === false" class="w-half">{{ getCurrentUser.data.name }}</p>
            <input
                v-else
                v-model="changeUserData.name"
                :class="{
                      'border-red-500': v$.changeUserData.name.$errors.length,
                    }"
                class="w-half py-1 pl-4 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white"
                name="first_name"
                placeholder="Введите имя"
                type="text"
            />
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Название компании: </p>
            <p v-if="editState === false" class="w-half">{{ getCurrentUser.data.company_name }}</p>
            <input
                v-else
                v-model="changeUserData.company_name"
                :class="{
                      'border-red-500': v$.changeUserData.company_name.$errors.length,
                    }"
                class="w-half py-1 pl-4 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white"
                name="first_name"
                placeholder="Введите название компании"
                type="text"
            />
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Город: </p>
            <p v-if="editState === false" class="w-half">{{ getCurrentUser.data.city }}</p>
            <input
                v-else
                v-model="changeUserData.city"
                :class="{
                      'border-red-500': v$.changeUserData.city.$errors.length,
                    }"
                class="w-half py-1 pl-4 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white"
                name="first_name"
                placeholder="Введите название города"
                type="text"
            />
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Тип доставки: </p>
            <p v-if="editState === false" class="w-half">{{ getCurrentUser.data.delivery_type }}</p>
            <input
                v-else
                v-model="changeUserData.delivery_type"
                :class="{
                      'border-red-500': v$.changeUserData.delivery_type.$errors.length,
                    }"
                class="w-half py-1 pl-4 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white"
                name="first_name"
                placeholder="Введите тип доставки"
                type="text"
            />
          </div>
          <div class="flex items-center mb-2 text-base justify-between">
            <p class="mr-1 font-semibold w-half">Адрес доставки: </p>
            <p v-if="editState === false" class="w-half">{{ getCurrentUser.data.delivery_address }}</p>
            <input
                v-else
                v-model="changeUserData.delivery_address"
                :class="{
                      'border-red-500': v$.changeUserData.delivery_address.$errors.length,
                    }"
                class="w-half py-1 pl-4 border border-solid border-[#D8D6DE] rounded-md dark:bg-darkBgColor dark:text-white"
                name="first_name"
                placeholder="Введите адрес доставки"
                type="text"
            />
          </div>
          <div class="flex">
            <p v-if="editState === true"
               class="bg-mainColor mr-3 px-10 w-half py-2 text-white text-center rounded-md cursor-pointer"
               @click="updateUserLocal">Подтвердить</p>
            <p v-if="editState === false"
               class="bg-mainColor text-center px-10 py-2 w-half text-white rounded-md cursor-pointer"
               @click="editState = true">Изменить</p>
            <p v-else class="bg-mainColor px-10 py-2 w-half text-center text-white rounded-md cursor-pointer"
               @click="editState = false">Отменить</p>
          </div>
        </div>
<!--        <div class="w-full lg:w-1/3">-->
<!--          <p class="font-semibold text-xl mb-4">Смена пароля</p>-->
<!--          <form class="mb-2 text-base" @submit.prevent="changePassword">-->
<!--            <div class="flex flex-col mb-2 w-full">-->
<!--              <label-->
<!--                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"-->
<!--                  for="first_name"-->
<!--              >-->
<!--                Текущий пароль-->
<!--              </label>-->
<!--              <input-->
<!--                  v-model="form.current_password"-->
<!--                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"-->
<!--                  name="first_name"-->
<!--                  placeholder="Введите текущий пароль"-->
<!--                  type="text"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="flex flex-col mb-2 w-full">-->
<!--              <label-->
<!--                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"-->
<!--                  for="first_name"-->
<!--              >-->
<!--                Новый пароль-->
<!--              </label>-->
<!--              <input-->
<!--                  v-model="form.new_password"-->
<!--                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"-->
<!--                  name="first_name"-->
<!--                  placeholder="Введите новый пароль"-->
<!--                  type="text"-->
<!--              />-->
<!--            </div>-->
<!--            <div class="flex flex-col mb-2 w-full">-->
<!--              <label-->
<!--                  class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"-->
<!--                  for="first_name"-->
<!--              >-->
<!--                Подтвердите пароль-->
<!--              </label>-->
<!--              <input-->
<!--                  v-model="form.confirm_password"-->
<!--                  class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"-->
<!--                  name="first_name"-->
<!--                  placeholder="Подтвердите пароль"-->
<!--                  type="text"-->
<!--              />-->
<!--            </div>-->
<!--            <button class="bg-mainColor px-10 py-2 w-max text-white rounded-md" type="submit">Изменить пароль</button>-->
<!--          </form>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
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
      changeUserData: {
        name: {required},
        delivery_address: {required},
        delivery_type: {required},
        city: {required},
        company_name: {required}
      }
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
        delivery_address: null,
        delivery_type: null,
        city: null,
        company_name: null
      }
    }
  },
  async mounted() {
    await this.currentUser()
    this.changeUserData.name = this.getCurrentUser.data.name
    this.changeUserData.delivery_address = this.getCurrentUser.data.delivery_address
    this.changeUserData.delivery_type = this.getCurrentUser.data.name
    this.changeUserData.city = this.getCurrentUser.data.city
    this.changeUserData.company_name = this.getCurrentUser.data.company_name
  },
  methods: {
    ...mapActions(['updateUser', 'currentUser']),
    async updateUserLocal(status) {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }

      await this.updateUser({id: this.getCurrentUser.data.id, form: this.changeUserData})
          .then(() => {
            this.toast(true, "Пользователь успешно отредактирован");
            this.currentUser();
            this.editState = false
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