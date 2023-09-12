<template>
  <div
      class="w-[250px] min-w-[250px] max-w-[250px] bg-white h-full p-5 flex flex-col justify-between shadow-lg border-r">
    <div>
      <img alt="" class="w-full mb-20" src="@/assets/img/logo.png">
      <div class="">
        <router-link :to="{ name: 'AdminPage' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
          <font-awesome-icon :icon="['fas', 'users']" class="mr-3 text-xl w-5"/>
          <p>Пользователи</p>
        </router-link>
        <router-link :to="{ name: 'AdminProducts' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
          <font-awesome-icon :icon="['fas', 'boxes-stacked']" class="mr-3 text-xl w-5"/>
          <p>Товары</p>
        </router-link>
        <router-link :to="{ name: 'AdminPage' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
          <font-awesome-icon :icon="['fas', 'tag']" class="mr-3 text-xl w-5"/>
          <p>Категории</p>
        </router-link>
        <router-link :to="{ name: 'AdminPage' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="mr-3 text-xl w-5"/>
          <p>Заказы</p>
        </router-link>
        <router-link :to="{ name: 'AdminPage' }" class="flex items-center hover:text-mainColor cursor-pointer mb-5">
          <font-awesome-icon :icon="['fas', 'newspaper']" class="mr-3 text-xl w-5"/>
          <p>Новости</p>
        </router-link>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <ThemeSwitcher/>
      <LocaleSwitcher/>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/General/LocaleSwitcher.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";

export default {
  name: "AdminHeader",
  components: {
    ThemeSwitcher,
    LocaleSwitcher
  },
}
</script>