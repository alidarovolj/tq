<template>
  <div v-if="getLinks" class="breadcrumbs w-max rounded-lg flex text-sm items-center">
    <div class="block lg:flex items-center">
      <router-link
          v-if="getLinks.length > 1"
          :to="getLinks[getLinks.length - 2].to"
          class="block text-mainColor"
      >
        <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="text-lg mr-3"
        />
      </router-link>
      <div v-for="(link, index) of getLinks" :key="index" class="mr-3 flex items-center text-mainColor">
        <router-link :to="link.to">{{ link.name }}</router-link>
        <p v-if="getLinks.length - 1 !== index" class="ml-3">/</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BreadcrumbsComponent",
  props: {
    getLinks: {
      type: Object
    }
  },
  data() {
    return {
      newVal: null,
      oldVal: null,
    }
  },
};
</script>
