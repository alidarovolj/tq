<template>
  <div>
    <div class="px-4 lg:px-0 fixed top-5 w-full">
      <div
          class="container mx-auto px-4 z-50 dark:text-darkText dark:bg-darkBg bg-white shadow-xl rounded-2xl"
      >
        <div class="flex items-center justify-between py-5">
          <font-awesome-icon
              :icon="['fas', 'bars']"
              class="block lg:hidden text-xl"
              @click="menu = !menu"
          />
          <router-link :to="{ name: 'MainPage' }">
            <img
                alt=""
                class="w-28 lg:w-40"
                src="@/assets/img/logos/logo-main.png"
            />
          </router-link>
          <div class="hidden lg:flex">
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all hover:text-mainColor"
            >{{ $t("header.links.services") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all hover:text-mainColor"
            >{{ $t("header.links.about") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all hover:text-mainColor"
            >{{ $t("header.links.price") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all hover:text-mainColor"
            >{{ $t("header.links.contacts") }}
            </router-link
            >
            <div v-if="getCurrentUser">
              <router-link
                  v-if="getCurrentUser.admin === 1"
                  :to="{ name: 'MainPage' }"
                  class="px-3 transition-all hover:text-mainColor"
              >{{ $t("header.links.admin") }}
              </router-link
              >
            </div>
          </div>
          <router-link
              class="transition-all hover:text-mainColor text-xs lg:text-base hidden lg:block"
              to="/"
          >8 (747) 236-75-03
          </router-link
          >
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <Locale/>
              <div v-if="!getCurrentUser" class="hidden lg:flex items-center">
                <router-link
                    :to="{ name: 'Login' }"
                    class="mx-3 cursor-pointer hover:text-mainColor transition-all"
                >
                  {{ $t("header.links.login") }}
                </router-link>
                <div class="font-semibold">
                  <router-link :to="{ name: 'Registration' }"
                               class="px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer">
                    {{ $t('header.links.register') }}
                  </router-link>
                </div>
              </div>
              <div v-else class="hidden lg:flex items-center">
                <router-link :to="{ name: 'MainPage' }"
                             class="mx-3 px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer">{{
                    getCurrentUser.name
                  }}
                </router-link>
              </div>
            </div>
            <ThemeSwitcher/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu === true" class="px-4 lg:px-0 fixed w-full top-28">
      <div class="container mx-auto">
        <div class="px-4 pt-5 pb-10 w-full bg-white dark:bg-darkBg dark:text-darkText shadow-xl rounded-2xl">
          <div class="mb-10">
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all block mb-3 hover:text-mainColor"
            >{{ $t("header.links.services") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all block mb-3 hover:text-mainColor"
            >{{ $t("header.links.about") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all block mb-3 hover:text-mainColor"
            >{{ $t("header.links.price") }}
            </router-link
            >
            <router-link
                :to="{ name: 'MainPage' }"
                class="px-3 transition-all block mb-3 hover:text-mainColor"
            >{{ $t("header.links.contacts") }}
            </router-link
            >
            <router-link
                class="transition-all hover:text-mainColor text-xs lg:text-base hidden lg:block"
                to="/"
            >8 (747) 236-75-03
            </router-link
            >
          </div>
          <div class="block">
            <div v-if="!getCurrentUser">
              <router-link
                  :to="{ name: 'Login' }"
                  class="mx-3 cursor-pointer hover:text-mainColor transition-all"
              >
                {{ $t("header.links.login") }}
              </router-link>
              <div class="font-semibold">
                <router-link :to="{ name: 'Registration' }"
                             class="px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer">
                  {{ $t('header.links.register') }}
                </router-link>
              </div>
            </div>
            <div v-else>
              <router-link :to="{ name: 'MainPage' }"
                           class="mx-3 px-9 py-4 rounded-2xl bg-mainColor text-white cursor-pointer">{{
                  getCurrentUser.name
                }}
              </router-link>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Header",
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  components: {
    Button,
    Locale,
    ThemeSwitcher,
  },
  mounted() {
    this.currentUser()
  },
  methods: {
    ...mapActions(['currentUser'])
  }
};
</script>