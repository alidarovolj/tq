<template>
  <div class="pt-24 lg:pt-10 text-blackColor dark:text-whiteColor">
    <div class="container mx-auto px-4 lg:px-0">
      <div class=" mb-10">
        <h1 class="text-2xl font-semibold dark:text-whiteColor mb-3">О компании</h1>
        <p class="text-lg font-semibold">Компания "Trust Quality" - Ваш надежный партнер для инновационных и
          рациональных решений по освещению.</p>
      </div>
      <div class="mb-10">
        <p class="mb-3"><span class="font-semibold italic">Название компании</span>: Trust Quality/TQ</p>
        <p class="mb-3"><span class="font-semibold italic">Область деятельности</span>: Продажа и дистрибуция
          автомобильных аксессуаров </p>
        <p class="mb-3"><span class="font-semibold italic">Год основания</span>: 2016</p>
        <p><span class="font-semibold italic">Местонахождение</span>: Алматы, Казахстан, мкр Баянауыл 57а, 2 ярус,
          186-236 бутик</p>
      </div>
      <div class="mb-10">
        <div class="mb-5">
          <p class="mb-5 text-xl font-semibold">Описание компании</p>
          <p>Компания TrustQuality специализируется на поставке высококачественных автомобильных дворников и ламп для
            широкого спектра автомобилей. Нашей главной целью является обеспечение безопасности и комфорта на дороге,
            предоставляя клиентам доступ к самым современным и надежным автомобильным аксессуарам.</p>
        </div>
        <div>
          <p class="mb-5 text-xl font-semibold">Наши Преимущества</p>
          <p>Компания TrustQuality предостовляет только качественный продукт и предостовляет 12 месяцев гарантии почти
            на всю продукцию. </p>
        </div>
      </div>
      <div class="mb-10">
        <p class="mb-5 text-xl font-semibold">Наши Продукты</p>
        <p class="mb-3"><span class="font-semibold italic">Дворники</span>: Мы предлагаем дворники для всех типов
          погодных условий, включая летние, зимние и гибридные дворники. Они обеспечивают отличное удаление влаги и
          улучшают видимость во время дождя и снегопада.</p>
        <p><span class="font-semibold italic">Автолампы</span>: Наши лампы обеспечивают яркое и равномерное освещение
          дороги, повышая безопасность при ночных поездках. У нас есть лампы разных типов, включая галогенные и
          светодиодные.</p>
      </div>
      <div class="mb-10">
        <p class="mb-5 text-xl font-semibold">Наши Преимущества</p>
        <div class="flex flex-wrap justify-between">
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">Широкий ассортимент</p>
              <p class="text-xs">Мы предлагаем богатый выбор дворников и фар различных типов, размеров и моделей, чтобы
                удовлетворить
                потребности всех автовладельцев.</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">Качество</p>
              <p class="text-xs">TrustQuality работает только с ведущими производителями, известными своей надежностью и
                качеством продукции. Все товары проходят строгий контроль качества.</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">Профессиональные консультации</p>
              <p class="text-xs">Наши эксперты всегда готовы предоставить консультации по выбору наиболее подходящих
                дворников, автоламп и аксуссуаров, учитывая марку и модель вашего автомобиля.</p>
            </div>
          </div>
          <div class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">Доставка</p>
              <p class="text-xs">Мы предоставляем удобные опции доставки по всему Казахстану и СНГ, чтобы сделать
                процесс покупки максимально удобным для клиентов.</p>
            </div>
          </div>
          <div
              class="flex items-center shadow-lg w-full lg:w-third bg-white dark:bg-darkBgColor p-3 rounded-xl mb-10">
            <font-awesome-icon :icon="['fas', 'check']" class="bg-green-500 text-white rounded-full p-2 mr-3"/>
            <div class="text-sm flex flex-col justify-between h-full">
              <p class="text-lg font-semibold mb-3">Цены и акции</p>
              <p class="text-xs">У нас всегда актуальные цены и специальные предложения для наших клиентов. Мы стремимся
                сделать наши товары доступными для широкой аудитории.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center font-semibold">Мы гордимся тем, что помогаем автолюбителям обеспечивать безопасность и комфорт на
          дорогах. TrustQuality – доверяй качеству</p>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "AboutPage",
  setup() {
    useMeta({title: "О компании"});
  },
}
</script>