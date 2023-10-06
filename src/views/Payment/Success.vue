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
    ...mapActions('setConfirmOrder')
  },
  async mounted() {
    console.log(this.$route.query.order_id)
    await this.setConfirmOrder({ id: this.$route.query.order_id, conf_state: 1}).then(() => {
      console.log(this.getConfirmedOrder())
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
  }
}
</script>