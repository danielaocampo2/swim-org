<template>
  <nav class="navbar navbar-expand-xl navbar-ligth fondoImg">
  <div class="container-fluid">
    
    <a class="navbar-brand logo" @click="goTo" type="button" ><img id="logo"  style="width: 100%; height: auto;" src="../assets/logo2.png"></a>
   
    <li class="nav-item dropdown d-flex perfil me-2 background">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img
              src="../assets/perfil.png"
              alt="username-icon"
              style="width: 100%; height: auto;"
            />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li v-if="!$store.state.rol"><a href="#" class="dropdown-item " >Iniciar sesión</a></li>
            <li ><a  v-if="$store.state.rol" @click="logout" class="dropdown-item ">Logout <img src="../assets/logout.png" alt="Logout Icon" width="16" height="16"></a></li>
             <li><a  @click="openModal"  class="dropdown-item" >Mi perfil</a></li>
            <li><a @click="openModal" class="dropdown-item" >Configuración</a></li>
            <li><a  @click="openModal"  class="dropdown-item" >Preguntas Frecuentes</a></li>
          </ul>
          <Modal :show="showModal" @close="closeModal">
        </Modal>
    </li>
     
        
     
 
  </div>
</nav>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'AppNavbar',
   data() {
    return {
      showModal: false
    };
  },
   components:{
    Modal
  },
  methods: {
    goTo(){
      if(this.$store.state.rol){
        this.$router.push('/MainPage');
      }else{
        this.$router.push('/');
      }
      // console.log(this.$store.state.rol)
    },
     openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    logout(){
      this.$store.commit('logout')
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Estilos para pantallas más grandes que 768px */
  @media screen and (min-width: 768px) {
    .logo {
      width: 100%;
      max-width: 120px; /* Tamaño máximo del logo */
      height: auto;
      
    }
    .perfil{
      width: 100%;
      max-width: 80px; /* Tamaño máximo del logo */
      height: auto;
     
    }
    .fondoImg {
      background-image: url("../assets/swim.jpg");
      background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el elemento */
      background-position: center; /* Centra la imagen vertical y horizontalmente */
      background-repeat: no-repeat; /* Evita que la imagen se repita */
  }

  }

  /* Estilos para pantallas más pequeñas que 768px */
  @media screen and (max-width: 767px) {
    .logo {
      width: 100%;
      max-width: 70px; /* Tamaño máximo del logo */
      height: auto;
    }
    .perfil{
      width: 100%;
      max-width: 40px; /* Tamaño máximo del logo */
      height: auto;
    }
    .fondoImg {
      background-image: url("../assets/fondo4.jpg");
      background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el elemento */
      background-position: center; /* Centra la imagen vertical y horizontalmente */
      background-repeat: no-repeat; /* Evita que la imagen se repita */
    }
  }

li a{
  color:rgb(2, 91, 115);
  font-weight:bold;
}

</style>
