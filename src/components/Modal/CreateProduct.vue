<template>
  <div>
    <div class="lg:w-full mb-5">
      <h2 class="text-center text-2xl font-medium mb-2">
        {{ $t('createProduct.title') }}
      </h2>
      <p class="text-center text-sm">
        {{ $t('createProduct.subTitle') }}
      </p>
      <div
          class="flex flex-col justify-between h-full text-xs"
      >
        <form
            action=""
            @submit.prevent="sendForm">
          <div class="block lg:flex">
            <div
                class="w-full mt-0 lg:mt-0 h-max scroll-container lg:h-max overflow-y-auto pb-5 px-1"
            >
              <div class="content h-max">
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    UUID
                  </label>
                  <input
                      v-model="form.uuid"
                      :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.fillUUID')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.name') }}
                  </label>
                  <input
                      v-model="form.name"
                      :class="{
                      'border-red-500': v$.form.name.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.name_kz') }}
                  </label>
                  <input
                      v-model="form.name_kz"
                      :class="{
                      'border-red-500': v$.form.name_kz.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder_kz')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.description') }}
                  </label>
                  <textarea
                      v-model="form.description"
                      :class="{
                      'border-red-500': v$.form.description.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder_description')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.description_kz') }}
                  </label>
                  <textarea
                      v-model="form.description_kz"
                      :class="{
                      'border-red-500': v$.form.description_kz.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder_description_kz')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.retailPrice') }}
                  </label>
                  <input
                      v-model="form.price"
                      :class="{
                      'border-red-500': v$.form.price.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder_retailPrice')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.wholesalePrice') }}
                  </label>
                  <input
                      v-model="form.user_price"
                      :class="{
                      'border-red-500': v$.form.user_price.$errors.length,
                    }"
                      class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                      name="first_name"
                      :placeholder="$t('createProduct.placeholder_wholesalePrice')"
                      type="text"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.category') }}
                  </label>
                  <select v-if="getCategoriesAll"
                          id=""
                          v-model="form.category_id"
                          :class="{
                  'border-red-500': v$.form.user_price.$errors.length,
                  }"
                          class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white"
                          name="">
                    <option value="">{{ $t('createProduct.placeholder_category') }}</option>
                    <option v-for="(item, index) of getCategoriesAll.data" :value="item.id">{{ item.name }}</option>
                  </select>
                </div>
                <div class="flex flex-col mb-2 w-full">
                  <label
                      class="text-xs font-normal text-[#6E6B7B] mb-1 dark:text-darkText"
                      for="first_name"
                  >
                    {{ $t('createProduct.image') }}
                  </label>
                  <input type="file" @change="attachFile"/>
                  <p v-if="v$.form.icon.$errors.length" class="text-red-500">
                    {{ $t('createProduct.fillImage') }}
                  </p>
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

export default {
  name: "CreateProduct",
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
      form: {
        name: "",
        name_kz: "",
        icon: "",
        description: "",
        description_kz: "",
        category_id: "",
        price: "",
        user_price: "",
        uuid: ""
      }
    }
  },
  validations() {
    return {
      form: {
        name: {required},
        name_kz: {required},
        icon: {required},
        description: {required},
        description_kz: {required},
        category_id: {required},
        price: {required},
        user_price: {required},
        uuid: {required}
      },
    };
  },
  computed: {
    ...mapGetters(['getCategoriesAll', 'getCreatedProduct']),
  },
  mounted() {
    this.categoriesAll()
  },
  methods: {
    ...mapActions(['categoriesAll', 'createProduct', 'products']),
    attachFile(event) {
      const file = event.target.files[0];
      this.form.icon = file;
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
      await this.createProduct(this.form)
          .then(() => {
            this.loading = false;
            this.toast(true, "Продукт успешно создан");
            this.products();
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

}
</script>