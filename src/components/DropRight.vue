<template>
  <div>
    <button class="btn globalColor position-fixed start-0 translate-middle-y h-50 top-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions h">
      <img src="../assets/dropLeft.png" alt="imagen" class="img-fluid " style="width: 30px; height: 30px;">
    </button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header titleBlue ">
        <h5 class="offcanvas-title text-center titulo" id="offcanvasWithBothOptionsLabel "><b>Funcionalidades</b></h5>
            <button type="button" class="btn-close btn-close-white" aria-label="Close" data-bs-dismiss="offcanvas"></button>

        <!-- <button type="button" class="btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
      </div>
      <div class="offcanvas-body">
        <div class="container-fluid">
          <div class="row"  v-if="$store.state.rol=='cronometrador'">
            <div class="col">
              <button type="button" @click="goTo('ChronoTool')" class=" btn btn-blue  btn-lg btn-block w-100 mt-3" data-bs-dismiss="offcanvas">Cronómetro</button>
            </div>
          </div>
           <div class="row"  v-if="$store.state.rol=='juez de recorrido'">
            <div class="col">
              <button type="button" @click="goTo('JudgeTool')" class=" btn btn-blue  btn-lg btn-block w-100 mt-3" data-bs-dismiss="offcanvas">Orden de llegada</button>
            </div>
          </div>
          <div class="row"  v-if="$store.state.rol=='juez de recorrido'">
            <div class="col">
              <button type="button"  @click="goTo('Descalificaciones')" class=" btn btn-blue  btn-lg btn-block w-100 mt-3" data-bs-dismiss="offcanvas">Descalificaciones</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button"  @click="openModal" class="btn btn-blue btn-lg btn-block w-100 mt-3">Series</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button"  @click="openModal" class="btn btn-blue btn-lg btn-block w-100 mt-3">Información competición</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <!-- <div class="d-flex flex-column justify-content-center align-items-center" style="min-height: calc(100vh - 200px);"> -->
      <router-view />
    <!-- </div> -->
    <Modal :show="showModal" @close="closeModal">
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: "CompetitionMainPage",
  data() {
    return {
      showModal: false
    };
  },
   components:{
    Modal
  },
  methods: {
    goTo(page) {
      console.log(page);
      this.$router.push("/" + page);
    },
    closeOffCanvas() {
      const offcanvasElement = document.querySelector('.offcanvas');
      const offcanvas = offcanvas.getInstance(offcanvasElement);
      offcanvas.hide();
    },
     openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
};
</script>

<style scoped>
</style>