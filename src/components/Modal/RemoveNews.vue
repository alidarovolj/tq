<template>
  <div>
    <div class="mb-3 lg:mb-5 lg:w-full">
      <h2 class="text-center text-2xl mb-5 font-medium dark:text-darkText">
        Подтвердите удаление
      </h2>
      <p class="text-sm text-center">
        Вы уверены что хотите удалить данную новость? Вы больше не сможете
        восстановить эти данные.
      </p>
    </div>
    <form class="flex justify-center text-sm mt-5" @submit.prevent="removeNewsLocal">
      <div class="flex justify-center">
        <div
            class="w-max text-black mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
            @click="close_modal"
        >
          <p class="dark:text-red-500">Отменить</p>
        </div>
        <div>
          <button
              v-if="loading === false"
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer"
              type="submit">
            Удалить
          </button>
          <div
              v-else
              class="w-max px-6 py-2.5 rounded-md text-center bg-red-500 dark:bg-red-500 text-white cursor-pointer flex items-center">
            <p class="spinner mr-2"></p>
            Подождите
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
    ...mapGetters(["getRemovedNews"]),
  },
  methods: {
    ...mapActions(["removeNews", "news"]),
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async removeNewsLocal() {
      this.loading = true;
      await this.removeNews(this.tranId)
          .then(() => {
            this.toast(false, "Новость удалена");
            this.news();
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
