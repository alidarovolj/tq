<template>
  <div class="bg-whiteColor dark:bg-darkBg h-full min-h-screen">
    <div class="block lg:flex justify-between h-full min-h-screen">
      <AdminHeader />
      <div class="layoutArea h-full min-h-screen flex flex-col justify-between">
        <div class="w-full px-4">
          <slot/>
        </div>
        <AdminFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminFooter from "@/components/AdminFooter.vue";
import AdminHeader from "@/components/AdminHeader.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminHeader,
    AdminFooter
  }
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .layoutArea {
    width: calc(100% - 250px);
    min-width: calc(100% - 250px);
    max-width: calc(100% - 250px);
  }
}
</style>