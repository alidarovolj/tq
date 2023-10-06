<template>
  <div class="bg-whiteColor dark:bg-darkBg">
    <Header/>
    <div class=" pt-28 bg-whiteColor dark:bg-darkBg">
      <slot/>
    </div>
    <NewsList/>
    <LeaveMessage v-if="$route.name != 'SuccessPage' && $route.name != 'FailurePage'"/>
    <FooterBlock/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import LeaveMessage from "@/components/General/LeaveMessage.vue";
import NewsList from "@/components/General/NewsList.vue";

export default {
  name: "DefaultLayout",
  components: {
    NewsList,
    LeaveMessage,
    FooterBlock,
    Header
  }
};
</script>
  