<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/select-platform' }">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARtSURBVHgBzZrRbhtFFIbPGW+sFNzK6QWJhWjjwgXkAlyBcoEq4UYCVUKqwhMUnqDtE+C8AXkCwhM0qoRUcdGkUgRSQKrLRcWF23UDKAkXTYRTNYrXczpnYrv2etfrnZ11/Um21zu71vw75985c9YIFnBdysvpxjIQllDARQAqAWIeCPKvj6I6ANZJwiNAqgqY2iwWztTBAgiGcMfhraObRFBWX8tgRpWIVpMKii2i23mAW/1XOhmIuAYys2IiJpYId7/xve3O+0GESnH27Eqsc0Y5yN19OS/JW1fx/gmMBawjZa6OOioi6oBn/x3dIOE9HJ8AhuYJvIe1f/9fHuXooSI4fFqS1tIMn1AQ8iKDd7gP0YeGoOOfoAITQJRPAkXwMPJVgAkiI/Dbi+/kfgpqGxDBJmYPvJEQGgbBIYJzOcjsA54gbG2kKeDkpAk7O3/D0dGLWOexRwi9O8FNPaTtg1rtKWxv/66FMNeufQlzc7NxfgJU/1beL5yt9O7ritBhhJ4LKVGt/qlfvVy48B4sLX0BseCwOvaKxeLMYWdXN5xa0KxACvBV39r6dUDAadsJxEaFlZx2bvXvgvRGgeP+/v1NeP78YKAtl3tbhdNX+jM2vtHQIyGhWQbLcMfv3fvFvgDGNxqO3ifETXaMLfwG7oV9cOXK55DNTkES1ATYNRPaDqUgA3colT7WL1vgS2+GQ0rYCqVhBmYWFz+zKoCR01M6QXR4SWm+vjslysBLS2U4f34GrENqGaxwhEqxk7iBO84CgmbgxAaOAFXKzp8OAc7zPcuEcRh4KELoNY4DbTVx4fyHPRCEbQOHQqRzvMiVXRg7O/8E7l9Y+HA8AhiEZCLC4twoQ02IUGoOwQC+4hz3fljA3bs/w+PHf8G4EOoWayQim83qDDQodDix297+I3TOsAfW+V1IKR9BAljE4uKngW0sgsUYZaujUec3gW01SVhY+AiuX/860CccVhxeafiEJOkBEFzcBQvwjBw2sbEAzmitC2n3HV33IE9nnAOwBIfO1tZv+i7lh33E4cc3BRsgqTVFYaZ+uijaa2yQeWU7kNSzWcTqpdncZd48XRQRPADLpG14knK1s61FiGPvB9P5YhhRhk8ylwhobb7eVvDCQj3BWYUUGGb4vb19MIGfZbAXOt+7aUdao8GwAB4R/wwft+bURTb76rJ9y6Enu42KWrtGVqGTUKs90ckjj5CJuYcWzzo83W9wHbYEEwnWL83liv69A1ksSu+btMIqEapPSM2rQU0DIvTkIek2TBjSo+96zdxL4HqiWDi3xrEHEwL35YN3z62HtQ+tc4zD6FEEGdlPZLHGVU+NyMEfx/7QhT0g8XaxkFuLPnQE3N0DVSWc2jAtKsSF/zoh0FsO84CfWGWz1MNLXX3OHKLCZ/C0mOhRgUxFzf03wBbtznPW0PvwZPTTDWExEjLldkXdcHLETSJ6YNr57q+ABTqCuK4rBHJZdL7PPzx5qoKEStyqsiWf6b8KHbfWk3S8l1dJwSkd+RUbIwAAAABJRU5ErkJggg=="
            alt="Lightweight UI components for Vue.js based on Bulma"
                >
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="columns" style="justify-content: center">
        <div class="column is-half" >
            <h1 class="is-size-3" style="padding: 10px"><b>¿Con cuánta gente quieres compartir tu cuenta de?</b></h1>
        
          <div class="content" style="padding: 10px">
              <h3>Las credenciales serán verificadas y encriptadas de forma segura. Solamente los miembros de tu grupo tendrán acceso a ellas.</h3>
          </div>
          <section>
            <b-field label="Usuario de">
              <b-input v-model="credentialsData.username">
              </b-input>
            </b-field>

            <b-field label="Contraseña de">
              <b-input type="password"  id="password" required v-model="credentialsData.password">
              </b-input>
            </b-field>

            <b-field label="Repetir Contraseña">
              <b-input type="password"  id="confirm_password" required v-model="credentialsData.confirm_password">
              </b-input>
            </b-field>

            <b-field>
              <b-checkbox
                type="is-success" v-model="credentialsData.isChecked">
                Confirmo que entiendo que Pulpo no está asociado o afiliado a  y que he leído, entendido y acepto cumplir con los términos y condiciones.
              </b-checkbox>
            </b-field>

            <div v-if="formError !== ''">
              <b-notification
                type="is-danger"
                has-icon
                aria-close-label="Close notification"
                role="alert">
                {{ formError }}
              </b-notification>
            </div>

            <div class="buttons">
              <b-button type="is-primary" native-type="submit" expanded @click.prevent="updateCredentials">Crear grupo</b-button>
            </div>

          </section>
        </div>
      </div>
  </div>
</template>

<script>

import {ServiceRef} from '@/modules/firebase'
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: 'UpdateCredentials',
  data(){
    return{
      formError:"",
      credentialsData:{
      username:"",
      password: "",
      confirm_password:"",
      isChecked: false
      }
    }
  },
  firestore(){
    return{
      service: ServiceRef
    }
  },
  methods:{
    async updateCredentials(){
      const user = firebase.auth().currentUser;
      if(user !== null){
      const uid = user.uid;
      const email = user.email;

      this.formError = "";
      if(this.credentialsData.password !== this.credentialsData.confirm_password){
        this.formError = "Las contraseñas no coinciden";
        return
      }

      if(!this.credentialsData.isChecked){
        this.formError = "Debes aceptar los términos y condiciones"
        return
      }

      if(this.credentialsData.password == this.credentialsData.confirm_password && this.credentialsData.isChecked){
      const accountInfo = {
        username: this.credentialsData.username,
        password: this.credentialsData.password,
        created_at: new Date(),
        userId: uid,
        userEmail: email
      };
      const result = await ServiceRef.add(accountInfo)

      this.$router.push('/my-groups')
      }
    }
    }
  }
}
</script>

<style scoped>
h1, h3{
  text-align: center;
}

h3{
  margin-top: 10px;
}
</style>
