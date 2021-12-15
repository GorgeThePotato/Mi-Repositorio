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
      <template #end>
        <b-navbar-item @click.prevent="goToHomePage">
          Volver al sitio web
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="box">
        <section  style="padding: 10px">
          <p class="content is-large"><h1 class="content is-large"><b>¿Cómo podemos ayudarte?</b></h1>
          <b-field>
            <b-autocomplete
              rounded
              icon="magnify"
              clearable
              placeholder="Busca en nuestro centro de ayuda"
              >
              <template #empty>No results found</template>
            </b-autocomplete>
          </b-field>
        </section>
        <section style="margin-top 15px, margin-bottom: 15px">
          <div class="columns is full">
            <div class="column is-one-fifth">
              <b-button  size="is-small">¿Cómo funciona?</b-button>
            </div>
            <div class="column is-one-fifth">
              <b-button size="is-small">¿Qué formas de pago hay?</b-button>
             </div>
            <div class="column is-one-fifth">
              <b-button  size="is-small">¿Cómo se divide la suscripción?</b-button>
           </div>
          </div>
        </section>
           
         <section style="margin-top 15px, margin-bottom: 15px">
          <div class="columns is full">
           
              <div class="column is-one-fifth">
                <b-button size="is-small">¿En cuantos dispositivos puedo ver la mi  suscripción?</b-button>
                </div>
                <div class="column is-one-fifth">
                  <b-button  size="is-small">¿Compartir cuentas es legal?</b-button>
                </div>
                <div class="column is-one-fifth">
                  <b-button size="is-small">¿Qué pasa si comparto los datos?</b-button>
              </div>
           
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Questions',
  components: {
  },
  methods:{
    goToHomePage(){
      this.$router.push("/")
    }
  }
  
}
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
  justify-content: space-between;
}



</style>