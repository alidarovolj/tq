<template>
  <div v-for="(product, productIndex) in data"
       :key="productIndex"
       class="bg-white flex flex-col dark:bg-darkBgColor justify-between dark:text-whiteColor w-full lg:w-[200px] mr-0 lg:mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
    <!--    <img alt="" class="absolute left-3 top-3 w-10 h-10 object-contain" src="@/assets/img/logo_hor.png">-->
    <router-link :to="{ name: 'Product', params: { prod_id: product.id } }" class="w-32 h-32 mx-auto">
      <img :src="product.icon" alt="" class="w-full h-full object-contain">
    </router-link>
    <router-link :to="{ name: 'Product', params: { prod_id: product.id } }" class="text-center text-lg font-semibold">
      {{ product.name }}
    </router-link>
    <router-link :to="{ name: 'Product', params: { prod_id: product.id } }"
                 class="text-base font-semibold text-center my-3">{{ product.price }} {{ $t('general.tenge') }}
    </router-link>
    <div class="flex flex-col justify-between h-auto">
      <div>
        <p class="text-center text-green-500 font-bold mb-3" v-if="product.quantity > 0">Есть в наличии</p>
        <p class="text-center text-red-500 font-bold mb-3" v-else>Нет в наличии</p>
        <div v-if="isInCart(product).status === true"
             class="bg-mainColor my-3 text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all flex items-center justify-between">
          <p
              class="w-5 h-5 bg-whiteColor rounded-full text-mainColor flex items-center justify-center"
              @click="addProduct({ product: product, method: 'minus' })">-</p>
          <p>{{ $t('general.quantity') }}: {{ isInCart(product).amount }}</p>
          <p
              class="w-5 h-5 bg-whiteColor rounded-full text-mainColor flex items-center justify-center"
              @click="addProduct({ product: product, method: 'plus' })">+</p>
        </div>
      </div>
      <div>
<!--        <p class="w-full text-center">{{ $t('general.favorite') }}</p>-->
        <p v-if="isInCart(product).status === false"
           class="bg-blackColor cursor-not-allowed my-3 dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all"
           :class="{ 'bg-gray-400' : product.quantity <= 0 }"
           @click="addProduct({ product: product, method: null })">{{ $t('general.toCart') }}
        </p>
      </div>
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