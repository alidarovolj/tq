<template>
  <div class="pt-24 lg:pt-10">
    <form class="container mx-auto px-4 lg:px-0" @submit.prevent="createOrderLocal">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h1 @click="redirectToExternalLink" class="text-2xl font-semibold dark:text-whiteColor mb-3">
            {{ $t('cart.header') }}</h1>
          <p class="text-lg font-semibold dark:text-whiteColor">{{ $t('cart.overall') }}: {{
              getCart.products.length
            }}</p>
        </div>
        <p class="text-red-500 cursor-pointer" @click="clearCart">{{ $t('cart.removeCart') }}</p>
      </div>
      <div v-if="getOrdersCheck" class="block lg:flex justify-between">
        <div v-if="getCart.products.length > 0" class="w-full lg:w-[65%] dark:text-whiteColor mb-10 lg:mb-0">
          <div v-for="(item, index) of getCart.products" :key="index"
               :class="[{ '!mb-0' : index + 1 === getCart.products.length }, { 'border border-red-500' : getOrdersCheck.products[index].is_acceptable === false && getOrdersCheck.products[index].available_count < getCart.products[index].amount }]"
               class="bg-white dark:bg-darkBgColor p-5 mb-5 rounded-xl block lg:flex items-center justify-between">
            <div class="flex items-center">
              <img :src="item.icon" alt="" class="w-[100px] mr-3">
              <div>
                <p v-if="$i18n.locale === 'ru'" class="text-xl font-semibold">{{ item.name }}</p>
                <p v-else class="text-xl font-semibold">{{ item.name_kz }}</p>
                <p v-if="$i18n.locale === 'ru'" class="mb-3">{{ item.description }}</p>
                <p v-else class="mb-3">{{ item.description_kz }}</p>
                <p v-if="$i18n.locale === 'ru' && getOrdersCheck.products[index].is_acceptable === false && getOrdersCheck.products[index].available_count < getCart.products[index].amount"
                   class="mb-3 text-red-500 font-bold">{{ $t('cart.notEnough') }}.:
                  {{ getOrdersCheck.products[index].available_count }})</p>
                <div v-if="isInCart(item)" class="flex items-center justify-between mb-5 text-lg w-max">
                  <p
                      class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                      @click="addProduct({ product: item, method: 'minus' })">-</p>
                  <p class="mx-3">{{ $t('cart.amount') }}: {{ isInCart(item).amount }}</p>
                  <p
                      class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                      @click="addProduct({ product: item, method: 'plus' })">+</p>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between text-lg mr-3">
                <p class="mr-1">{{ $t('general.price') }}:</p>
                <p class="font-semibold whitespace-nowrap">{{ item.price_main }} {{ $t('general.tenge') }}</p>
              </div>
              <div>
                <font-awesome-icon
                    :icon="['fas', 'trash']" class="text-red-500 text-2xl cursor-pointer"
                    @click="removeProductFromCart(item)"/>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-5">
            <p class="text-lg lg:text-2xl font-semibold">{{ $t('general.overall') }}: {{ getCart.price_main }} {{ $t('general.tenge') }}</p>
            <button
                class="bg-mainColor text-center py-2 lg:py-3 font-bold text-white rounded-lg lg:mb-5 cursor-pointer px-10 text-sm lg:text-base"
                type="submit">
              {{ $t('cartForm.button') }}
            </button>
          </div>
        </div>
        <p v-else class="text-center text-lg font-semibold text-red-500">
          {{ $t('cart.noItems') }}
        </p>
        <div
            class="w-full lg:w-[33%] bg-white p-5 rounded-xl flex flex-col justify-between h-max sticky top-36 dark:bg-darkBgColor dark:text-whiteColor">
          <p class="text-xl font-semibold dark:text-whiteColor mb-3">{{ $t('cartForm.heading') }}</p>
          <div>
            <div class="block mb-1">
              <p class="font-semibold">{{ $t('cartForm.name.name') }}:</p>
              <input v-model="form.name"
                     :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.name.placeholder')"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">{{ $t('cartForm.email.name') }}:</p>
              <input v-model="form.email"
                     :class="{
                      'border-red-500': v$.form.email.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.email.placeholder')"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">{{ $t('cartForm.phone.name') }}:</p>
              <input v-model="form.phone"
                     :class="{
                      'border-red-500': v$.form.phone.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.phone.placeholder')"
                     type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">{{ $t('cartForm.address.name') }}:</p>
              <input v-model="form.delivery_address"
                     :class="{
                      'border-red-500': v$.form.delivery_address.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.address.placeholder')" type="text">
            </div>
            <div class="block mb-1">
              <p class="font-semibold">{{ $t('cartForm.address.city') }}:</p>
              <input v-model="form.city"
                     :class="{
                      'border-red-500': v$.form.city.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.address.city_placeholder')" type="text">
            </div>
            <div class="block">
              <p class="font-semibold">{{ $t('cartForm.type_first.name') }}:</p>
              <input v-model="form.delivery_type"
                     :class="{
                      'border-red-500': v$.form.delivery_type.$errors.length,
                    }"
                     class="border rounded-md p-2 w-full mb-2 dark:text-blackColor"
                     :placeholder="$t('cartForm.type_first.placeholder')" type="text">
            </div>
            <div class="">
              <p class="font-semibold">{{ $t('cartForm.type.name') }}:</p>
              <div class="flex items-center">
                <input v-model="form.payment_type"
                       :class="{
                      'border-red-500': v$.form.payment_type.$errors.length,
                    }"
                       class="mr-2 dark:text-blackColor" type="radio"
                       value="cart">
                <p>{{ $t('cartForm.type.first') }}</p>
              </div>
              <div class="flex items-center">
                <input v-model="form.payment_type"
                       :class="{
                      'border-red-500': v$.form.payment_type.$errors.length,
                    }"
                       class="mr-2 dark:text-blackColor" type="radio"
                       value="by-manager">
                <p>{{ $t('cartForm.type.second') }}</p>
              </div>
              <p v-if="v$.form.payment_type.$errors.length" class="text-red-500 text-center">
                {{ $t('cart.fillData') }}
              </p>
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
      ready: false,
      form: {
        name: null,
        phone: null,
        email: null,
        order_number: String(localStorage.getItem('orderNumber')),
        delivery_address: null,
        delivery_type: null,
        payment_type: null,
        amount: null,
        is_payed: false,
        city: null,
        products: [],
      },
      check: {
        products: []
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
        city: {required}
      },
    };
  },
  computed: {
    ...mapGetters(['getProduct', 'getSameProducts', 'getCart', "getCurrentUser", "getOrdersCheck", "getCreatedOrder"])
  },
  async mounted() {
    await this.checkProductsLocal();
    await this.ordersCheck(this.check);
    this.form.amount = this.getCart.price_main
    setInterval(async () => {
      await this.checkProductsLocal();
      await this.ordersCheck(this.check);
    }, 10000);
    if (this.getCurrentUser) {
      this.form.name = this.getCurrentUser.data.name
      this.form.phone = this.getCurrentUser.data.phone
      this.form.email = this.getCurrentUser.data.email
      this.form.order_number = localStorage.getItem('orderNumber')
      this.form.delivery_address = this.getCurrentUser.data.delivery_address
      this.form.delivery_type = this.getCurrentUser.data.delivery_type
      this.form.payment_type = this.getCurrentUser.data.payment_type
      this.form.is_payed = false
      this.form.city = this.getCurrentUser.data.city
    } else {
      console.log('Данных нет')
    }
  },
  methods: {
    ...mapActions(['cart', 'product', 'sameProducts', 'addProduct', 'createOrder', 'clearCart', 'removeProductFromCart', 'ordersCheck']),
    async checkProductsLocal() {
      await this.getCart.products.forEach((item) => {
        let product = {
          id: item.id,
          count: item.amount
        }
        this.form.products.push(product)
        this.check.products.push(product)
      })
    },
    redirectToExternalLink(link) {
      window.location.href = link;
    },
    async createOrderLocal() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }

      try {
        const checkResults = await Promise.all(this.getCart.products.map(async (item, index) => {
          if (item.amount > this.getOrdersCheck.products[index].available_count) {
            throw new Error("Пожалуйста, проверьте наличие товара");
          } else {
            return "Все ок";
          }
        }));

        if (checkResults.every(result => result === "Все ок")) {
          let prods = []
          this.getCart.products.forEach((item) => {
            let product = {
              id: item.id,
              count: item.amount
            }
            prods.push(product)
          })
          this.form.products = prods
          await this.createOrder(this.form);
          this.loading = false;
          this.toast(true, "Заказ успешно выполнен");
          localStorage.setItem('cart', JSON.stringify([]));

          const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let result = "";
          for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            result += symbols.charAt(randomIndex);
          }
          localStorage.setItem('orderNumber', JSON.stringify(result));
          if (this.form.payment_type === "cart") {
            this.redirectToExternalLink(this.getCreatedOrder.pg_redirect_url)
          } else {
            this.$router.go()
          }
        }
      } catch (error) {
        this.loading = false;
      }
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