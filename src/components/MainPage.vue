<template>
 <div class="container d-flex flex-column justify-content-center align-items-center">
    <div class="p-3 w-100 titleBlue mt-3">COMPETICIONES</div>
      <div class="table-container mt-3">
        <table class="table table-bordered border-table" >
          <tr>
            <td class="td tableFont2 border">
              <div class="div globalColor">
                <span class="title" style="margin-right: 10px;">{{ "NOMBRE CLUB" }}</span>
                <button id="iconButton1" style="border-color: white;" @click="toggleIconName">
                  <i :class="iconClass1" style="font-size: 12px;"></i>
                </button>
              </div>
            </td>
            <td class="td tableFont2 border">
              <div class="div globalColor">
                <span class="title" style="margin-right: 10px;">{{ "FECHA" }}</span>
                <button id="iconButton2" style="border-color: white;" @click="toggleIconDate">
                  <i :class="iconClass2" style="font-size: 12px;"></i>
                </button>
              </div>
            </td>
            <td class="td tableFont2 border">
              <div class="div globalColor">
                <span class="title" style="margin-right: 10px;">{{ "UBICACIÓN" }}</span>
                <button id="iconButton3" style="border-color: white;" @click="toggleIconUbi">
                  <i :class="iconClass3" style="font-size: 12px;"></i>
                </button>
              </div>
            </td>
            <td class="td tableFont2 border">
              <div class="div globalColor">
                <span class="title" style="margin-right: 10px;">{{ "ACCEDER" }}</span>
              </div>
            </td>
          </tr>
          <tr class="blink">
            <td class="td  border">{{ "Sant Andreu" }}</td>
            <td class="td  border">{{ "25-05-2023" }}</td>
            <td class="td  border">{{ "Badalona" }}</td>
            <td class="td  border">
              <button class="btn btn-blue" style="visibility: visible; opacity: 1;" v-if="$store.state.rol=='cronometrador'"  @click="goTo('ChronoTool')">
               ACTUAL
              </button>
              <button class="btn btn-blue" style="visibility: visible; opacity: 1;" v-if="$store.state.rol=='juez de recorrido'"  @click="goTo('JudgeTool')">
               ACTUAL
              </button>
            </td>
      </tr>
          <tr v-for="(competicion, index) in competiciones" :key="competicion.id" :class="index % 2 === 0 ? 'tableFont3' : 'tableFont1'">
        <td class="td border">{{ competicion[0] }}</td>
        <td class="td border">{{ competicion[1] }}</td>
        <td class="td border">{{ competicion[2] }}</td>
        <td class="td border">
          <button class="btn btn-blue" style="visibility: visible; opacity: 1;" @click="openModal">
            VER MÁS
          </button>
        </td>
      </tr>
        </table>
      </div>
      <Modal :show="showModal" @close="closeModal">
    </Modal>
  </div>
  
</template>

<script>
import Modal from './Modal.vue'

