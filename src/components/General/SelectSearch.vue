<template>
  <div class="w-full">
    <div class="relative text-sm">
      <div class="w-full flex justify-between items-center">
        <div class="relative w-full block" @click="isDropdownOpen = true">
          <input
              v-model="inpValue"
              :class="{ 'rounded-b-none' : isDropdownOpen }"
              class="flex text-[#6E6B7B] items-center border w-full rounded-md px-5 py-3"
              :placeholder="$t('mainPage.placeholder')"
              @input="setSearch($event)"
          />
        </div>
      </div>
      <div
          v-if="isDropdownOpen"
          ref="dropdown"
          class="absolute flex flex-col justify-between left-0 top-full w-full h-max bg-white rounded-b-lg shadow-lg z-10"
      >
        <div class="overflow-y-auto max-h-[200px] h-auto text-xs">
          <div v-if="getSearchedProduct">
            <router-link v-for="(option, index) of getSearchedProduct.data"
                         :key="index"
                         :to="{ name: 'Product', params: { prod_id: option.product_id } }"
                         class="px-3 py-2 hover:bg-gray-200 flex items-center justify-between transition-all cursor-pointer"
                         @click="setValue(option)"
            >
              <div class="flex items-center justify-between text-blackColor w-full">
                <div class="font-semibold mr-3 flex items-center">
                  <img :src="option.product_icon" alt="" class="w-10 h-10 object-contain mr-3">
                  <div>
                    <p>{{ option.product_name }}</p>
                    <p class="font-light text-xs">{{ option.product_description }}</p>
                  </div>
                </div>
                <p class="italic">{{ $t('general.price') }}: {{ option.price }} {{ $t('general.tenge') }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p>{{ $t('mainPage.example') }}: <span @click="setSearchFast('TQ')" class="underline cursor-pointer hover:no-underline">TQ</span></p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SelectSearch",
  props: {
    tranId: {
      type: Object,
      required: false
    },
    selected: {
      type: Object,
      required: false
    }
  },
  emits: ["tranData"],
  data() {
    return {
      curCustomer: null,
      inpValue: "",
      selectedOption: null,
      isDropdownOpen: false,
      secondValue: ''
    };
  },
  computed: {
    ...mapGetters(["getSearchedProduct"]),
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
    if (this.selected) {
      this.selectedOption = this.selected;
      this.inpValue = this.selected.name;
    }
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    ...mapActions(["searchProduct"]),
    handleOutsideClick(event) {
      if (this.isDropdownOpen && !this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    async setValue(option) {
      this.selectedOption = option;
      this.inpValue = option.name;
      console.log(option.name);
      this.isDropdownOpen = false;
      this.$emit("tranData", option);
    },
    async setSearch(e) {
      this.inpValue = e.target.value;
      this.secondValue = e.target.value
      console.log(e.target.value)
      await this.$router.push({
        query: {
          ...this.$route.query,
          keyword: e.target.value,
        },
      });
      await this.searchProduct();
    },
    async setSearchFast(e) {
      this.inpValue = e;
      this.secondValue = e
      await this.$router.push({
        query: {
          ...this.$route.query,
          keyword: e,
        },
      });
      await this.searchProduct();
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        window.addEventListener("click", this.handleClickOutside);
      } else {
        window.removeEventListener("click", this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
        window.removeEventListener("click", this.handleClickOutside);
      }
    },
  },
};
</script>
