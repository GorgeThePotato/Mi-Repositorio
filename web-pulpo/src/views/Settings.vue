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

    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="box">
          <h1 class="is-size-5"><b>Datos Personales</b></h1>
          <b-table>
            <tr>           
              <td><b>Nombre</b></td>
              <td>{{this.user.name}}</td>
            </tr>
            <tr>
              <td><b>Apellido</b></td>
              <td>{{this.user.surname}}</td>
            </tr>
            <tr>
              <td><b>Email</b></td>
              <td>{{this.user.email}}</td>
            </tr>
            <tr>
              <td><b>Contraseña</b></td>
              <td>{{this.user.password}}</td>
              <b-button rounded size="is-small">Mostrar</b-button>
            </tr>
          </b-table>
        </div>
        <div class="box">
          <h1 class="is-size-5"><b>Métodos de pago</b></h1>
          <div class="buttons">
            <b-button rounded  type="is-success">Añadir nuevo</b-button>
          </div>
        </div>
        <div class="box">
          <h1 class="is-size-5"><b>Datos de pago</b></h1>
          <h1 class="is-size-6">Añade tus datos bancarios para poder cobrar</h1>
          <div class="buttons">
            <b-button rounded  type="is-success">Añadir datos de pago</b-button>
          </div>
        </div>
        <div class="buttons">
            <b-button rounded size="is-medium" type="is-light" label="Eliminar cuenta" @click="confirmCustomDelete"></b-button>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import {Auth, UsersRef} from '@/modules/firebase';
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: "Settings",
  data() {
    return{
    hasSession: {
      type: Boolean,
      default: false
    },
    user: "",
    userUid: null,
    }
  },
  async mounted() {
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
    })
    this.userUid = this.$route.params.id
    const user = await UsersRef.doc(this.userUid).get()
    this.user = user.data()
  },
  methods:{
    goToCreateGroupPage(){
      this.$router.push("/create-group")
    },
    goToRegisterPage(){
      this.$router.push("/register")
    },
     goToLoginPage(){
      this.$router.push("/login")
    },
    async goToSettings(){
      const user = firebase.auth().currentUser;
      if(user !== null){
      this.$router.push({ name: 'Settings', params: { id: user.uid} })
      }
    },
    async goToWallet(){
      const user = firebase.auth().currentUser;
      if(user !== null){
      this.$router.push({ name: 'Wallet', params: { id: user.uid} })
      }
    },
    goToQuestionsPage() {
      this.$router.push("/faq");
    },
     async goToMyGroupsPage() {
      const user = firebase.auth().currentUser;
      if(user !== null){
      this.$router.push({ name: 'My_groups', params: { id: user.uid} })
      }
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
     async closeSession() {
      try {
        await Auth.signOut();
        
        this.$router.push("/").catch(()=>{});
        
      } catch (e) {
        console.error(e.message);
      }
    },
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
      title: 'Eliminar cuenta',
      message: '¿Estás seguro de que quieres <b>eliminar</b> tu cuenta? Esta acción no es reversible.',
      confirmText: 'Eliminar cuenta',
      type: 'is-danger',
      hasIcon: true,
      onConfirm: () => {
      const user = firebase.auth().currentUser;
      user.delete().then(() => {
       this.$router.push("/")
      }).catch((error) => {
      console.log(error)
      }); 
      }
    })
    }
  }
};

</script>

<style scoped>

h1{
  text-align: center;
  margin-bottom: 15px;
}

td{
  padding: 20px;
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