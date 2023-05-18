<template>
<div class="vw-100 h-100  mt-3 marginC">
      <div class="row">
        <div class="col-sm-7">
          <h5 class="infoContainer titulos">Nadador: Juan Muñoz</h5>
        </div>
        <div class="col-sm-5">
          <h5 class="infoContainer titulos">Club natación sant andreu</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h5 class="infoContainer titulos">Número de serie: 2.5</h5>
        </div>
        <div class="col-sm-3">
          <h5 class="infoContainer titulos">Carril: 5</h5>
        </div>
        <div class="col-sm-5">
          <h5 class="infoContainer titulos">Prueba: 100m - Mariposa - Femenino</h5>
        </div>
      </div>
</div>
    <div class="vw-100 h-100 container-center  marginC">
      <div class="col-6 mt-4">
        <Chronomether_item/>
      </div>
    </div>
</template>



  
  <script>
  import Chronomether_item from './Chronomether_item.vue';
  export default {
    name: 'ChronoTool',
    components:{
      Chronomether_item
    }
  }
  </script>
  
  <style scoped>
  .vw-100 {
  width: 100vw;
  }

.h-100 {
  height: 100vh;
    }

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 200px) {
 
  .marginC {
    padding-right: 20px;
    padding-left: 74px;
    padding-bottom: 16px;
  }
  
}

@media (min-width: 900px) {
 

  .marginC {
    padding-left: 100px;
    padding-right: 40px;
    padding-bottom: 16px;
  }
  
}

  
</style>