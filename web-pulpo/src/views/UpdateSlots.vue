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

      <div class="columns" v-if="currentPlatform">
        <div class="column is-full has-text-centered" >
            <h2 class="is-size-3" style="padding: 10px"><b>¿Con cuánta gente quieres compartir tu cuenta de {{ currentPlatform.title }}?</b></h2>
        

          <template>
            <section>
              <b-field style="padding: 10px">
                <b-numberinput controls-rounded size="is-large" v-model="qtyPerson" :max="currentPlatform.maxppl" min="1">
                </b-numberinput>
              </b-field>
            </section>
          </template>
        

          <div class="container" style="padding: 10px">
            <div>
              <h2 class="is-size-5"><b>Cobrarás {{currentPlatform.minprice * qtyPerson}}€/mes</b></h2>
            </div>
          </div>

          <div class="buttons">
            <b-button type="is-success" @click.prevent="createGroup">Siguiente</b-button>
          </div>

          <div class="content" style="padding: 10px">
            <div class="box">
              <h3>¿Con cuánta gente puedes compartir tu cuenta?</h3>
              <div>
              <p>Legalmente solo puedes compartir hasta un número máximo indicado arriba, por lo que si ya tienes gente usando el servicio no se puede exceder el límite.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {PlatformRef, GroupsRef, UsersRef} from '@/modules/firebase'
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: 'UpdateSlots',
  data(){
    return{
      platforms: [],
      qtyPerson: 1,
      group: null,
      groupId: null
    }
  },
  computed: {
    currentPlatform(){
      return this.platforms[0]
    },
  },
  firestore() {
    return{
      platforms: PlatformRef.where("slug", "==", this.$route.params.slug),
      users: UsersRef,
      groups: GroupsRef
    }
  },
  methods:{
    async createGroup(){
      const user = firebase.auth().currentUser;
      if(user !== null){
        const email = user.email;
        const uid = user.uid;
        const totalPrice = (this.currentPlatform.minprice * this.qtyPerson)
        const service = this.currentPlatform.title
        const freeSpace = (this.currentPlatform.maxppl - this.qtyPerson)

        const groups = {
        platform: service,
        totalPpl: this.qtyPerson,
        totalPrice: totalPrice,
        space: freeSpace,
        adminInfo: {
          id: uid,
          email: email
        }
      };
      const result = await GroupsRef.add(groups)
   
      this.$router.push({ name: 'Update_price', params: { id: result.id} })
    }
    }
  },
}
</script>

<style scoped>

.buttons{
  justify-content: center;
  padding: 15px;
}

</style>