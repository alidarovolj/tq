<template>
  <div class="pt-24 lg:pt-10 text-blackColor dark:text-whiteColor">
    <div class="container mx-auto px-4 lg:px-0">
      <div class=" mb-10">
        <h1 class="text-2xl font-semibold dark:text-whiteColor mb-3 text-center">{{ $t('about.header') }}</h1>
        <div class="flex justify-end lg:justify-start w-full lg:w-1/2 mx-auto mb-5">
          <img alt="" class="w-full h-auto object-contain block dark:hidden" src="@/assets/img/logo.png">
          <img alt="" class="w-full h-auto object-contain hidden dark:block"
               src="@/assets/img/logo_white.png">
        </div>
        <p class="text-sm lg:text-lg text-center">{{ $t('about.text') }}</p>
      </div>
      <div class="mb-10">
        <p class="mb-5"><span class="font-semibold">{{ $t('about.about.fourth.name') }}</span>:
          {{ $t('about.about.fourth.value') }}</p>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae64c103b8e04aa07701d586325cf5b663185519f5f3fee7be4f2a7a45eb58eff&amp;source=constructor"
            width="100%"
            height="649"
            frameborder="0"></iframe>
      </div>
      <div class="mb-10">
        <div class="mb-5">
          <p class="mb-5 text-xl font-semibold">{{ $t('about.description.header') }}</p>
          <p>{{ $t('about.description.text') }}</p>
        </div>
      </div>
      <div class="mb-10">
        <p class="mb-5 text-xl font-semibold">{{ $t('about.products.header') }}</p>
        <carousel :breakpoints="breakpoints" v-bind="settings" :wrap-around="true">
          <slide
              v-for="(item, index) in slides"
              :key="index"
              class="bg-white relative flex flex-col dark:bg-darkBgColor dark:text-whiteColor justify-between mr-3 mb-3 p-4 rounded-2xl cursor-pointer shadow transition-all">
            <img
                :src="item.img"
                alt=""
                class="w-full rounded-t-xl h-32 object-contain">
            <p class="text-center">
              {{ item.title }}
            </p>
          </slide>

          <template #addons>
            <navigation/>
          </template>
        </carousel>
      </div>
      <div class="mb-3">
        <p class="mb-5 text-xl font-semibold">{{ $t('about.praim.header') }}</p>
        <div class="block lg:flex gap-4">
          <div class="w-full lg:w-5/6 flex flex-wrap justify-center gap-4 border-0 lg:border-r pr-0 lg:pr-4">
            <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
              <div class="text-sm flex flex-col justify-between h-full">
                <p class="text-lg font-semibold mb-3">{{ $t('about.praim.first.name') }}</p>
                <p class="text-xs">{{ $t('about.praim.first.value') }}</p>
              </div>
            </div>
            <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
              <div class="text-sm flex flex-col justify-between h-full">
                <p class="text-lg font-semibold mb-3">{{ $t('about.praim.second.name') }}</p>
                <p class="text-xs">{{ $t('about.praim.second.value') }}</p>
              </div>
            </div>
            <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
              <div class="text-sm flex flex-col justify-between h-full">
                <p class="text-lg font-semibold mb-3">{{ $t('about.praim.third.name') }}</p>
                <p class="text-xs">{{ $t('about.praim.third.value') }}</p>
              </div>
            </div>
            <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
              <div class="text-sm flex flex-col justify-between h-full">
                <p class="text-lg font-semibold mb-3">{{ $t('about.praim.fourth.name') }}</p>
                <p class="text-xs">{{ $t('about.praim.fourth.value') }}</p>
              </div>
            </div>
            <div
                class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-3">
              <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
              <div class="text-sm flex flex-col justify-between h-full">
                <p class="text-lg font-semibold mb-3">{{ $t('about.praim.fifth.name') }}</p>
                <p class="text-xs">{{ $t('about.praim.fifth.value') }}</p>
              </div>
            </div>
          </div>
          <div class="hidden lg:block w-full lg:w-1/6">
            <p class="font-semibold text-xl mb-5">
              {{ $t('general.socials') }}
            </p>
            <div class="text-mainColor text-base flex flex-col gap-4">
              <a
                  class="flex items-center gap-2"
                  href="https://www.instagram.com/trust_quality_official/">
                <font-awesome-icon :icon="['fab', 'instagram']" class="mr-2 text-xl cursor-pointer"/>
                <p>
                  Instagram
                </p>
              </a>
              <a
                  class="flex items-center gap-2"
                  href="https://www.tiktok.com/@tq_company">
                <font-awesome-icon :icon="['fab', 'tiktok']" class="mr-2 text-xl cursor-pointer"/>
                <p>
                  TikTok
                </p>
              </a>
              <a
                  class="flex items-center gap-2"
                  href="https://web.telegram.org/">
                <font-awesome-icon :icon="['fab', 'telegram']" class="mr-2 text-xl cursor-pointer"/>
                <p>
                  Telegram
                </p>
              </a>
              <a
                  class="flex items-center gap-2"
                  href="https://www.youtube.com/">
                <font-awesome-icon :icon="['fab', 'youtube']" class="mr-2 text-xl cursor-pointer"/>
                <p>
                  YouTube
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center font-semibold">{{ $t('about.last_text') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";
import {Carousel, Navigation, Slide} from "vue3-carousel";
import img1 from "@/assets/img/products/1.jpg";
import img2 from "@/assets/img/products/2.jpg";

export default {
  name: "AboutPage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          title: 'Стеклоочистители',
          img: img1
        },
        {
          title: 'Автолампы',
          img: img2
        }
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    }
  },
  setup() {
    useMeta({title: "О компании"});
  },
}
</script>