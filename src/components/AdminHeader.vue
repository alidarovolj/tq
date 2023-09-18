<template>
  <div
      class="hidden lg:flex nav w-[250px] min-w-[250px] max-w-[250px] bg-white dark:bg-darkBgColor text-blackColor dark:text-whiteColor min-h-screen h-auto p-5 flex-col justify-between shadow-lg border-r dark:border-gray-600">
    <div class="hidden lg:flex flex-col justify-between h-full">
      <div>
        <div class="mb-20">
          <router-link v-if="currentTheme === 'light'" :to="{ name: 'MainPage' }">
            <img alt="" class="w-full mb-5" src="@/assets/img/logo.png">
          </router-link>
          <router-link v-else :to="{ name: 'MainPage' }">
            <img alt="" class="w-full mb-5" src="@/assets/img/logo_white.png">
          </router-link>
          <router-link class="text-mainColor" :to="{ name: 'MainPage' }">Вернуться на сайт</router-link>
        </div>
        <div class="">
          <router-link :to="{ name: 'AdminPage' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon :icon="['fas', 'users']" class="mr-3 text-xl w-5"/>
            <p>Пользователи</p>
          </router-link>
          <router-link :to="{ name: 'AdminProducts' }"
                       class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon :icon="['fas', 'boxes-stacked']" class="mr-3 text-xl w-5"/>
            <p>Товары</p>
          </router-link>
          <router-link :to="{ name: 'AdminCategories' }"
                       class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon :icon="['fas', 'tag']" class="mr-3 text-xl w-5"/>
            <p>Категории</p>
          </router-link>
          <router-link :to="{ name: 'AdminOrders' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="mr-3 text-xl w-5"/>
            <p>Заказы</p>
          </router-link>
          <router-link :to="{ name: 'AdminNews' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
            <font-awesome-icon :icon="['fas', 'newspaper']" class="mr-3 text-xl w-5"/>
            <p>Новости</p>
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
  components: {
    SidebarComponent,
    ThemeSwitcher,
    LocaleSwitcher
  },
}
</script>