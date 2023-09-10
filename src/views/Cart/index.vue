<template>
  <div class="pt-24 lg:pt-10">
    <div class="container mx-auto px-4 lg:px-0">
      <h1 class="text-2xl font-semibold dark:text-whiteColor mb-3">Корзина TrustQuality</h1>
      <p class="text-lg font-semibold mb-10">Всего товаров: {{ getCart.products.length }}</p>
      <div v-if="getCart.products.length > 0">
        <div v-for="(item, index) of getCart.products" :key="index"
             class="bg-white dark:bg-darkBgColor p-5 mb-5 rounded-xl block lg:flex items-center justify-between">
          <div class="flex items-center">
            <img :src="item.icon" alt="" class="w-[100px] mr-3 lg:mr-0">
            <div>
              <p class="text-xl font-semibold">{{ item.name }}</p>
              <p class="mb-3">{{ item.description }}</p>
              <div v-if="isInCart(item)" class="flex items-center justify-between mb-5 text-lg w-max">
                <p
                    class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg"
                    @click="addProduct({ product: item, method: 'minus' })">-</p>
                <p class="mx-3">Кол-во: {{ isInCart(item).amount }}</p>
                <p
                    class="w-7 h-7 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg"
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
        <div class="flex items-center justify-between">
          <p class="text-lg lg:text-2xl font-semibold">Итого: {{ getCart.price_main }} {{ $t('general.tenge') }}</p>
          <p class="bg-mainColor text-center py-2 lg:py-3 font-bold text-white rounded-lg lg:mb-5 cursor-pointer px-10 text-sm lg:text-base">Оформить заказ</p>
        </div>
      </div>
      <p v-else class="text-center text-lg font-semibold text-red-500">
        В данный момент ваша корзина пуста
      </p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapGetters(['getProduct', 'getSameProducts', 'getCart'])
  },
  methods: {
    ...mapActions(['cart', 'product', 'sameProducts', 'addProduct']),
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