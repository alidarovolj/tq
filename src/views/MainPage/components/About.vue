<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <Heading
        :heading="$t('mainPage.about.header')"
        :text="$t('mainPage.about.paragraph')"
      />
      <div class="block lg:flex justify-between">
        <div
          class="w-full mb-10 lg:mb-0 lg:w-half flex flex-col justify-between p-10 bg-secondaryColor dark:bg-darkBg dark:text-darkText rounded-2xl"
        >
          <p class="text-center font-semibold mb-5">
            {{ $t('mainPage.about.firstBlock') }}
          </p>
          <div class="flex items-center flex-wrap">
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/14.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/15.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/16.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/17.png"
              alt=""
            />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/1.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/2.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/3.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/4.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/5.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/6.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/7.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/8.png" alt="" />
            <img class="h-10 mx-3 my-2" src="@/assets/img/stack/9.png" alt="" />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/10.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/11.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/12.png"
              alt=""
            />
            <img
              class="h-10 mx-3 my-2"
              src="@/assets/img/stack/13.webp"
              alt=""
            />
          </div>
        </div>
        <div
          class="w-full lg:w-half flex flex-col justify-between p-10 bg-secondaryColor dark:bg-darkBg dark:text-darkText rounded-2xl"
        >
          <p class="text-center font-semibold mb-5">
            {{ $t('mainPage.about.secondBlock') }}
          </p>
          <div class="flex items-center flex-wrap">
            <img class="w-full rounded-2xl mx-3 my-2" src="@/assets/img/results.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "AboutBlock",
  components: {
    Heading,
  },
};
</script>