<template>
  <div class="hidden lg:flex nav w-[250px] min-w-[250px] max-w-[250px] bg-white dark:bg-darkBgColor text-blackColor dark:text-whiteColor min-h-screen h-auto p-5 flex-col justify-between shadow-lg border-r dark:border-gray-600">
    <div class="hidden lg:flex flex-col justify-between h-full">
      <div>
        <div class="mb-20">
          <router-link :to="{ name: 'MainPage' }">
            <img
                alt=""
                class="w-full mb-5 block dark:hidden"
                src="@/assets/img/logo.png">
          </router-link>
          <router-link :to="{ name: 'MainPage' }">
            <img
                alt=""
                class="w-full mb-5 hidden dark:block"
                src="@/assets/img/logo_white.png">
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="text-mainColor">
            {{ $t('adminHeader.back') }}
          </router-link>
        </div>
        <div class="">
          <router-link
              :to="{ name: 'AdminPage' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'users']"
                class="mr-3 text-xl w-5"/>
            <p>{{ $t('adminHeader.users') }}</p>
          </router-link>
          <router-link
              :to="{ name: 'AdminProducts' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'boxes-stacked']"
                class="mr-3 text-xl w-5"/>
            <p>
              {{ $t('adminHeader.products') }}
            </p>
          </router-link>
          <router-link
              :to="{ name: 'AdminCategories' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'tag']"
                class="mr-3 text-xl w-5"/>
            <p>
              {{ $t('adminHeader.categories') }}
            </p>
          </router-link>
          <router-link
              :to="{ name: 'AdminOrders' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'cart-shopping']"
                class="mr-3 text-xl w-5"/>
            <p>
              {{ $t('adminHeader.orders') }}
            </p>
          </router-link>
          <router-link
              :to="{ name: 'AdminNews' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'newspaper']"
                class="mr-3 text-xl w-5"/>
            <p>
              {{ $t('adminHeader.news') }}
            </p>
          </router-link>
          <router-link
              :to="{ name: 'AdminFeedback' }"
              class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="mr-3 text-xl w-5"
            />
            <p>
              {{ $t('adminHeader.mails') }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-start">
      <ThemeSwitcher/>
    </div>
  </div>
  <SidebarComponent/>
</template>

<script>
import LocaleSwitcher from "@/components/General/LocaleSwitcher.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";
import SidebarComponent from "@/components/Sidebar.vue";

export default {
  name: "AdminHeader",
  data() {
    return {
      barState: localStorage.getItem("sidebar"),
      currentTheme: localStorage.getItem('theme')
    };
  },
  watch: {
    currentTheme: {
      deep: true,
      immediate: true,
      handler(newData) {
        console.log(newData)
        this.currentTheme = localStorage.getItem('theme')
      },
    },
  },
  components: {
    SidebarComponent,
    ThemeSwitcher,
    LocaleSwitcher
  },
}
</script>