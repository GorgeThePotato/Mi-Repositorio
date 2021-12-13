<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/create-group' }">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARtSURBVHgBzZrRbhtFFIbPGW+sFNzK6QWJhWjjwgXkAlyBcoEq4UYCVUKqwhMUnqDtE+C8AXkCwhM0qoRUcdGkUgRSQKrLRcWF23UDKAkXTYRTNYrXczpnYrv2etfrnZ11/Um21zu71vw75985c9YIFnBdysvpxjIQllDARQAqAWIeCPKvj6I6ANZJwiNAqgqY2iwWztTBAgiGcMfhraObRFBWX8tgRpWIVpMKii2i23mAW/1XOhmIuAYys2IiJpYId7/xve3O+0GESnH27Eqsc0Y5yN19OS/JW1fx/gmMBawjZa6OOioi6oBn/x3dIOE9HJ8AhuYJvIe1f/9fHuXooSI4fFqS1tIMn1AQ8iKDd7gP0YeGoOOfoAITQJRPAkXwMPJVgAkiI/Dbi+/kfgpqGxDBJmYPvJEQGgbBIYJzOcjsA54gbG2kKeDkpAk7O3/D0dGLWOexRwi9O8FNPaTtg1rtKWxv/66FMNeufQlzc7NxfgJU/1beL5yt9O7ritBhhJ4LKVGt/qlfvVy48B4sLX0BseCwOvaKxeLMYWdXN5xa0KxACvBV39r6dUDAadsJxEaFlZx2bvXvgvRGgeP+/v1NeP78YKAtl3tbhdNX+jM2vtHQIyGhWQbLcMfv3fvFvgDGNxqO3ifETXaMLfwG7oV9cOXK55DNTkES1ATYNRPaDqUgA3colT7WL1vgS2+GQ0rYCqVhBmYWFz+zKoCR01M6QXR4SWm+vjslysBLS2U4f34GrENqGaxwhEqxk7iBO84CgmbgxAaOAFXKzp8OAc7zPcuEcRh4KELoNY4DbTVx4fyHPRCEbQOHQqRzvMiVXRg7O/8E7l9Y+HA8AhiEZCLC4twoQ02IUGoOwQC+4hz3fljA3bs/w+PHf8G4EOoWayQim83qDDQodDix297+I3TOsAfW+V1IKR9BAljE4uKngW0sgsUYZaujUec3gW01SVhY+AiuX/860CccVhxeafiEJOkBEFzcBQvwjBw2sbEAzmitC2n3HV33IE9nnAOwBIfO1tZv+i7lh33E4cc3BRsgqTVFYaZ+uijaa2yQeWU7kNSzWcTqpdncZd48XRQRPADLpG14knK1s61FiGPvB9P5YhhRhk8ylwhobb7eVvDCQj3BWYUUGGb4vb19MIGfZbAXOt+7aUdao8GwAB4R/wwft+bURTb76rJ9y6Enu42KWrtGVqGTUKs90ckjj5CJuYcWzzo83W9wHbYEEwnWL83liv69A1ksSu+btMIqEapPSM2rQU0DIvTkIek2TBjSo+96zdxL4HqiWDi3xrEHEwL35YN3z62HtQ+tc4zD6FEEGdlPZLHGVU+NyMEfx/7QhT0g8XaxkFuLPnQE3N0DVSWc2jAtKsSF/zoh0FsO84CfWGWz1MNLXX3OHKLCZ/C0mOhRgUxFzf03wBbtznPW0PvwZPTTDWExEjLldkXdcHLETSJ6YNr57q+ABTqCuK4rBHJZdL7PPzx5qoKEStyqsiWf6b8KHbfWk3S8l1dJwSkd+RUbIwAAAABJRU5ErkJggg=="
            alt="Lightweight UI components for Vue.js based on Bulma"
                >
        </b-navbar-item>
      </template>
    </b-navbar>
       <div class="collumns">
        <div class="column is-full has-text-centered" >
            <h2 class="is-size-3"><b>¿Qué plataforma quieres compartir?</b></h2>
            <h2 class="is-size-6">Crea un grupo compartido y recibe dinero de forma automática cada mes.</h2>
          
          <div class="container">
            <div>
             <h2 class="is-size-5"><b>Suscripciones populares</b></h2>
            </div>
          </div>
          <div class="columns is-full">
            <div class="column is-half">
              <div class="buttons">
                <b-button rounded size="is-large" v-for="platforms in platforms" :key="platforms.id"><router-link :to="{name: 'Update_slots', params: {slug: platforms.slug}}"><span style="color: black"><b>{{platforms.title}}</b></span></router-link></b-button>
              </div>
            </div>
          </div>

          <div class="container">
            <div>
             <h2 class="is-size-5"><b>Categorías</b></h2>
            </div>
          </div>
          <div class="columns is-full">
            <div class="column is-one-fifth">
              <b-button rounded size="is-large">Streaming</b-button>
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
         
        </div>
      </div>
  </div>
</template>

<script>

import {PlatformRef} from '@/modules/firebase'

export default {
  name: 'SelectPlatform',
  data(){
    return {
      platforms: [],
    }
  },
  firestore() {
    return{
    platforms: PlatformRef
    }
  },
}
</script>

<style scoped>

.container{
  display: flex;
  margin-top: 30px
}

.columns{
  padding: 15px
}

.column.is-half{
  width: 100%
}

.buttons {
  justify-content: space-between;
}
</style>