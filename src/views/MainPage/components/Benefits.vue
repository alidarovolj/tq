<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <Heading
        heading="Наши особенности"
        text="У нас есть все необходимое для запуска и развития вашего бизнеса"
      />
      <div class="flex flex-wrap justify-between">
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/1.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">Фирменный стиль</p>
            <p>
              Наша компания готова предоставить клиенту первый взгляд на то, как
              будет выглядеть его сайт
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/2.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">Кроссбраузерность</p>
            <p>
              Ваш сайт будет иметь способность подстраиваться под несколько
              браузеров и корректно отображаться в них.
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/3.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">Адаптивный дизайн</p>
            <p>
              Мы позволим вашему сайту автоматически адаптироваться под любое
              устройство и разрешение других компьютеров.
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/4.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">SEO продвижение</p>
            <p>
              Индивидуально подготовим для вас подробную SEO-стратегию
              продвижения. Покажем, где сейчас находится сайт и как добраться до
              ваших бизнес-целей.
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/5.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">Обратная связь 24/7</p>
            <p>
              У каждого нашего клиента есть возможность позвонить нам в любое
              время суток, ведь мы заботимся о вас и ваших идеях.
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/benefits/6.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">Прозрачная работа</p>
            <p>
              У каждого клиента есть возможность проверить ход работы в любой
              момент зайдя на свой собственный кабинет.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Steps",
  components: {
    Heading,
  },
};
</script>