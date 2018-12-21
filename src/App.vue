
<template>
  <VApp class="grey lighten-4">
    <Navbar :login="login"/>
    <VContent class="mx-4 mb-4">
      <RouterView></RouterView>
    </VContent>
  </VApp>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('user', {
      login: 'login',
    }),
  },
};
</script>
