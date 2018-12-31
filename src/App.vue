<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col >
         <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
import Navbar from '@/components/Navbar'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
