<template>
  <div>
     <b-navbar class="is-light">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://cdn.pulpo.me/logo_apqcsv.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item @click="goToQuestionsPage" v-if="!hasSession">
          Preguntas Frecuentes
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item v-if="hasSession" @click.prevent="goToMyGroupsPage">
          Mis grupos
        </b-navbar-item>
        <b-navbar-item v-if="hasSession" @click.prevent="goToDashboardPage">
          Compartir
        </b-navbar-item>
        <b-navbar-item v-if="hasSession">
          <a class="button is-light" v-if="hasSession" @click.prevent="goToCreateGroupPage">
            Crear grupo
          </a>
        </b-navbar-item>
        <b-navbar-dropdown label="Bienvenido" class="drop" v-if="!hasSession">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-light" v-if="!hasSession" @click="goToRegisterPage">
                Registrarse
              </a>
              <a class="button is-light" v-if="!hasSession" @click="goToLoginPage">
                Iniciar Sesión
              </a>
            </div>
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Mi perfil" class="drop" v-if="hasSession">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-light" v-if="hasSession" @click="goToSettings">
                Ajustes
              </a>
              <a class="button is-light" v-if="hasSession" @click="goToWallet">
                Wallet
              </a>
              <a class="button is-light" v-if="hasSession" @click="goToQuestionsPage">
                Ayuda
              </a>
              <a class="button is-light" v-if="hasSession" @click="goToQuestionsPage">
                FAQ
              </a>
              <a class="button is-light" v-if="hasSession" @click.prevent="closeSession">
                Cerrar Sesión
              </a>
            </div>
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

  
  </div>
</template>


<script>

export default {
  name: "Header",
  data() {
    return{
    hasSession: {
      type: Boolean,
      default: false
    },
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
  firestore(){
    return{
    users: UsersRef
    }
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
    goToSettings(){
      this.$router.push("/settings")
    },
    goToWallet(){
      this.$router.push("/wallet")
    },
    goToQuestionsPage() {
      this.$router.push("/faq");
    },
     goToDashboardPage() {
      this.$router.push("/dashboard");
    },
     goToMyGroupsPage() {
      this.$router.push("/my-groups");
    },
    goToCreateGroupPage(){
      this.$router.push("/create-group")
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

h1{
  text-align: center;
  margin-bottom: 15px;
}

.drop{
  margin-right: 57px
}

.buttons {
  justify-content: center;
}

.button.is-light{
  width: 100%;
}

.button.is-primary{
  width: 100%;
}

.navbar-item img {
    max-height: 4.75rem;
}

</style>