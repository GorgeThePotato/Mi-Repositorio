<template>
  <div>
  <b-navbar class="transparent">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://cdn.pulpo.me/logo_apqcsv.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item @click="goToQuestionsPage">
        Preguntas Frecuentes
      </b-navbar-item>
      <b-navbar-item @click="goToCreateGroupPage">
        Crear Grupo
      </b-navbar-item>
    </template>

    <template #end>
    <b-navbar-dropdown label="Hey" class="drop">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" v-if="!hasSession" @click="goToRegisterPage">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" v-if="!hasSession" @click="goToLoginPage">
            Log in
          </a>
          <a class="button is-light" v-if="hasSession" @click.prevent="closeSession">
            Log out
          </a>
        </div>
      </b-navbar-item>
    </b-navbar-dropdown>
    </template>
  </b-navbar>
  </div>
</template>

<script>
import {Auth} from '@/modules/firebase';

export default {
  name: "Header",
  data() {
    return{
    hasSession: {
      type: Boolean,
      default: false
    }
    }
  },
   mounted() {
    Auth.onAuthStateChanged((user) => {
      
      this.hasSession = (user !== null)

      if(this.hasSession && this.$route.name === 'login' ||
      this.$route.name === 'register' ||
      this.$route.name === 'reset_password'){
        try{
          this.$router.replace("/")
        }catch(e){
          console.error(e.message)
        }
      }
    });
  },
  methods:{
    goToQuestionsPage(){
      this.$router.push("/faq")
    },
    goToCreateGroupPage(){
      this.$router.push("/create-group")
    },
    goToRegisterPage(){
      this.$router.push("/register")
    },
     goToLoginPage(){
      this.$router.push("/login")
    },
     async closeSession() {
      try {
        await Auth.signOut();
        
        this.$router.push("/").catch(()=>{});
        
      } catch (e) {
        console.error(e.message);
      }
    },
  }
};

</script>

<style scoped>

.drop{
  margin-right: 40px
}

</style>