<template>
  <div class="border-t dark:border-darkBg py-10 dark:text-darkText">
    <div class="block">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="block lg:flex items-center justify-between">
          <div>
            <img class="w-20" src="@/assets/img/logos/logo-main.png" alt="" />
            <p class="text-xl font-semibold my-5">
              Веб-студия по разработке/созданию сайтов
            </p>
          </div>
          <div class="mb-5 lg:mb-0 flex items-center text-mainColor">
            <router-link class="flex items-center" to="/">
              <font-awesome-icon
                class="mr-3 text-xl"
                :icon="['fas', 'phone']"
              /><span>+7 (747) 236-75-03</span></router-link
            >
          </div>
        </div>
        <div class="text-xs">
          <p>
            Все права на публикуемые на сайте материалы принадлежат компании
            CREOAD © 2023
          </p>
          <p class="my-5">
            Пользователь уведомлен, что любые материалы, размещенные на сайте,
            являются объектами интеллектуальной собственности
            CREOAD(правообладателя). Пользователь не вправе без предварительного
            письменного разрешения правообладателя осуществлять какие-либо
            действия с объектами интеллектуальной собственности, в противном
            случае, правообладатель оставляет за собой право на взыскание
            штрафов, предусмотренных законодательством РК, а также на обращение
            в компетентные органы за защитой своих прав и законных интересов.
          </p>
          <p>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>