import { createStore } from 'vuex' 
//utiliza para almacenar y gestionar datos que son compartidos por múltiples componentes de la aplicación.
import router from '../router'; // Importa el enrutador de tu archivo de enrutamiento

export default createStore({
  state: {
    rol:""
  },
  getters: {
  },
  mutations: {
    login (state,rol) {
      state.rol = rol;
      localStorage.setItem('rol', rol);
      router.push("/MainPage");
    },
    logout(state){
      state.rol ="";
      localStorage.removeItem('rol');
      router.push("/");
    },
    initialiseStore(state) {
      if(localStorage.getItem('rol')){
        state.rol = localStorage.getItem('rol');
        alert('estas logeado');
        router.push("/MainPage");
       }
    }
  },
  actions: {
  },                    
  modules: {
  }
})
