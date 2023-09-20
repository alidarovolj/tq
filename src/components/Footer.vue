<template>
  <div class="bg-white dark:bg-darkBg dark:border-t dark:border-gray-700 py-10 mt-10 dark:text-whiteColor">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex mb-5">
        <div class="mr-10">
          <img alt="" class="w-40 block dark:hidden" src="@/assets/img/logo_hor.png">
          <img alt="" class="w-40 hidden dark:block" src="@/assets/img/logo_hor_white.png">
        </div>
        <div class="mr-10">
          <p class="text-lg font-semibold mb-2">Call Center</p>
          <a class="block" href="tel:77472367503">+7 (747) 236-75-03</a>
          <a class="block" href="mailto:support@tq.kz">support@tq.kz</a>
        </div>
        <div>
          <p class="text-lg font-semibold mb-4">Навигация</p>
          <router-link :to="{ name: 'MainPage' }" class="block mb-3 hover:text-mainColor transition-all">
            {{ $t('header.main') }}
          </router-link>
          <router-link :to="{ name: 'AboutPage' }" class="block mb-3 hover:text-mainColor transition-all">
            {{ $t('header.about') }}
          </router-link>
          <router-link :to="{ name: 'NewsPage' }" class="block mb-3 hover:text-mainColor transition-all">
            {{ $t('header.news') }}
          </router-link>
          <router-link :to="{ name: 'ContactsPage' }" class="block mb-3 hover:text-mainColor transition-all">
            {{ $t('header.contacts') }}
          </router-link>
        </div>
      </div>
      <div class="text-xs">
        <p class="mb-2">{{ $t('footer.first') }}</p>
        <p class="mb-2">{{ $t('footer.second') }}</p>
        <p>{{ $t('footer.third') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),
    };
  },
}
</script>