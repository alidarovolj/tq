<template>
  <div class="relative py-60 text-whiteColor mb-20">
    <video
        autoplay
        class="w-full h-full absolute left-0 top-0 object-cover z-10"
        height="1080"
        loop
        muted
        width="1920">
      <source src="@/assets/video/hero.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="w-full h-full bg-black opacity-40 absolute left-0 top-0 z-20"></div>
    <div class="container mx-auto px-4 lg:px-0 relative z-30">
      <div class="flex justify-center items-center">
        <div class="w-full lg:w-3/5">
          <img alt="" class="h-40 mb-10 mx-auto" src="@/assets/img/logo_hor_white.png">
          <div class="flex mb-2">
            <SelectSearch
                :data="getSearchedProduct"
                @tran-data="recProducts"
            />
<!--            <button class="bg-mainColor rounded-r-md px-4 flex items-center text-base">-->
<!--              <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-2"/>-->
<!--              <p>Найти</p>-->
<!--            </button>-->
          </div>
          <p>Например: <span class="underline cursor-pointer hover:no-underline">DCL750</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import SelectSearch from "@/components/General/SelectSearch.vue";
export default {
  name: "HeroComponent",
  components: {
    SelectSearch
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['getSearchedProduct']),
  },
  methods: {
    ...mapActions(['searchProduct']),
    recProducts(value) {
      console.log(value)
    },
  }
}
</script>