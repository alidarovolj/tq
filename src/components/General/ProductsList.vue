<template>
  <div v-for="(product, productIndex) in data"
       :key="productIndex"
       class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between w-[200px] mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
    <img alt="" class="absolute left-3 top-3 w-10 h-10 object-contain" src="@/assets/img/logo_hor.png">
    <img :src="product.icon" alt="" class="w-32 h-32 mx-auto object-contain">
    <p class="text-center text-lg font-semibold">{{ product.name }}</p>
    <p class="text-base font-semibold text-center my-3">{{ product.price }} тнг.</p>
    <div class="block">
      <p class="w-full text-center">В избранное</p>
      <p v-if="isInCart(product)"
         class="bg-mainColor my-3 dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all"
         @click="addProduct(product)">
        Добавлено
      </p>
      <p v-else
         class="bg-blackColor my-3 dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all"
         @click="addProduct(product)">В корзину
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
      // Check if the product with the same id exists in the cart
      return this.getCart.products.some((cartProduct) => cartProduct.id === product.id);
    },
  }
}
</script>