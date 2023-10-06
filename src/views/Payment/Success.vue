<template>
  <div class="container mx-auto px-4 lg:px-0">
    <div class="py-36">
      <img class="text-center mx-auto" src="@/assets/img/payment/1.png" alt="">
      <div class="text-center">
        <h1 class="my-5 text-2xl font-bold">Оплата прошла успешно</h1>
        <router-link class="text-white rounded-lg bg-mainColor py-3 px-14 mx-auto block w-max no-underline" to="/">Вернуться на сайт</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";
import {mapActions} from "vuex";

export default {
  name: "SuccessPayment",
  setup() {
    useMeta({title: "Успешная оплата"});
  },
  methods: {
    ...mapActions('confirmOrder')
  },
  async mounted() {
    console.log(this.$route.query.order_id)
    await this.confirmOrder({ conf_state: 1, id: this.$route.query.order_id})
  }
}
</script>