export default {
  data() {
    return {
      competicionesOriginal: [],
      competiciones: [],
      competiciones2: [],
      isUp1: false,
      isUp2: false,
      isUp3: false,
      showModal: false
    };
  },
   components:{
    Modal
  },
  created() {
    this.generarCompeticiones();
  },
  computed:{
    iconClass1() {
      return this.isUp1 ? "bi bi-caret-up" : "bi bi-caret-down";
    },
    iconClass2() {
      return this.isUp2 ? "bi bi-caret-up" : "bi bi-caret-down";
    },
    iconClass3() {
      return this.isUp3 ? "bi bi-caret-up" : "bi bi-caret-down";
    },
  },
  methods: {
    goTo(page) {
      console.log(page)
      this.$router.push('/' + page);
    },
    generarCompeticiones() {
      const clubs = ["Club Sant Andreu", "Club Badalona", "Club Horta", "Club Cornella", "Club Hospitalet"];
      const fechas = generarFechas(50);
      const lugares = {
        "Club Sant Andreu": "Barcelona",
        "Club Badalona": "Badalona",
        "Club Horta": "Barcelona",
        "Club Cornella": "Cornella",
        "Club Hospitalet": "Hospitalet"
      };

      for (let i = 0; i < 50; i++) {
        const nombreClub = clubs[Math.floor(Math.random() * clubs.length)];
        const fecha = fechas[i];
        const lugar = lugares[nombreClub];
        const competicion = [nombreClub, fecha, lugar];
        this.competiciones.push(competicion);
      }
      this.competicionesOriginal = this.competiciones
    },
    filtrarNombre(state){
      if(state){
        this.competiciones = this.ordenarNombresAsc(this.competicionesOriginal)
      }
      else{
        this.competiciones = this.ordenarNombresDesc(this.competicionesOriginal)
      }
    },
    filtrarDate(state){
      if(state){
        this.competiciones = this.ordenarDatesAsc(this.competicionesOriginal)
      }
      else{
        this.competiciones = this.ordenarDatesDesc(this.competicionesOriginal)
      }
    },
    filtrarUbi(state){
      if(state){
        this.competiciones = this.ordenarUbicacionAsc(this.competicionesOriginal)
      }
      else{
        this.competiciones = this.ordenarUbicacionDesc(this.competicionesOriginal)
      }
    },
    toggleIconName() {
      
      this.isUp1 = !this.isUp1;
      this.filtrarNombre(this.isUp1)
    },
    toggleIconDate() {
        this.isUp2 = !this.isUp2;
        this.filtrarDate(this.isUp2)
    },
    toggleIconUbi() {
        this.isUp3 = !this.isUp3;
        this.filtrarUbi(this.isUp3)
    },
    ordenarNombresAsc(competiciones) {
      return competiciones.sort((a, b) => {
        const nombreA = a[0].toUpperCase();
        const nombreB = b[0].toUpperCase();

        if (nombreA < nombreB) {
          return -1;
        }
        if (nombreA > nombreB) {
          return 1;
        }
        return 0;
      });
    },
  ordenarNombresDesc(competiciones) {
    return competiciones.sort((a, b) => {
      const nombreA = a[0].toUpperCase();
      const nombreB = b[0].toUpperCase();

      if (nombreA > nombreB) {
        return -1;
      }
      if (nombreA < nombreB) {
        return 1;
      }
      return 0;
    });
  },
  convertirFecha(fecha) {
      var partes = fecha.split("-");
      var dia = partes[0];
      var mes = partes[1];
      var anio = partes[2];

      return `${anio}-${mes}-${dia}`;
},
  ordenarDatesDesc(competiciones) {
    competiciones.sort((a, b) => {
    const fechaA = this.convertirFecha(a[1]);
    const fechaB = this.convertirFecha(b[1]);

    return fechaA.localeCompare(fechaB);
  });
    return competiciones;
    },
  ordenarDatesAsc(competiciones) {
    competiciones.sort((a, b) => {
    const fechaA = this.convertirFecha(a[1]);
    const fechaB = this.convertirFecha(b[1]);

    return fechaB.localeCompare(fechaA);
  });
    return competiciones;
  },ordenarUbicacionAsc(competiciones) {
      return competiciones.sort((a, b) => {
        const nombreA = a[2].toUpperCase();
        const nombreB = b[2].toUpperCase();

        if (nombreA < nombreB) {
          return -1;
        }
        if (nombreA > nombreB) {
          return 1;
        }
        return 0;
      });
    },
  ordenarUbicacionDesc(competiciones) {
    return competiciones.sort((a, b) => {
      const nombreA = a[2].toUpperCase();
      const nombreB = b[2].toUpperCase();

      if (nombreA > nombreB) {
        return -1;
      }
      if (nombreA < nombreB) {
        return 1;
      }
      return 0;
    });
  },
   openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};

function generarFechas(num) {
  const fechas = [];
  const startDate = new Date("2020-01-01");
  const endDate = new Date();

  for (let i = 0; i < num; i++) {
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const fecha = formatDate(randomDate);
    fechas.push(fecha);
  }

  return fechas;
}

function formatDate(date) {
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${day}-${month}-${year}`;
}


</script>
<style scoped>
.tableFont1 {
  color: white;
  background-color:  rgb( 25, 118, 210);
  padding: 7px;
  font-size: 16px;
  font-weight: bold;
}
.tableFont2 {
  color:  white;
  background-color: rgb(6 156 198) ;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  border: 0px;
}

.tableFont3 {
  color:  white;
  background-color: rgb(135, 207, 227) ;
  padding: 7px;
  font-size: 16px;
  font-weight: bold;
  border: 0px;
}

@keyframes blink {
  0% {
    color:  white;
    background-color:  rgb( 25, 118, 210);
    padding: 7px;
    font-size: 16px;
    font-weight: bold;
    border: 0px;
  }
  50% {
    color:  white;
    background-color:rgb(135, 207, 227) ;
    padding: 7px;
    font-size: 16px;
    font-weight: bold;
    border: 0px;
  }
  100% {
    color:  white;
    background-color:  rgb( 25, 118, 210);
    padding: 7px;
    font-size: 16px;
    font-weight: bold;
    border: 0px;

  }
}

.blink {
  animation: blink 2s infinite;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80opx; 
}

.table-container {
  width: 100%;
  
}

.globalcontainer {
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.btn-blue {
  background-color:  rgb(6 156 198);
  color: white;
  padding: 4px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
}


@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css');

</style>

