<template>
  <div class="container mx-auto px-4 lg:px-0">
    <div class="block lg:flex justify-between">
      <div class="w-full lg:w-1/4 mr-4">
        <div class="shadow sticky top-44">
          <div
              class="text-center py-2 bg-blackColor dark:bg-blackColor dark:text-whiteColor dark:border-b dark:border-gray-700 text-white rounded-t-lg">
            <p>Каталог товаров</p>
          </div>
          <div class="rounded-b-lg">
            <div v-for="(item, index) of catalog" :key="index"
                 :class="{ 'mb-3 rounded-b-lg' : index + 1 === catalog.length }"
                 class="flex items-center justify-between px-2 py-1 cursor-pointer dark:text-whiteColor hover:bg-mainColor hover:text-whiteColor transition-all dark:bg-blackColor dark:hover:bg-mainColor">
              <div class="flex items-center">
                <img :src="item.img" alt="" class="w-10 h-10 object-contain mr-2">
                <p>{{ item.name }}</p>
              </div>
              <font-awesome-icon :icon="['fas', 'chevron-right']"/>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4">
        <div class="mb-10">
          <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Популярные категории</h2>
          <div class="flex justify-between flex-wrap">
            <div
                v-for="(item, index) of catalog"
                :key="index"
                class="w-half dark:bg-blackColor dark:text-whiteColor lg:w-fourth mb-2 bg-whiteColor p-4 rounded-2xl cursor-pointer hover:bg-mainColor hover:text-whiteColor transition-all">
              <img :src="item.img" alt="" class="w-32 h-32 mx-auto object-contain">
              <p class="text-center font-semibold">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
              :class="{ 'max-h-[500px] h-[500px]' : !openedBlock }"
              class="overflow-y-hidden">
            <div v-for="(item, index) of catalog" :key="index" class="mb-10">
              <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">{{ item.name }}</h2>
              <div class="flex justify-between flex-wrap">
                <div
                    v-for="(it, ind) of item.items"
                    :key="ind"
                    class="flex flex-col dark:bg-blackColor dark:text-whiteColor justify-between w-half lg:w-fourth mb-2 bg-whiteColor p-4 rounded-2xl cursor-pointer shadow hover:bg-mainColor hover:text-whiteColor transition-all relative">
                  <img alt="" class="absolute left-3 top-3 w-10 h-10 object-contain" src="@/assets/img/logo_hor.png">
                  <img :src="it.img" alt="" class="w-32 h-32 mx-auto object-contain">
                  <p class="text-center font-semibold">{{ it.name }}</p>
                  <p class="text-base font-semibold text-center my-3">{{ it.price }} тнг.</p>
                  <div class="block lg:flex justify-between items-center">
                    <p class="w-full lg:w-half mb-2 lg:mb-0 text-center">В избранное</p>
                    <p class="bg-blackColor dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full lg:w-half">
                      В корзину</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
              class="absolute left-1/2 -translate-x-1/2 translate-y-full -bottom-5 bg-blackColor cursor-pointer dark:bg-whiteColor dark:text-blackColor text-center px-3 py-2 text-whiteColor rounded-md w-full lg:w-half"
              @click="openedBlock = !openedBlock">
            <span v-if="openedBlock === false">Открыть полностью</span>
            <span v-else>Закрыть</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "CatalogComponent",
  computed: {
    ...mapGetters(['getCategoriesWithProducts'])
  },
  mounted() {
    this.categoriesWithProducts()
  },
  methods: {
    ...mapActions(['categoriesWithProducts'])
  },
  data() {
    return {
      openedBlock: false,
      catalog: [
        {
          id: 1,
          name: "Би-линзы | комплектующие",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/15/00/15/15.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 2,
          name: "Ксеноновое оборудование",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/17/00/17/17.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 3,
          name: "Переходные рамки",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/12/00/12/12.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 4,
          name: "Оптика | комплектующие",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/18/00/18/18.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 5,
          name: "Светодиодное оборудование",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/19/00/19/19.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 6,
          name: "Герметики для фар",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/21/00/21/21.200x0.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 7,
          name: "Электрика",
          img: "https://dixel.ru/wa-data/public/photos/03/01/103/103.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 8,
          name: "Крышки для фар",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/22/00/22/22.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 9,
          name: "Инструмент для ретрофита",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/07/00/7/7.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 10,
          name: "Промоматериалы",
          img: "https://dixel.ru/wa-data/public/photos/07/01/107/107.970.png",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 11,
          name: "Распродажа",
          img: "https://dixel.ru/wa-data/public/photos/08/01/108/108.970.png",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        },
        {
          id: 12,
          name: "Оптика | комплектующие",
          img: "https://w230305-2727.webasyst.cloud/wa-data/public/photos/18/00/18/18.970.jpg",
          items: [
            {
              id: 1,
              name: "Би-линза DIXEL G6M MINI SUPER H1 2.5 дюйма",
              article: "002.0002.001",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/29/33/13329/images/99066/99066.600x0.jpg"
            },
            {
              id: 2,
              name: "Лампа ксенон DIXEL UXV CERAMICK +30%; HB3",
              article: "900.0007.002",
              stock: true,
              price: 1200,
              img: "https://dixel.ru/wa-data/public/shop/products/51/46/14651/images/100034/100034.970.jpg"
            },
            {
              id: 3,
              name: "Рамки Audi A6 V (C8) (2018 - 2023 г.в.) на 3/3R/5R (2 шт.)",
              article: "001.0102.509",
              stock: true,
              price: 3500,
              img: "https://dixel.ru/wa-data/public/shop/products/94/58/15894/images/101096/101096.970.jpg"
            },
            {
              id: 4,
              name: "Игнитор D2S/R - Ket 02 (Красн.игн) 4-Контакта",
              article: "006.0021.002",
              stock: true,
              price: 3200,
              img: "https://dixel.ru/wa-data/public/shop/products/20/30/13020/images/98647/98647.970.jpg"
            }
          ]
        }
      ]
    }
  }
}
</script>