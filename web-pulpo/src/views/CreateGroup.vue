<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item>
          
            <img
                    src="https://cdn.pulpo.me/logo_apqcsv.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
              
            </b-navbar-item>
        </template>

        <template #end>
           <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARLSURBVHgBzZpBTxNBFMffmxaCWk3hoDQeZJWD8aD1akysJhqO+AnUT6B+Ass3kE8gfgL1RjSBmhivFg96UbZgDOABiK2RwHae87YslO12d2Z3qfu7LDuZmf2/3Ted996AkAK2TUU50pwGwjIKuABAZUAsAkHxsBc1ALBBEpYAqS5gqGaVTjQgIQgxYdFwsvWYCCrqtgLxqBPRbBJjjA04EA7w5OgbTgYizoHMzZgaYmSAvdF8lrZwP4hQtc6dntHur9PJXvs7Icl5rfz7GgwEbCDlbut8DRHVYeVX6wEJ59PgxDM0QeB8+vbz93RUz1AD2GXakuaO02X6glAUOXzFGsK79cH1d4IqZICwdRFoAH86th4yRE7gwwtnCy/97T0G8IJln/8vbhMGwTZC/rp/YfesAcL2YubEM2pNEDo9XnHEgM6CoQnILuXva81qd8OBC7mug44NWYddacexLGt0m2/zXnsb9qpCc2Pe3d2DL1++wubmFoyPn4PJyYswPDwMJnhztFp/1Bxn1RyX9AYqV5Ij+Sfqr2rnFszf/sLCe1hd/XFwPzY2ClNTd7WNYPHz82/dF+DBL4Ln0KLrK7hrQMJeBTThh3aL99rm598pYbuR44PEM+vrGz1tfTn8Cp1FjEI8hoToGNFPfBzU5naLr4LdB0glIJqwu/DnDiLMiCjxhcIpd24DKra9VRQm7uNx8+YN94FBBBmhI35q6h6YIkeGpgWngWCI90AdI3TF95srFOU5aK83FylmSsg/gSyOr0F4LnEs4hlJb3B5vWUn2X2jjOhHYvEu2BBJQ4c4QtIRD+xCxciMLG1BqYlnOOmBlGBBd+5UIvtxn1TE78PhzzakAP/afPjwMbIf99HZsXXhn9HEBpjssCZhRzRqEUsplyABccKDFI1oCFRWQEx0NimTHdsUkrQkuNAKMdDdYXV37FhwkVjstF+DISbhgUnYYYqAdk1wUqCymprJwIWFmlF4oGMEJ0lGINat0mijk9AQaI/mh3HyEUSY0CgjjBIaYP+Xs3x1DRA7zvOk+4HODhvVx8SN2H06VwW7kTo5mdUZyBGmX0AaoQTf90uU/PBZAruP+7fXyNkNnczbOkUtjjzr9c/q2lIGjUG5fFUl9ENggn+OK1cua4cYSCqh9xvAcNFI5ZrPIMOogvPMpdLpqnffUwha3mhyXdQ4SxsM2Lg4XrC6W3qiUZTO/bQCvFRRmpD2bvubewxg30JJTyFjSIceeX7fTWA+YJXOzLGvQUZgLZPnzwRGDKHF0Cwsav+i9RNZzbXVaQ3l8cXAzwzY5yU+tUqFufBuGthrW6r4O7Q4qLMD/ncEgc50kM/7MTroPnaXUm+dI4Iwl+kdYoj7NSBXVfv5A0iLfeEck3kHF/pDY8KGSMhV3Mq2QXHY9/gaEb2PI/xgBkgBzxiuswqB11SpcuLIeuGNURUPVBBWl2254mZSKpGKK7qbf5RKiu9whHmGAAAAAElFTkSuQmCC"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
      </b-navbar>
      <div class="collumns">
        <div class="column is-full has-text-centered" >
          
            <img src="https://pulpo.es/static/media/groupBenefits.70c61d9f.png" alt="">
          
          
            <h2 class="is-size-4"><b>Crea un grupo y recibe dinero de forma automática cada mes</b></h2>
          
          
            <h2 class="is-size-6">Crea un grupo como administrador y cobra las cuotas de todos los miembros en tu cuenta de forma automática cada mes</h2>
          
          <div class="buttons">
            <b-button type="is-success" @click="goToSelectPlatform">Siguiente</b-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CreateGroup',
  components: {
  },
  methods:{
    goToSelectPlatform(){
      this.$router.push("/select-platform")
    }
  }
}
</script>

<style scoped>

.navbar-item img {
    max-height: 4.75rem;
}

.buttons{
  justify-content: center;
  padding: 15px;
}

h2{
  padding: 15px;
}

</style>