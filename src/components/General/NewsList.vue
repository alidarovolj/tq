<template>
  <div v-if="$route.name != 'NewsPage'" class="mt-10">
    <div class="container mx-auto px-4 lg:px-0">
      <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Новости компании</h2>
      <div class="block lg:flex justify-between">
        <div v-for="(item, index) of news" :key="index" class="w-full lg:w-third flex flex-col justify-between bg-white dark:bg-darkBgColor text-blackColor dark:text-white rounded-xl mb-4">
          <img :src="item.img" alt="" class="w-full rounded-t-xl">
          <div class="p-5">
            <div class="mb-5">
              <p class="font-bold mb-3">{{ item.title }}</p>
              <p>{{ item.description }}</p>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 text-xl"/>
                <p>{{ item.views }}</p>
              </div>
              <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-xl"/>
                <p>{{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {
      news: [
        {
          id: 1,
          title: "Наиболее распространенные ошибки в работе веб-разработчика: ТОП-7",
          title_kz: "Веб-әзірлеуші жұмысындағы ең көп тараған қателер: ТОП 7",
          img: "https://itproger.com/img/news/x1693722564.jpg.pagespeed.ic.D3ibpnKfBc.webp",
          description: "Когда дело доходит до крупных проектов в веб-разработке, многие специалисты рискуют совершить не одну ошибку. Сегодня мы хотим предостеречь вас и рассказать о самых распространенных из них.",
          description_kz: "Ірі веб-әзірлеу жобаларына келетін болсақ, көптеген мамандар бірнеше қателік жасау қаупін тудырады. Бүгін біз сізді ескертіп, олардың ең көп таралғаны туралы айтқымыз келеді.",
          content: "<p>Hello World</p>",
          content_kz: "<p>Hello World</p>",
          date: "06 сентября 2023 в 17:25",
          likes: 10,
          views: 225
        },
        {
          id: 1,
          title: "Наиболее распространенные ошибки в работе веб-разработчика: ТОП-7",
          img: "https://itproger.com/img/news/x1693722564.jpg.pagespeed.ic.D3ibpnKfBc.webp",
          description: "Когда дело доходит до крупных проектов в веб-разработке, многие специалисты рискуют совершить не одну ошибку. Сегодня мы хотим предостеречь вас и рассказать о самых распространенных из них.",
          date: "06 сентября 2023 в 17:25",
          views: 225
        },
        {
          id: 1,
          title: "Наиболее распространенные ошибки в работе веб-разработчика: ТОП-7",
          img: "https://itproger.com/img/news/x1693722564.jpg.pagespeed.ic.D3ibpnKfBc.webp",
          description: "Когда дело доходит до крупных проектов в веб-разработке, многие специалисты рискуют совершить не одну ошибку. Сегодня мы хотим предостеречь вас и рассказать о самых распространенных из них.",
          date: "06 сентября 2023 в 17:25",
          views: 225
        }
      ]
    }
  }
}
</script>