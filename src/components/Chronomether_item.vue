
<template>
  <div class="container border-global  d-flex flex-column align-items-center">
    <img src="../assets/chrono.png" alt="imagen" class="img-fluid mt-3" style="width: 50px; height: 50px;">
    <div class="time-container mt-3">
  <h1 class="text-center time-string">{{ timeString }}</h1>
</div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button class="btn btn-success mt-3 mb-3" @click="start" :disabled="isRunning">
          Iniciar
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-danger mt-3 mb-3" @click="stop" :disabled="!isRunning">
          Detener
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-secondary mt-3 mb-3" @click="reset" :disabled="!isRunning">
          Reiniciar
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-blue mt-3 mb-3" @click="update" :disabled="!isRunning">
          Añadir
        </button>
      </div>
    </div>
    <table class="table table-bordered border-table">
      <tr>
        <td class="td tableFont1">50 M</td>
        <td class="td tableFont2">{{ tiempo50M }}</td>
      </tr>
      <tr>
        <td class="td tableFont1">100 M</td>
        <td class="td tableFont2">{{ tiempo100M }}</td>
      </tr>
      <tr>
        <td class="td tableFont1">TOTAL</td>
        <td class="td tableFont2">{{ tiempoTotal }}</td>
      </tr>
    </table>
    <div id="liveAlertPlaceholder"></div>
    <button class="btn btn-blue mb-3" @click="() => { showAlert(); reset(); }">Enviar Resultados</button>
    <div id="messageContainer"></div>

  </div>
</template>

<script>
export default {
  name: 'Chronometer_item',
  data() {
    return {
      startTime: null,
      timeElapsed: 0,
      isRunning: false,
      intervalId: null,
      tiempo50M: '',
      tiempo100M: '',
      tiempoTotal: '',
      reiniciarVeces: 0,
    };
  },
  computed: {
    timeString() {
      let time = new Date(this.timeElapsed);
      let minutes = time.getUTCMinutes().toString().padStart(2, '0');
      let seconds = time.getUTCSeconds().toString().padStart(2, '0');
      let milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0');
      return `${minutes}:${seconds}:${milliseconds}`;
    },
    timeFinal() {
      let time = new Date(this.tiempoTotal2);
      let minutes = time.getUTCMinutes().toString().padStart(2, '0');
      let seconds = time.getUTCSeconds().toString().padStart(2, '0');
      let milliseconds = time.getUTCMilliseconds().toString().padStart(3, '0');
      return `${minutes}:${seconds}:${milliseconds}`;
    }
  },
  methods: {
    start() {
      this.isRunning = true;
      this.startTime = Date.now() - this.timeElapsed;
      this.intervalId = setInterval(() => {
        this.timeElapsed = Date.now() - this.startTime;
      }, 1);
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.intervalId);
    },
    reset() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.timeElapsed = 0;
      this.tiempo50M = '';
      this.tiempo100M = '';
      this.tiempoTotal = '';
      this.tiempo50M2 = 0;
      this.tiempo100M2 = 0;
      this.tiempoTotal2 = 0;
    },
    update(){
      if (this.reiniciarVeces == 0) {
        this.tiempo50M = this.timeString;
        this.tiempo50M2 = this.timeElapsed;
      } else if (this.reiniciarVeces == 1) {
        this.tiempo100M = this.timeString;
        this.tiempo100M2 = this.timeElapsed;
        this.tiempoTotal2 = this.tiempo100M2 + this.tiempo50M2;
        this.tiempoTotal= this.timeFinal
        clearInterval(this.intervalId);
        this.reiniciarVeces=0
      }
      this.reiniciarVeces++;
    },
    showAlert() {
      if(this.tiempoTotal2 ==0 ){
        const errorMessage = 
        `<div class="alert alert-danger my-3" role="alert">
          <strong>¡Error!</strong><p>Los datos introducidos no son </br> correctos.</p> 
        </div>`;
      document.getElementById('messageContainer').innerHTML = errorMessage;
      }
      else{
        const successMessage = 
        `<div class="alert alert-success my-3" role="alert">
          <strong>¡Éxito!</strong><p>Los datos se han procesado correctamente.</p> 
        </div>`;
        document.getElementById('messageContainer').innerHTML = successMessage;
      }
    }
  },
};
</script>

<style scoped>
.time-container {
  background-color: rgb(115, 202, 226);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.time-string {
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

@media (max-width: 576px) {
  /* Estilos para dispositivos pequeños (hasta 576px de ancho) */
  .time-container {
    flex-direction: column;
    padding: 10px 0;
  }
  
  .time-string {
    font-size: 2rem;
  }
}

.border-table{
  border-color: rgb(115, 202, 226);
  border-width: 3px;
  border-style: solid;
}
.tableFont1 {
  color: white;
  background-color: blue;
  padding: 7px;
  font-size: 16px;
  font-weight: bold;
}
.tableFont2 {
  color: white;
  background-color: rgb(89, 89, 211);
  padding: 7px;
  font-size: 16px;
  font-weight: bold;
}
</style>