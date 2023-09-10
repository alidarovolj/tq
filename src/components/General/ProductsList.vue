<template>
  <div v-for="(product, productIndex) in data"
       :key="productIndex"
       class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between w-full lg:w-[200px] mr-0 lg:mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
    <img alt="" class="absolute left-3 top-3 w-10 h-10 object-contain" src="@/assets/img/logo_hor.png">
    <img :src="product.icon" alt="" class="w-32 h-32 mx-auto object-contain">
    <p class="text-center text-lg font-semibold">{{ product.name }}</p>
    <p class="text-base font-semibold text-center my-3">{{ product.price }} тнг.</p>
    <div class="block">
      <p class="w-full text-center">В избранное</p>
      <div v-if="isInCart(product).status === true"
           class="bg-mainColor my-3 text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all flex items-center justify-between">
        <p
            class="w-5 h-5 bg-whiteColor rounded-full text-mainColor flex items-center justify-center"
            @click="addProduct({ product: product, method: 'minus' })">-</p>
        <p>Кол-во: {{ isInCart(product).amount }}</p>
        <p
            class="w-5 h-5 bg-whiteColor rounded-full text-mainColor flex items-center justify-center"
            @click="addProduct({ product: product, method: 'plus' })">+</p>
      </div>
      <p v-else
         class="bg-blackColor my-3 dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all"
         @click="addProduct({ product: product, method: null })">В корзину
      </p>
      <router-link :to="{ name: 'Product', params: { prod_id: product.id } }"
                   class="text-center mx-auto w-max flex justify-center">Перейти на страницу
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProductsList",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  },
  methods: {
    ...mapActions(['addProduct']),
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