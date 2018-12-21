
<template>
  <VApp class="grey lighten-4">
    <Navbar />
    <VContent class="mx-4 mb-4">
      <RouterView></RouterView>
    </VContent>
  </VApp>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
