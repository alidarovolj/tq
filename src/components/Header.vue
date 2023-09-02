<template>
  <div
      class="header shadow-xl fixed z-50 w-full h-max left-0 top-0 bg-whiteColor dark:bg-black dark:text-whiteColor transition-all dark:border-b dark:border-gray-700">
    <div class="relative">
      <div class="border-b dark:border-gray-700 py-2">
        <div class="container mx-auto px-4 lg:px-0">
          <div v-if="getCurrentUser" class="flex justify-between items-center text-xs lg:text-sm">
            <div class="block lg:flex items-center">
              <div class="flex justify-end items-center mr-3">
                <font-awesome-icon :icon="['fas', 'message']" class="text-mainColor"/>
                <a class="ml-1" href="mailto:office@tq.kz">office@tq.kz</a>
              </div>
              <div class="text-mainColor text-base">
                <font-awesome-icon :icon="['fab', 'instagram']" class="mr-3 cursor-pointer"/>
                <font-awesome-icon :icon="['fab', 'twitter']" class="mr-3 cursor-pointer"/>
                <font-awesome-icon :icon="['fab', 'vk']" class="mr-3 cursor-pointer"/>
                <font-awesome-icon :icon="['fab', 'youtube']" class="cursor-pointer"/>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center mr-4">
                <ThemeSwitcher/>
                <font-awesome-icon
                    v-if="currentTheme === 'light'"
                    :icon="['fas', 'sun']"
                    class="ml-4 text-whiteColor bg-mainColor rounded-md p-2 cursor-pointer"
                    @click="setTheme('dark')"
                />
                <font-awesome-icon
                    v-else
                    :icon="['fas', 'moon']"
                    class="ml-4 text-whiteColor bg-mainColor rounded-md p-2 cursor-pointer"
                    @click="setTheme('light')"
                />

              </div>
              <div v-if="!getCurrentUser" class="block lg:flex items-center">
                <p class="flex items-center cursor-pointer" @click="modalStateLogin = true">
                  <font-awesome-icon :icon="['fa', 'user']" class="text-mainColor mr-1"/>
                  <p>{{ $t('general.login') }}</p>
                </p>
                <p class="flex items-center ml-0 lg:ml-4 cursor-pointer" @click="modalStateRegistration = true">
                  <font-awesome-icon :icon="['fas', 'key']" class="text-mainColor mr-1"/>
                  <p>{{ $t('general.registration') }}</p>
                </p>
              </div>
              <div class="flex items-center cursor-pointer bg-white rounded-md px-2">
                <font-awesome-icon :icon="['fa', 'user']" class="text-mainColor mr-1"/>
                <DropdownBlock :text="getCurrentUser.data.email">
                  <p class="lg:hover:bg-gray-100 hover:dark:bg-darkBg px-2 lg:px-3 py-2">Профиль</p>
                  <p class="lg:hover:bg-gray-100 hover:dark:bg-darkBg px-2 lg:px-3 py-2">Выйти</p>
                </DropdownBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="container mx-auto px-4 lg:px-0">
          <div class="flex justify-between items-center">
            <router-link :to="{ name: 'MainPage' }" class="flex">
              <font-awesome-icon :icon="['fas', 'bars']" class="mr-3 text-lg block lg:hidden"/>
              <img v-if="currentTheme === 'light'" alt="" class="w-40 object-contain" src="@/assets/img/logo.png">
              <img v-if="currentTheme === 'dark'" alt="" class="w-40 object-contain"
                   src="@/assets/img/logo_white.png">
            </router-link>
            <div class="text-sm hidden lg:flex">
              <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all">
                {{ $t('header.refund') }}
              </router-link>
              <router-link :to="{ name: 'MainPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.about') }}
              </router-link>
              <router-link :to="{ name: 'MainPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.owners') }}
              </router-link>
              <router-link :to="{ name: 'MainPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.models') }}
              </router-link>
              <router-link :to="{ name: 'MainPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.news') }}
              </router-link>
              <router-link :to="{ name: 'MainPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.contacts') }}
              </router-link>
              <span v-if="getCurrentUser">
                <router-link v-if="getCurrentUser.data.is_admin" :to="{ name: 'MainPage' }"
                             class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.admin') }}
              </router-link>
              </span>
            </div>
            <div class="text-sm lg:text-2xl text-mainColor flex items-center">
              <div class="mr-4 relative">
                <font-awesome-icon :icon="['fas', 'heart']" class="cursor-pointer"/>
              </div>
              <div class="relative">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cursor-pointer"/>
              </div>
              <div class="text-xs lg:text-sm ml-3 text-blackColor dark:text-whiteColor">
                <p class="mb-1 text-end">
                  {{ $t('header.cart') }}: <span class="font-semibold">0 {{ $t('general.tenge') }}</span>
                </p>
                <p class="px-4 py-1 rounded-md border-gray-700 dark:border-whiteColor border cursor-pointer hover:bg-mainColor hover:border-mainColor hover:text-whiteColor transition-all">
                  {{ $t('header.refund') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
      :is-visible="modalStateRegistration"
      component-name="Registration"
      @close_modal="(val) => (modalStateRegistration = val)"
  />
  <Modal
      :is-visible="modalStateLogin"
      component-name="Login"
      @close_modal="(val) => (modalStateLogin = val)"
  />
</template>

<script>
import ThemeSwitcher from "@/components/General/LocaleSwitcher.vue";
import Modal from "@/components/Modal.vue";
import {mapActions, mapGetters} from "vuex";
import DropdownBlock from "@/components/General/Dropdown.vue";

export default {
  name: "Header",
  components: {DropdownBlock, ThemeSwitcher, Modal},
  data() {
    return {
      modalStateRegistration: false,
      modalStateLogin: false,
      currentTheme: localStorage.getItem("theme"),
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  mounted() {
    this.currentUser()
  },
  methods: {
    ...mapActions(['currentUser']),
    setTheme(theme) {
      localStorage.setItem("theme", theme);
      document.querySelector("html").classList.add(theme);
      document
          .querySelector("html")
          .classList.remove(theme === "light" ? "dark" : "light");
      this.currentTheme = theme;
    },
  }
}
</script>