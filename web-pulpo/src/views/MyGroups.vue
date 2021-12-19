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
              <a class="button is-light" v-if="hasSession" @click.prevent="closeSession">
              Cerrar Sesión
              </a>
            </div>
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="has-text-centered">        
          <h1 class="is-size-3"><b>Grupos de XX</b></h1>
        </div>
        <div class="container">
          <h1 class="is-size-4"><b>Grupos de los cuales eres admin</b></h1>
          <div class="column is-one-quarter">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  NETFLIX
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  Grupo compartido por:
                  <br>
                  Sitios disponibles:
                  <br>
                  Precio mensual:
                  <br>
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
             <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  NETFLIX
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  Grupo compartido por:
                  <br>
                  Sitios disponibles:
                  <br>
                  Precio mensual:
                  <br>
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        </div>
        
        <div class="container">
          <h1 class="is-size-4"><b>Grupos de los cuales eres miembro</b></h1>
          <h1 class="is-size-6">No perteneces a ningún grupo como miembro suscriptor. Para unirte a un grupo nuevo, consulta el apartado de Grupos Públicos.</h1>
        </div>
    </div>
    </div>
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
    },
    name: '',
    selected: null      
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
    goToSettings(){
      this.$router.push("/settings")
    },
    goToWallet(){
      this.$router.push("/wallet")
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
  margin-bottom: 20px;
}

section{
  margin-top: 20px;
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

.columns{
  margin-top: 15px;
  margin-bottom: 15px;
}

.column .is-one-quarter{
  display: flex;
}

.card{
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
}

.card-header-title{
  margin-left: 40px
}

.container:not(.is-max-desktop):not(.is-max-widescreen) {
    margin-top: 20px;
}
</style>
