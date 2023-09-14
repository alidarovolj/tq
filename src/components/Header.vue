<template>
  <div
      class="nav header shadow-xl fixed z-50 w-full h-max left-0 top-0 bg-whiteColor dark:bg-darkBg dark:text-whiteColor transition-all dark:border-b dark:border-gray-700">
    <div class="relative">
      <div class="border-b dark:border-gray-700 py-2">
        <div class="container mx-auto px-4 lg:px-0">
          <div class="flex justify-between items-center text-xs lg:text-sm">
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
            <div class="flex flex-col lg:flex-row">
              <div class="flex items-center justify-end lg:justify-start mr-0 lg:mr-4 mb-2 lg:mb-0">
                <LocaleSwitcher/>
                <ThemeSwitcher/>
              </div>
              <div v-if="!getCurrentUser" class="flex items-center">
                <p class="flex items-center cursor-pointer" @click="modalStateLogin = true">
                  <font-awesome-icon :icon="['fa', 'user']" class="text-mainColor mr-1"/>
                  <p>{{ $t('general.login') }}</p>
                </p>
                <p class="flex items-center ml-4 cursor-pointer" @click="modalStateVerify = true">
                  <font-awesome-icon :icon="['fas', 'key']" class="text-mainColor mr-1"/>
                  <p>{{ $t('general.registration') }}</p>
                </p>
              </div>
              <div v-else class="flex items-center cursor-pointer bg-white rounded-md px-2 dark:bg-blackColor">
                <font-awesome-icon :icon="['fa', 'user']" class="text-mainColor mr-1"/>
                <DropdownBlock :text="getCurrentUser.data.email">
                  <router-link :to="{ name: 'ProfilePage' }"
                               class="block lg:hover:bg-gray-100 hover:dark:bg-darkBg px-2 lg:px-3 py-2">Профиль
                  </router-link>
                  <p class="lg:hover:bg-gray-100 hover:dark:bg-darkBg px-2 lg:px-3 py-2" @click="logout">Выйти</p>
                </DropdownBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="container mx-auto px-4 lg:px-0">
          <div class="flex flex-col lg:flex-row justify-between items-center">
            <div class="flex items-center justify-center lg:justify-start w-full lg:w-max mb-2 lg:mb-0">
              <font-awesome-icon
                  :icon="['fas', 'bars']" class="mr-3 text-lg block lg:hidden" @click="menu = !menu"/>
              <router-link :to="{ name: 'MainPage' }" class="flex justify-end lg:justify-start w-full lg:w-max">
                <img v-if="currentTheme === 'light'" alt="" class="w-40 object-contain" src="@/assets/img/logo.png">
                <img v-if="currentTheme === 'dark'" alt="" class="w-40 object-contain"
                     src="@/assets/img/logo_white.png">
              </router-link>
            </div>
            <div class="text-sm hidden lg:flex">
              <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all">
                {{ $t('header.main') }}
              </router-link>
              <router-link :to="{ name: 'AboutPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.about') }}
              </router-link>
              <router-link :to="{ name: 'NewsPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.news') }}
              </router-link>
              <router-link :to="{ name: 'ContactsPage' }" class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.contacts') }}
              </router-link>
              <span v-if="getCurrentUser">
                <router-link v-if="getCurrentUser.data.is_admin" :to="{ name: 'AdminPage' }"
                             class="ml-4 hover:text-mainColor transition-all">
                {{ $t('header.admin') }}
              </router-link>
              </span>
            </div>
            <div v-if="getCart"
                 class="text-sm lg:text-2xl text-mainColor flex items-center justify-between w-full lg:w-max">
              <div class="flex items-center">
                <div class="mr-4 relative">
                  <font-awesome-icon :icon="['fas', 'heart']" class="cursor-pointer"/>
                </div>
                <router-link :to="{ name: 'Cart' }" class="relative block">
                  <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cursor-pointer"/>
                  <div
                      class="absolute right-0 top-0 w-4 h-4 bg-white translate-x-1/2 -translate-y-1/2 border border-mainColor text-mainColor flex items-center justify-center rounded-full">
                    <p class="text-xs">{{ getCart.products.length }}</p>
                  </div>
                </router-link>
              </div>
              <div
                  class="text-xs lg:text-sm ml-3 text-blackColor dark:text-whiteColor flex lg:block items-center">
                <p class="mb-0 lg:mb-1 text-end">
                  {{ $t('header.cart') }}: <span class="font-semibold">{{ getCart.price_main }} {{
                    $t('general.tenge')
                  }}</span>
                </p>
                <!--                <p class="px-4 py-1 rounded-md border-gray-700 dark:border-whiteColor border ml-2 lg:ml-0 cursor-pointer hover:bg-mainColor hover:border-mainColor hover:text-whiteColor transition-all">-->
                <!--                  {{ $t('header.refund') }}-->
                <!--                </p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="menu === true" class="px-4 lg:px-0 fixed w-full top-44">
        <div class="container mx-auto">
          <div class="px-4 py-5 w-full bg-white dark:bg-darkBg dark:text-darkText shadow-xl rounded-2xl">
            <div class="text-lg">
              <router-link :to="{ name: 'MainPage' }" class="block hover:text-mainColor transition-all"
                           @click="menu = false">
                {{ $t('header.main') }}
              </router-link>
              <router-link :to="{ name: 'AboutPage' }" class="block ml-0 lg:ml-4 hover:text-mainColor transition-all"
                           @click="menu = false">
                {{ $t('header.about') }}
              </router-link>
              <router-link :to="{ name: 'NewsPage' }" class="block ml-0 lg:ml-4 hover:text-mainColor transition-all"
                           @click="menu = false">
                {{ $t('header.news') }}
              </router-link>
              <router-link :to="{ name: 'ContactsPage' }" class="block ml-0 lg:ml-4 hover:text-mainColor transition-all"
                           @click="menu = false">
                {{ $t('header.contacts') }}
              </router-link>
              <span v-if="getCurrentUser">
                <router-link v-if="getCurrentUser.data.is_admin" :to="{ name: 'AdminPage' }"
                             class="block ml-0 lg:ml-4 hover:text-mainColor transition-all"
                             @click="menu = false">
                {{ $t('header.admin') }}
              </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
      :is-visible="modalStateRegistration"
      :rec-id="sendData"
      component-name="Registration"
      @close_modal="(val) => (modalStateRegistration = val)"
  />
  <Modal
      :is-visible="modalStateVerify"
      component-name="Verification"
      @acc_data="receiveVerification"
      @close_modal="(val) => (modalStateVerify = val)"
  />
  <Modal
      :is-visible="modalStateLogin"
      component-name="Login"
      @close_modal="(val) => (modalStateLogin = val)"
  />
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import LocaleSwitcher from "@/components/General/LocaleSwitcher.vue";
import Modal from "@/components/Modal.vue";
import DropdownBlock from "@/components/General/Dropdown.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";

export default {
  name: "Header",
  components: {DropdownBlock, LocaleSwitcher, Modal, ThemeSwitcher},
  data() {
    return {
      modalStateRegistration: false,
      modalStateLogin: false,
      modalStateVerify: false,
      sendData: null,
      menu: false,
      currentTheme: localStorage.getItem("theme"),
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getCart'])
  },
  mounted() {
    this.currentUser()
    this.cart()
  },
  methods: {
    ...mapActions(['currentUser', 'cart']),
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('token_exp');
      this.$router.go()
    },
    receiveVerification(phone) {
      this.sendData = phone
      this.modalStateRegistration = true
    }
  }
}
</script>