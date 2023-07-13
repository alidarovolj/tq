<template>
  <div>
    <div class="px-4 lg:px-0 fixed top-5 w-full">
      <div
        class="container mx-auto px-4 z-50 dark:text-darkText dark:bg-darkBg bg-white shadow-xl rounded-2xl"
      >
        <div class="flex items-center justify-between py-5">
          <font-awesome-icon
            @click="menu = !menu"
            class="block lg:hidden text-xl"
            :icon="['fas', 'bars']"
          />
          <img
            class="w-28 lg:w-40"
            src="@/assets/img/logos/logo-main.png"
            alt=""
          />
          <div class="hidden lg:flex">
            <router-link
              class="px-3 transition-all hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.services") }}</router-link
            >
            <router-link
              class="px-3 transition-all hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.about") }}</router-link
            >
            <router-link
              class="px-3 transition-all hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.price") }}</router-link
            >
            <router-link
              class="px-3 transition-all hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.contacts") }}</router-link
            >
          </div>
          <router-link
            class="transition-all hover:text-mainColor text-xs lg:text-base hidden lg:block"
            to="/"
            >8 (747) 236-75-03</router-link
          >
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <Locale />
              <div class="hidden lg:flex items-center">
                <p
                  @click="$router.push({ name: 'Login' })"
                  class="mx-3 cursor-pointer hover:text-mainColor transition-all"
                >
                  {{ $t("header.links.login") }}
                </p>
                <div class="font-semibold">
                  <Button
                    @click="$router.push({ name: 'Registration' })"
                    :text="$t('header.links.register')"
                  />
                </div>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu == true" class="px-4 lg:px-0 fixed w-full top-28">
      <div class="container mx-auto">
        <div class="px-4 py-5 w-full bg-white shadow-xl rounded-2xl">
          <div class="mb-10">
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.services") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.about") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.price") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.contacts") }}</router-link
            >
            <router-link
              class="transition-all hover:text-mainColor text-xs lg:text-base hidden lg:block"
              to="/"
              >8 (747) 236-75-03</router-link
            >
          </div>
          <div class="block">
            <p
              @click="$router.push({ name: 'Login' })"
              class="mx-3 mb-3 cursor-pointer text-center font-semibold hover:text-mainColor transition-all"
            >
              {{ $t("header.links.login") }}
            </p>
            <div class="font-semibold text-center">
              <Button
                @click="$router.push({ name: 'Registration' })"
                :text="$t('header.links.register')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button.vue";
import Locale from "@/components/General/Locale.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";

export default {
  name: "Header",
  data() {
    return {
      menu: false,
    };
  },
  components: {
    Button,
    Locale,
    ThemeSwitcher,
  },
};
</script>