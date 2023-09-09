<template>
  <div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Products",
  computed: {
    ...mapGetters(['getProduct'])
  },
  mounted() {
    this.product(this.$route.params.prod_id)
  },
  methods: {
    ...mapActions(['product'])
  }
}
</script>