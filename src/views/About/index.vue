<template>
  <div class="pt-24 lg:pt-10 text-blackColor dark:text-whiteColor">
    <div class="container mx-auto px-4 lg:px-0">
      <div class=" mb-10">
        <h1 class="text-2xl font-semibold dark:text-whiteColor mb-3">{{ $t('about.header') }}</h1>
        <p class="text-lg font-semibold">{{ $t('about.text') }}</p>
      </div>
      <div class="mb-10">
        <p class="mb-3"><span class="font-semibold italic">{{ $t('about.about.first.name') }}</span>: {{ $t('about.about.first.value') }}</p>
        <p class="mb-3"><span class="font-semibold italic">{{ $t('about.about.second.name') }}</span>: {{ $t('about.about.second.value') }}
          автомобильных аксессуаров </p>
        <p class="mb-3"><span class="font-semibold italic">{{ $t('about.about.third.name') }}</span>: {{ $t('about.about.third.value') }}</p>
        <p><span class="font-semibold italic">{{ $t('about.about.fourth.name') }}</span>: {{ $t('about.about.fourth.value') }}</p>
      </div>
      <div class="mb-10">
        <div class="mb-5">
          <p class="mb-5 text-xl font-semibold">{{ $t('about.description.header') }}</p>
          <p>{{ $t('about.description.text') }}</p>
        </div>
        <div>
          <p class="mb-5 text-xl font-semibold">{{ $t('about.benefits.header') }}</p>
          <p>{{ $t('about.description.text') }}</p>
        </div>
      </div>
      <div class="mb-10">
        <p class="mb-5 text-xl font-semibold">{{ $t('about.products.header') }}</p>
        <p class="mb-3"><span class="font-semibold italic">{{ $t('about.products.first.name') }}</span>: {{ $t('about.products.first.value') }}</p>
        <p><span class="font-semibold italic">{{ $t('about.products.second.name') }}</span>: {{ $t('about.products.second.name') }}</p>
      </div>
      <div class="mb-10">
        <p class="mb-5 text-xl font-semibold">{{ $t('about.praim.header') }}</p>
        <div class="flex flex-wrap justify-between">
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">{{ $t('about.praim.first.name') }}</p>
              <p class="text-xs">{{ $t('about.praim.first.value') }}</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">{{ $t('about.praim.second.name') }}</p>
              <p class="text-xs">{{ $t('about.praim.second.value') }}</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">{{ $t('about.praim.third.name') }}</p>
              <p class="text-xs">{{ $t('about.praim.third.value') }}</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">{{ $t('about.praim.fourth.name') }}</p>
              <p class="text-xs">{{ $t('about.praim.fourth.value') }}</p>
            </div>
          </div>
          <div
              class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">{{ $t('about.praim.fifth.name') }}</p>
              <p class="text-xs">{{ $t('about.praim.fifth.value') }}</p>
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

export default {
  name: "AboutPage",
  setup() {
    useMeta({title: "О компании"});
  },
}
</script>