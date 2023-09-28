<template>
  <div class="pt-24 lg:pt-10">
    <div v-if="getProduct" class="container mx-auto px-4 lg:px-0">
      <BreadcrumbsComponent :get-links="links" class="mb-4"/>
      <div class="block lg:flex items-start justify-between mb-10">
        <div
            class="bg-white dark:bg-darkBgColor text-blackColor dark:text-white w-full lg:w-[65%] p-7 rounded-lg shadow-lg mb-5 lg:mb-0">
          <h1 v-if="$i18n.locale === 'ru'" class="text-xl font-semibold mb-3">{{ getProduct.data.name }}</h1>
          <h1 v-else class="text-xl font-semibold mb-3">{{ getProduct.data.name_kz }}</h1>
          <div class="block lg:flex items-start">
            <img :src="getProduct.data.icon" alt="" class="w-full lg:w-1/3 mr-3">
            <div class="flex flex-col justify-between h-full w-full lg:w-1/3">
              <div class="w-full mb-5">
                <p class="font-semibold mb-5 text-xl">{{ $t('product.description') }}:</p>
                <p v-if="$i18n.locale === 'ru'">{{ getProduct.data.description }}</p>
                <p v-else>{{ getProduct.data.description_kz }}</p>
              </div>
              <p v-if="$i18n.locale === 'ru'" class="italic">Категория: {{ getProduct.data.category.name }}</p>
              <p v-else class="italic">Категория: {{ getProduct.data.category.name_kz }}</p>
            </div>
          </div>
        </div>
        <div
            class="bg-white dark:bg-darkBgColor text-blackColor dark:text-white w-full lg:w-1/3 h-full p-7 rounded-lg shadow-lg">
          <div class="mb-5 flex items-center justify-between text-xs">
            <p class="font-semibold w-half">Артикул: 22510</p>
            <div class="flex items-center w-half">
              <font-awesome-icon :icon="['fas', 'tag']" class="mr-2 text-green-500 text-xl"/>
              <p class="w-max">{{ $t('product.varanty') }}</p>
            </div>
          </div>
          <p class="text-3xl font-bold mb-5">{{ getProduct.data.price }} {{ $t('general.tenge') }}</p>
          <p class="text-center text-green-500 font-bold mb-3" v-if="getProduct.data.quantity > 0">Есть в наличии</p>
          <p class="text-center text-red-500 font-bold mb-3" v-else>Нет в наличии</p>
          <div v-if="isInCart(getProduct.data)"
               class="bg-mainColor text-center py-3 font-bold text-white rounded-lg mb-5 cursor-pointer"
               @click="addProduct({ product: getProduct.data, method: 'minus' })">
            {{ $t('product.addToCart') }}
          </div>
          <div v-if="!isInCart(getProduct.data) && getProduct.data.quantity >= 0" class="bg-mainColor text-center py-3 font-bold text-white rounded-lg mb-5 cursor-pointer"
               @click="addProduct(getProduct.data)">
            {{ $t('product.inCart') }}
          </div>
          <div v-if="isInCart(getProduct.data)" class="flex items-center justify-between mb-5 text-lg">
            <p
                class="w-10 h-10 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                @click="addProduct({ product: getProduct.data, method: 'minus' })">-</p>
            <p>Кол-во: {{ isInCart(getProduct.data).amount }}</p>
            <p
                class="w-10 h-10 bg-whiteColor rounded-full text-mainColor flex items-center justify-center text-lg cursor-pointer"
                @click="addProduct({ product: getProduct.data, method: 'plus' })">+</p>
          </div>
<!--          <div class="flex items-center mb-5">-->
<!--            <font-awesome-icon :icon="['fas', 'person-walking']" class="mr-2 text-2xl w-5 text-mainColor"/>-->
<!--            <p>Самовывоз: 10 сентября из 20 магазинов</p>-->
<!--          </div>-->
          <div class="flex items-center">
            <font-awesome-icon :icon="['fas', 'truck']" class="mr-2 text-lg w-5 text-mainColor"/>
            <p>{{ $t('product.delivery') }}: <span v-if="condTime === true">Сегодня</span><span v-else>Завтра</span></p>
          </div>
        </div>
      </div>
      <div v-if="getSameProducts">
        <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Похожие продукты</h2>
        <carousel :breakpoints="breakpoints" v-bind="settings">
          <slide
              v-for="(product, productIndex) in getSameProducts.data"
              :key="productIndex"
              class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
            <img alt="" class="absolute left-3 top-3 w-10 h-10 object-contain" src="@/assets/img/logo_hor.png">
            <img :src="product.icon" alt="" class="w-32 h-32 mx-auto object-contain">
            <p class="text-center text-lg font-semibold">{{ product.name }}</p>
            <p class="text-base font-semibold text-center my-3">{{ product.price }} тнг.</p>
            <div class="block">
              <p class="text-center text-green-500 font-bold mb-3" v-if="product.quantity > 0">Есть в наличии</p>
              <p class="text-center text-red-500 font-bold mb-3" v-else>Нет в наличии</p>
<!--              <p class="w-full text-center">{{ $t('general.favorite') }}</p>-->
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
              <p v-if="isInCart(product).status === false && product.quantity > 0"
                 class="bg-blackColor my-3 dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full hover:bg-mainColor transition-all"
                 @click="addProduct({ product: product, method: null })">В корзину
              </p>
              <router-link :to="{ name: 'Product', params: { prod_id: product.id } }"
                           class="text-center mx-auto w-max flex justify-center">Перейти на страницу
              </router-link>
            </div>
          </slide>

          <template #addons>
            <navigation/>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BreadcrumbsComponent from "@/components/General/Breadcrumbs.vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Slide} from 'vue3-carousel'

export default {
  name: "ProductDetails",
  components: {
    BreadcrumbsComponent,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentTime: "",
      condTime: false,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
      links: [
        {
          name: "Главная",
          to: {name: "MainPage"},
        },
        {
          name: "Продукты",
          to: {name: "Product", params: {prod_id: this.$route.params.prod_id}},
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getProduct', 'getSameProducts', 'getCart'])
  },
  mounted() {
    this.product(this.$route.params.prod_id)
    this.sameProducts(this.$route.params.prod_id)
    this.getCurrentTime();
  },
  methods: {
    ...mapActions(['cart', 'product', 'sameProducts', 'addProduct']),
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      if (hours > 13 && minutes > 30) {
        this.condTime = false
      } else {
        this.condTime = true
      }
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;

      // Update the time every second
      setInterval(() => {
        this.getCurrentTime();
      }, 1000);
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