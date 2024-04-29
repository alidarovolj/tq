<template>
  <div>
    <div class="lg:w-full mb-5">
      <h2 class="text-center text-2xl font-medium mb-2">
        {{ $t('editNews.title') }}
      </h2>
      <p class="text-center text-sm">
        {{ $t('editNews.subTitle') }}
      </p>
      <div
          class="flex flex-col justify-between h-full text-xs"
      >
        <form
            action=""
            @submit.prevent="sendForm">
          <div class="block lg:flex">
            <div class="w-full mt-0 lg:mt-0 h-max scroll-container lg:h-max overflow-y-auto pb-5 px-1">
              <div class="content h-max">
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.name') }}
                  </label>
                  <input
                      v-model="form.title"
                      :class="{
                      'border-red-500': v$.form.title.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createNews.placeholder')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.name_kz') }}
                  </label>
                  <input
                      v-model="form.title_kz"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createNews.placeholder_kz')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.description') }}
                  </label>
                  <textarea
                      v-model="form.description"
                      :class="{
                      'border-red-500': v$.form.description.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createNews.placeholder_description')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.description_kz') }}
                  </label>
                  <textarea
                      v-model="form.description_kz"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createNews.placeholder_description_kz')"
                      type="text"
                  />
                </div>
                <p class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText">
                  {{ $t('createNews.chooseLang') }}
                </p>
                <div class="flex mb-2">
                  <p :class="{ 'bg-mainColor text-white' : current_lang === true }"
                     class="w-max px-5 py-2 rounded-lg font-semibold"
                     @click="current_lang = true">RU</p>
                  <p :class="{ 'bg-mainColor text-white' : current_lang === false }"
                     class="w-max px-5 py-2 rounded-lg font-semibold"
                     @click="current_lang = false">KZ</p>
                </div>
                <div v-if="current_lang" class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.content') }}
                  </label>
                  <quill-editor
                      v-model:content="form.content"
                      class="h-48"
                      contentType="html"
                      theme="snow"></quill-editor>
                  <p v-if="v$.form.content.$errors.length">
                    {{ $t('createNews.fillContent') }}
                  </p>
                </div>
                <div v-else class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.content_kz') }}
                  </label>
                  <quill-editor
                      v-model:content="form.content_kz"
                      class="h-48"
                      contentType="html"
                      theme="snow"></quill-editor>
                  <p v-if="v$.form.content_kz.$errors.length">
                    {{ $t('createNews.fillContent') }}
                  </p>
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createNews.image') }}
                  </label>
                  <input type="file" @change="attachFile"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-3">
            <div
                class="w-max text-black dark:text-white mr-3 flex items-center rounded-md px-5 py-2 cursor-pointer"
                @click="close_modal"
            >
              <p class="dark:text-red-500">
                {{ $t('general.cancel') }}
              </p>
            </div>
            <div>
              <button
                  v-if="loading === false"
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer"
                  type="submit">
                {{ $t('general.save') }}
              </button>
              <div
                  v-else
                  class="w-max px-6 py-2.5 rounded-md text-center bg-mainColor dark:bg-mainColor text-white cursor-pointer flex items-center">
                <p class="spinner mr-2"></p>
                {{ $t('general.wait') }}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import {inject} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {required} from "@vuelidate/validators";
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "EditNews",
  props: {
    tranId: {
      required: true,
      type: Object
    }
  },
  components: {
    QuillEditor
  },
  emits: ["requestToClose"],
  setup() {
    const toast = inject('notify');
    return {
      v$: useVuelidate(),
      toast
    };
  },
  data() {
    return {
      loading: false,
      current_lang: true,
      form: {
        title: "",
        title_kz: "",
        description: "",
        description_kz: "",
        content: "",
        content_kz: "",
        img: null,
      }
    }
  },
  validations() {
    return {
      form: {
        title: {required},
        description: {required},
        content: {required},
        content_kz: {required},
      },
    };
  },
  computed: {
    ...mapGetters([]),
  },
  mounted() {
    this.form.title = this.tranId.title
    this.form.title_kz = this.tranId.title_kz
    this.form.description = this.tranId.description
    this.form.description_kz = this.tranId.description_kz
    this.form.content = this.tranId.content
    this.form.content_kz = this.tranId.content_kz
  },
  methods: {
    ...mapActions(['editNews', 'news']),
    attachFile(event) {
      const file = event.target.files[0];
      this.form.img = file;
    },
    close_modal() {
      this.$emit("requestToClose", false);
    },
    async sendForm() {
      this.loading = true;
      this.v$.$validate();

      if (this.v$.$invalid) {
        this.loading = false;
        this.toast(false, "Не все поля заполнены");
        return;
      }
      await this.editNews({id: this.tranId.id, form: this.form})
          .then(() => {
            this.loading = false;
            this.toast(true, "Новость успешно отредактирована");
            this.close_modal();
            this.news();
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

}
</script>