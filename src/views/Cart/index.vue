<template>
  <div class="pt-24 lg:pt-10">
    <form class="container mx-auto px-4 lg:px-0" @submit.prevent="createOrderLocal">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h1 class="text-2xl font-semibold dark:text-whiteColor mb-3">Корзина TrustQuality</h1>
          <p class="text-lg font-semibold">Всего товаров: {{ getCart.products.length }}</p>
        </div>
        <p @click="clearCart" class="text-red-500">Очистить корзину</p>
      </div>
      <div class="flex justify-between">
        <div v-if="getCart.products.length > 0" class="w-[65%]">
          <div v-for="(item, index) of getCart.products" :key="index"
               :class="{ '!mb-0' : index + 1 === getCart.products.length }"
               class="bg-white dark:bg-darkBgColor p-5 mb-5 rounded-xl block lg:flex items-center justify-between">
            <div class="flex items-center">
              <img :src="item.icon" alt="" class="w-[100px] mr-3 lg:mr-0">
              <div>
                <p class="text-xl font-semibold">{{ item.name }}</p>
                <p class="mb-3">{{ item.description }}</p>
                <div v-if="isInCart(item)" class="flex items-center justify-between mb-5 text-lg w-max">
                  <p
                      class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                      @click="addProduct({ product: item, method: 'minus' })">-</p>
                  <p class="mx-3">Кол-во: {{ isInCart(item).amount }}</p>
                  <p
                      class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                      @click="addProduct({ product: item, method: 'plus' })">+</p>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between text-lg mr-3">
                <p>Цена:</p>
                <p class="font-semibold">{{ item.price_main }} {{ $t('general.tenge') }}</p>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'trash']" class="text-red-500 text-2xl cursor-pointer"/>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-5">
            <p class="text-lg lg:text-2xl font-semibold">Итого: {{ getCart.price_main }} {{ $t('general.tenge') }}</p>
            <button
                class="bg-mainColor text-center py-2 lg:py-3 font-bold text-white rounded-lg lg:mb-5 cursor-pointer px-10 text-sm lg:text-base"
                type="submit">
              Оформить заказ
            </button>
          </div>
        </div>
        <p v-else class="text-center text-lg font-semibold text-red-500">
          В данный момент ваша корзина пуста
        </p>
        <div class="w-[33%] bg-white p-5 rounded-xl flex flex-col justify-between h-max sticky top-36">
          <p class="text-xl font-semibold dark:text-whiteColor mb-3">Заполните данные заказа</p>
          <div>
            <div class="block mb-1">
              <p class="font-semibold">Имя:</p>
              <input v-model="form.name"
                     :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2" placeholder="Введите имя"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">Email:</p>
              <input v-model="form.email"
                     :class="{
                      'border-red-500': v$.form.email.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2" placeholder="Введите email"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">Телефон:</p>
              <input v-model="form.phone"
                     :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2" placeholder="Введите телефон"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">Адрес:</p>
              <input v-model="form.delivery_address"
                     :class="{
                      'border-red-500': v$.form.delivery_address.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2"
                     placeholder="Введите адрес" type="text">
            </div>
            <div class="block">
              <p class="font-semibold">Тип доставки:</p>
              <input v-model="form.delivery_type"
                     :class="{
                      'border-red-500': v$.form.delivery_type.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2"
                     placeholder="Введите тип доставки" type="text">
            </div>
            <div class="">
              <p class="font-semibold">Тип платежа:</p>
              <div class="flex items-center">
                <input v-model="form.payment_type"
                       :class="{
                      'border-red-500': v$.form.payment_type.$errors.length,
                    }"
                       class="mr-2" type="radio"
                       value="cart" @click="() => form.payment_type = 'card'">
                <p>Банковский платеж</p>
              </div>
              <div class="flex items-center">
                <input v-model="form.payment_type"
                       :class="{
                      'border-red-500': v$.form.payment_type.$errors.length,
                    }"
                       class="mr-2" type="radio"
                       value="by-manager" @click="() => form.payment_type = 'by-manager'">
                <p>Через менеджера</p>
              </div>
              <p v-if="v$.form.payment_type.$errors.length" class="text-red-500 text-center">Заполните данные об
                оплате</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {useVuelidate} from "@vuelidate/core";
import {inject} from "vue";
import {email, required} from "@vuelidate/validators";

export default {
  name: "CartPage",
  setup() {
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  data() {
    return {
      form: {
        name: null,
        phone: null,
        email: null,
        order_number: null,
        delivery_address: null,
        delivery_type: null,
        payment_type: null,
        amount: null,
        is_payed: null,
        city: null,
        products: [],
      }
    }
  },
  validations() {
    return {
      form: {
        name: {required},
        phone: {required},
        email: {required, email},
        order_number: {required},
        delivery_address: {required},
        delivery_type: {required},
        payment_type: {required},
        amount: {required},
        is_payed: {required},
        city: {required},
        products: {required}
      },
    };
  },
  computed: {
    ...mapGetters(['getProduct', 'getSameProducts', 'getCart', "getCurrentUser"])
  },
  mounted() {
    this.getCart.products.forEach((item) => {
      let product = {
        id: item.id,
        count: item.amount
      }
      this.form.products.push(product)
    })
    if (this.getCurrentUser) {
      this.form.name = this.getCurrentUser.data.name
      this.form.phone = this.getCurrentUser.data.phone
      this.form.email = this.getCurrentUser.data.email
      this.form.order_number = localStorage.getItem('orderNumber')
      this.form.delivery_address = this.getCurrentUser.data.delivery_address
      this.form.delivery_type = this.getCurrentUser.data.delivery_type
      this.form.payment_type = this.getCurrentUser.data.payment_type
      this.form.amount = this.getCart.price_main
      this.form.is_payed = false
      this.form.city = this.getCurrentUser.data.city
    } else {
      console.log('Данных нет')
    }
  },
  methods: {
    ...mapActions(['cart', 'product', 'sameProducts', 'addProduct', 'createOrder', 'clearCart']),
    async createOrderLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.createOrder(this.form)
          .then(() => {
            this.loading = false;
            this.toast(true, "Заказ успешно выполнен");
            localStorage.setItem('cart', JSON.stringify([]))

            const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < 6; i++) {
              const randomIndex = Math.floor(Math.random() * symbols.length);
              result += symbols.charAt(randomIndex);
            }
            localStorage.setItem('orderNumber', JSON.stringify(result))
            this.$router.go({name: "MainPage"})
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
    isInCart(product) {
      const cartProducts = this.getCart.products;
      for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].id === product.id) {
          return {
            status: true,
            amount: cartProducts[i].amount,
            index: i
          };
        }
      }
      return {
        status: false,
        amount: 0,
        index: -1
      };
    }
  }
}
</script>