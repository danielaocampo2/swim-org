<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">

    <Navbar />
    <div class="d-flex flex-column justify-content-center align-items-center" style="min-height: calc(100vh - 200px);">
      <router-view />
    </div>
    <Footer />
 
</template>

<script>
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    
   
    Footer
    
  },
  // verifica si ha iniciado session
  mounted(){
    this.$store.commit('initialiseStore')
  }
}
</script>

<style>
#app {
  font-family:  "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh; /* establece la altura mínima del contenedor a 100% de la altura de la ventana */
  display: flex; /* establece el contenedor como un flex container */
  flex-direction: column; /* establece la dirección de los elementos como columnas */

}

.app-container {
  flex: 1; /* hace que el contenedor se expanda para llenar todo el espacio disponible */
  display: flex; /* establece el contenedor como un flex container */
  flex-direction: column; /* establece la dirección de los elementos como columnas */
}

Footer {
  margin-top: auto; /* empuja el componente Footer al final del contenedor */
}

.DropRight{
  left: auto; /* empuja el componente Footer al final del contenedor */
}


/* estilos definidos para los diferentes fondos */
.globalColor{
  background:  rgb(6 156 198);
}
.titulos{
  font-family:  "Abril FatFace";
  font-weight: bold;
  font-size: 22px;
}
.general{
  font-family:"Roboto";
}
.back1{
  background: rgb(159, 228, 255);
}

.back2{
  background: rgb(73, 232, 238);
}


/* estilos definidos para los diferentes titulos */

.titleBlue {
  font-family:  "Abril FatFace";
  color: white;
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
}
.fontGlobal{
  color: white;
  background-color: rgb(6 156 198);
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
}

/* estilos definidos para los botones */

.btn-blue {
  background-color:  rgb(6 156 198);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.border-global {
  border-color: rgb(6 156 198);
  border-width: 6px;
  border-style: solid;
}

.infoContainer{
  color: #215196;
  background-color: rgb(6 156 198 / 37%);
  padding: 4px;
}

</style>
