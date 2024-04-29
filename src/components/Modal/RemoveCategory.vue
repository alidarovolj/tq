<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        {{ $t("removeCategory.title") }}
      </h2>
      <p class="text-sm text-center">
        {{ $t("removeCategory.subTitle") }}
      </p>
    </div>
    <form
        class="flex justify-center text-sm mt-5"
        @submit.prevent="removeCategoryLocal">
      <div class="flex justify-center">
        <div
            class="w-max text-black mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
            @click="close_modal"
        >
          <p class="dark:text-red-500">
            {{ $t("general.cancel") }}
          </p>
        </div>
        <div>
          <button
              v-if="loading === false"
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer"
              type="submit">
            {{ $t("general.remove") }}
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            {{ $t("general.wait") }}
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {inject} from "vue";

export default {
  name: "RolesDelete",
  props: {
    tranId: {
      type: Object,
      required: false,
    },
  },
  emits: ['requestToClose'],
  setup() {
    const toast = inject("notify");
    return {toast};
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(["getRemovedCategory"]),
  },
  methods: {
    ...mapActions(["removeCategory", "categories"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async removeCategoryLocal() {
      this.loading = true;
      await this.removeCategory(this.tranId)
          .then(() => {
            this.toast(false, "Категория удалена");
            this.categories();
            this.close_modal();
          })
          .catch((error) => {
            if (error.response.data.errors) {
              if (Object.keys(error.response.data.errors).length > 0) {
                Object.values(error.response.data.errors).forEach((err) => {
                  this.toast(false, this.$t(err[0]))
                })
              }
            } else {
              this.toast(false, this.$t(error.response.data.message))
            }
          }).finally(() => {
            this.loading = false;
          })
    },
  },
};
</script>
