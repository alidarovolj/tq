<template>
  <div class="flex items-center justify-between px-4 py-7">
    <div class="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center"
         @click="setSidebarMob">
      <font-awesome-icon
          :icon="['fas', 'bars']" class="text-lg block lg:hidden"/>
    </div>
    <img alt="" class="w-1/2" src="@/assets/img/logo.png">
  </div>
  <div :class="{ '-translate-x-full !w-0': !getSidebarMob }">
    <div
        :class="{ '-translate-x-full !w-0': !getSidebarMob }"
        class="absolute w-full h-full sidebar dark:bg-darkElBg block lg:hidden"
    >
      <div
          class="fixed z-40 bg-black opacity-40 w-full h-full top-0 left-0"
          @click="setSidebarMob"
      ></div>
      <div
          :class="[
          { '-translate-x-full !w-0': !getSidebarMob },
          { 'px-4': getSidebarMob },
        ]"
          class="fixed z-50 left-0 top-0 w-[260px] h-screen bg-white dark:bg-darkElBg shadow-md pt-7 transition-all"
      >
        <div v-if="getSidebarMob" class="flex justify-between items-center">
          <img
              alt=""
              class="w-[80%] cursor-pointer"
              src="@/assets/img/logo.png"
              @click="$router.push({ name: 'Employees' })"
          />
          <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="text-xl text-black dark:text-darkText block lg:hidden"
              @click="setSidebarMob"
          />
        </div>
        <div v-if="getSidebarMob" class="text-sm mt-7">
          <div
              class="items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 navCase w-3/4"
          >
            <div
                v-for="(link, index) in links"
                :key="index"
                class="text-lg text-center cursor-pointer"
            >
              <div>
                <router-link
                    :to="link.to"
                    class="text-[#5e5873] flex items-center lg:block transition-all rounded-md p-2 dark:text-darkText hover:text-secodaryColor hover:dark:text-secodaryColor hover:bg-secondaryColor hover:text-secondaryColor hover:bg-opacity-10"
                    @click="setSidebarMob(false)"
                >
                  <font-awesome-icon
                      :icon="link.icon"
                      class="w-5 lg:w-20 text-sm lg:mb-1 mr-3 lg:mr-0"
                  />
                  <p>
                    {{ link.label }}
                  </p></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SidebarComponent",
  emits: ["sidebarState"],
  data() {
    return {
      barState: true,
      enabled: false,
    };
  },
  computed: {
    ...mapGetters(["getSidebar", "getSidebarMob"]),
    links() {
      return [
        {
          to: {name: "AdminPage"},
          icon: ["fas", "user"],
          label: "Пользователи",
        },
        {
          to: {name: "AdminProducts"},
          icon: ["fas", "boxes-stacked"],
          label: "Продукты",
        },
        {
          to: {name: "AdminCategories"},
          icon: ["fas", "tag"],
          label: "Категории",
        },
        {
          to: {name: "AdminOrders"},
          icon: ["fas", "cart-shopping"],
          label: "Заказы",
        },
        {
          to: {name: "AdminNews"},
          icon: ["fas", "newspaper"],
          label: "Новости",
        },
      ];
    },
  },
  created() {
    const storedBarState = localStorage.getItem("sidebar");
    this.enabled = storedBarState ? JSON.parse(storedBarState) : true;
  },
  methods: {
    ...mapActions(["openSidebar", "setSidebarMob"]),
    switchSidebar() {
      this.enabled = !this.enabled;
      this.openSidebar();
      localStorage.setItem("sidebar", JSON.stringify(this.enabled));
    },
  },
};
</script>
