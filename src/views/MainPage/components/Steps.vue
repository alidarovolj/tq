<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <Heading
        :heading="$t('mainPage.steps.header')"
        :text="$t('mainPage.steps.paragraph')"
      />
      <div class="flex flex-wrap justify-between">
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/1.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.first.heading") }}
            </p>
            <p>{{ $t("mainPage.steps.first.paragraph") }}</p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/2.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.second.heading") }}
            </p>
            <p>{{ $t("mainPage.steps.second.paragraph") }}</p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/3.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.third.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.third.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/4.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.fourth.heading") }}
            </p>
            <p>{{ $t("mainPage.steps.fourth.paragraph") }}</p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/5.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.fifth.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.fifth.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/6.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.sixth.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.sixth.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/7.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.seventh.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.seventh.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/8.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.eighth.heading") }}
            </p>
            <p>{{ $t("mainPage.steps.eighth.paragraph") }}</p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/9.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.ninth.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.ninth.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/10.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.tenth.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.tenth.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/11.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.eleven.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.eleven.paragraph") }}
            </p>
          </div>
        </div>
        <div
          class="w-full lg:w-third dark:bg-darkBg dark:text-darkText flex items-center bg-secondaryColor p-5 rounded-2xl mb-8"
        >
          <img class="w-20 mr-3" src="@/assets/img/steps/12.png" alt="" />
          <div>
            <p class="mb-2 font-semibold">
              {{ $t("mainPage.steps.twelve.heading") }}
            </p>
            <p>
              {{ $t("mainPage.steps.twelve.paragraph") }}
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