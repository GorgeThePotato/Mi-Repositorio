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

    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
          <div class="box">
            <section  style="padding: 10px">
              <p class="content is-large"><h1 class="content is-large"><b>¿En qué quieres ahorrar?</b></h1>
              <b-field>
                <b-autocomplete
                  rounded
                  v-model="name"
                  :data="filteredDataArray"
                  placeholder="Buscar plataforma"
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
                  <template #empty>No results found</template>
                </b-autocomplete>
              </b-field>
            </section>
          </div>

          <section style="margin-top 15px, margin-bottom: 15px">
            <div class="columns is full">
              <div class="column is-one-fifth">
                <b-button rounded size="is-large">
                  Streaming</b-button>
              </div>
              <div class="column is-one-fifth">
                <b-button rounded size="is-large">Música</b-button>
              </div>
              <div class="column is-one-fifth">
              <b-button rounded size="is-large">Fitness</b-button>
              </div>
              <div class="column is-one-fifth">
                <b-button rounded size="is-large">Noticias</b-button>
              </div>
              <div class="column is-one-fifth">
                <b-button rounded size="is-large">Gaming</b-button>
              </div>
            </div>
          </section>

          <section>
            <div class="box">
              <p class="content is-large"><h1 class="content is-large"><b>Grupos compartidos</b></h1>
            </div>
          </section>
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
    data: [
      'Netflix',
      'Disney +',
      'HBO Max',
      'Atresplayer',
      'Spotify'               
    ],
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
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
      return option
      .toString()
      .toLowerCase()
      .indexOf(this.name.toLowerCase()) >= 0
    })
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
</style>