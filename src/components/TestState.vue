
<template>
  <v-container grid-list-md text-xs-center>
    <h3>모든 유저의 수: {{$store.state.user.items.length}}</h3>
    <v-layout row wrap>

      <v-flex xs6>
        <allusers/>
      </v-flex>

      <v-flex xs6>
        <signup/>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
import allusers from './TestState_AllUsers.vue';
import signup from './TestState_SignUp.vue';

export default {
  components: { allusers, signup },
};
</script>

<style>

</style>
