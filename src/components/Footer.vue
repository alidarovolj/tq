<template>
  <div class="bg-white dark:bg-darkBg dark:border-t dark:border-gray-700 py-10 mt-10 dark:text-whiteColor">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex mb-5">
        <div class="mr-10">
          <img v-if="currentTheme === 'light'" alt="" class="w-40" src="@/assets/img/logo_hor.png">
          <img v-else alt="" class="w-40" src="@/assets/img/logo_hor_white.png">
        </div>
        <div class="mr-10">
          <p class="text-lg font-semibold mb-2">Call Center</p>
          <a class="block" href="tel:77472367503">+7 (747) 236-75-03</a>
          <a class="block" href="mailto:support@tq.kz">support@tq.kz</a>
        </div>
        <div>
          <p class="text-lg font-semibold mb-4">Навигация</p>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">
            Главная
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">О
            компании
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">
            Владельцам
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">
            Модели
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">
            Новости
          </router-link>
          <router-link :to="{ name: 'MainPage' }" class="hover:text-mainColor transition-all block no-underline mb-2">
            Контакты
          </router-link>
        </div>
      </div>
      <div class="text-xs">
        <p class="mb-2">Все права на публикуемые на сайте материалы принадлежат компании Trust Quality © 2023</p>
        <p class="mb-2">Пользователь уведомлен, что любые материалы, размещенные на сайте, являются объектами интеллектуальной
          собственности Trust Quality(правообладателя). Пользователь не вправе без предварительного письменного разрешения
          правообладателя осуществлять какие-либо действия с объектами интеллектуальной собственности, в противном случае,
          правообладатель оставляет за собой право на взыскание штрафов, предусмотренных законодательством РК, а также на
          обращение в компетентные органы за защитой своих прав и законных интересов.</p>
        <p>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких
          условиях не является публичной офертой.</p>
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