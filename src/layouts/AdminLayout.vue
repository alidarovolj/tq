<template>
  <div class="bg-whiteColor dark:bg-darkBg h-screen">
    <div class="flex justify-between h-full">
      <AdminHeader/>
      <div class="layoutArea h-full flex flex-col justify-between">
        <div class="container mx-auto px-4 lg:px-0">
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
.layoutArea {
  width: calc(100% - 250px);
  min-width: calc(100% - 250px);
  max-width: calc(100% - 250px);
}
</style>