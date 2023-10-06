<template>
  <div class="container mx-auto px-4 lg:px-0">
    <div class="py-36">
      <img class="text-center mx-auto" src="@/assets/img/payment/2.png" alt="">
      <div class="text-center">
        <h1 class="mt-5 mb-3 text-2xl font-bold">Похоже что-то пошло не так :(</h1>
        <p class="mb-5">Оплата не прошла. Попробуйте оплатить заказ ещё раз. </p>
        <router-link class="text-white rounded-lg bg-mainColor py-3 px-14 mx-auto block w-max no-underline" to="/">Вернуться на сайт</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";
import {mapActions} from "vuex";

export default {
  name: "FailurePayment",
  setup() {
    useMeta({title: "Неудачная оплата"});
  },
  methods: {
    ...mapActions('confirmOrder')
  },
  mounted() {
    this.confirmOrder({ conf_state: 0, id: this.$route.query.order_id})
  }
}
</script>