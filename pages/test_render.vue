<template>
  <h1 class="red">
    test render page
  </h1>
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
  },
  middleware({$config}) {
    console.log($config.NUXT_PUBLIC_TEST);
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
