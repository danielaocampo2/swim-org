<template>
<div class="vw-100 h-100 container-center mt-3 marginC">
  <div class="row" >
  <div class="col-sm-9">
    <h5 class="infoContainer titulos">100 metros - Mariposa - Femenino</h5>
  </div>
  <div class=" col-sm-3">
   <h5 class="infoContainer titulos" >Serie: 2.5</h5>
  </div>
  </div>
 
</div>

  <div class="vw-100 h-100 container-center mt-3 marginC">
    <div class="row row-cols-3 row-cols-md-6">
      <div
        class="col widthNum"
        style="padding-top: 10px"
        v-for="number in 9"
        :key="number"
      >
        <div
          class="card back"
          :id="'number-' + number"
          type="button"
          @click="orderArrival(number)"
          :disabled="statusNumbers[1]"
        >
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 style="margin-bottom: 0px" class="card-title numbers titulos">
              {{ number }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="vw-100 h-100 container-center mt-3 marginC">
    <div class="row">
      <!-- Columna para las tarjetas -->
      <div class="col-md-8">
        <div class="row row-cols-3 row-cols-md-3">
          <div
            class="col"
            style="padding-top: 10px"
            v-for="(card, index) in cards"
            :key="index"
          >
            <div class="card">
              <img
                :src="getImagePath(card.image)"
                class="card-img-top imageWin"
                :alt="card.alt"
              />
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="card-body">
                <div>
                  <div v-if="!card.editing" class="display">
                    <p style="margin-bottom: 0px" class="inputNumber general">
                      {{ card.text }}
                    </p>
                    <button
                      style="margin: 4%"
                      class="btn btn-primary"
                      @click="startEditing(card, index, 'card')"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                  </div>
                  <div v-else class="display">
                    <input
                      class="inputNumber general"
                      type="number"
                      v-model="card.tempText"
                      @input="validateInput(card)"
                      maxlength="1"
                    />
                  
                    <button
                      class="btn btn-success"
                      style="margin: 4%"
                      @click="confirmEdit(card, index, 'card')"
                    >
                      <i class="fas fa-check"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-success btn-lg w-50 fw-semibold shadow-sm"
          type="submit"
          style="margin-top: 7%"
          @click="save"
        >
          Enviar
        </button>
        <div id="messageContainer"></div>
      </div>
      <!-- Columna para la tabla -->
      <div class="col-md-4 mt-2">
        <table class="table table-responsive table-bordered">
          <thead style="backgorund: blue">
            <tr>
              <th scope="col">Posición</th>
              <th scope="col">Carril</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, i) in values" :key="i">
              <td class="posTable">{{ `${i + 4}°` }}</td>
              <td>
                <div>
                  <div v-if="!value.editing" class="display">
                    <p style="margin-bottom: 0px" class="inputNumber general">
                      {{ value.text }}
                    </p>
                    <button
                      style="margin: 4%"
                      class="btn btn-primary"
                      @click="startEditing(value, i, 'table')"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                  </div>
                  <div v-else class="display">
                    <input
                      class="inputNumber general"
                      type="number"
                      v-model="value.tempText"
                      @input="validateInput(value)"
                      maxlength="1"
                    />
                  
                    <button
                      class="btn btn-success"
                      style="margin: 4%"
                      @click="confirmEdit(value, i)"
                    >
                      <i class="fas fa-check"></i>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppArrivalOrder",
  data() {
    return {
      
      statusNumbers: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
      },

      //Codigo hardcodeado
      cards: [
        {
          image: "oro.jpg",
          alt: "Trofeo oro",
          text: "",
          tempText: "",
          editing: false,
        },
        {
          image: "plata.jpeg",
          alt: "Trofeo plata",
          text: "",
          tempText: "",
          editing: false,
        },
        {
          image: "bronce.jpg",
          alt: "Trofeo bronce",
          text: "",
          tempText: "",
          editing: false,
        },
      ],

      values: [
        {
          text: "",
          tempText: "",
          editing: false,
        },
        {
          text: "",
          tempText: "",
          editing: false,
        },
        {
          text: "",
          tempText: "",
          editing: false,
        },
        {
          text: "",
          tempText: "",
          editing: false,
        },
        {
          text: "",
          tempText: "",
          editing: false,
        },
        {
          text: "",
          tempText: "",
          editing: false,
        },
      ],
    };
  },

  methods: {
    getImagePath(image) {
      return require(`@/assets/${image}`);
    },
    goTo(page) {
      console.log(page);
      this.$router.push("/login");
    },
    startEditing(card, index, type) {
      if (type == "card") {
        this.cards[index].editing = true;
      } else {
        this.values[index].editing = true;
      }
    },
    confirmEdit(card, index, type) {
      var edit = true;
      var id = card.tempText != "" ? card.tempText : card.text;
      if (type == "card") {
        this.cards[index].text = card.tempText;
        this.cards[index].editing = false;
        edit = this.cards[index].text == "" ? true : false;
      } else {
        this.values[index].text = card.tempText;
        this.values[index].editing = false;
        edit = this.values[index].text == "" ? true : false;
      }
      index++;
      const divElement = document.getElementById("number-" + id);

      if (divElement) {
        if (!edit) {
          divElement.className = "card back-disable";
          this.statusNumbers[id] = false;
        } else {
          divElement.className = "card back";
          this.statusNumbers[id] = true;
        }
      }
      // this.class_num ='back-disable'
    },
    // cancelEdit(index, type) {
    //   if (type == "card") {
    //     this.cards[index].editing = false;
    //   }
    //   if (type == "table") {
    //     this.values[index].editing = false;

    //   }
    // },
    validateInput(card) {
      // Si el carácter no es un dígito numérico del 1 al 9, borra el contenido del input

      if (!this.statusNumbers[card.tempText]) {
        alert(
          "Error! el número seleccionado ya se encuentra en otra posición "
        );
        card.tempText = "";
      }
    },

    orderArrival(value) {
      for (const card of this.cards) {
        if (card.text == "") {
          card.text = value;
          const divElement = document.getElementById("number-" + value);

          if (divElement) {
            divElement.className = "card back-disable";
            this.statusNumbers[value] = false;
          }
          return;
        }
      }
      for (const table of this.values) {
        if (table.text == "") {
          table.text = value;
          const divElement = document.getElementById("number-" + value);

          if (divElement) {
            divElement.className = "card back-disable";
            this.statusNumbers[value] = false;
          }
          return;
        }
      }
    },
    save(){
      var error=false;
        Object.keys(this.statusNumbers).forEach((key) => {
          const value = this.statusNumbers[key];
          if(value){
            console.log('quedan valores', key,'mira el array', this.statusNumbers);
            var message='Debe posicionar cada carril en una posición'
           
           error=true;
            this.showAlert('¡Error!','danger',message);
            return;
          }
        });
        if(!error)
        {var message='Se han enviado exitosamente los datos al juez principal, una vez validados se cargarán los datos de la siguiente prueba.'
        this.showAlert('','success',message);}
    },
    showAlert(error, type, message ) {
      
        const errorMessage = 
        `<div class="alert alert-${type} my-3" role="alert">
        <strong">${error}</strong><p>${message}</p> 
        </div>
        `;
        document.getElementById('messageContainer').innerHTML = errorMessage;
      
      }
  },
};
</script>
<style scoped>
@media (min-width: 200px) {
  .numbers {
    font-size: 60px; /* Tamaño de fuente para dispositivos medianos y superiores */
  }
  .marginC {
    padding-right: 20px;
    padding-left: 74px;
    padding-bottom: 16px;
  }
  .imageWin {
    width: 70px;
    height: 70px;
    align-self: center;
  }
}

@media (min-width: 900px) {
  .numbers {
    font-size: 110px; /* Tamaño de fuente para dispositivos grandes y superiores */
  }
  .widthNum {
    width: 11%;
  }

  .display {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
  }

  .marginC {
    padding-left: 100px;
    padding-right: 40px;
    padding-bottom: 16px;
  }
  .imageWin {
    width: 200px;
    height: 200px;
    align-self: center;
  }
}

.card-body {
  padding: 0px !important;
}

.back {
  background-color: rgb(6 156 198);
  color: white;
}
.back-disable {
  background-color: #808080a1;
  color: rgb(38 38 46 / 53%);
  pointer-events: none;
  cursor: default;
}

.inputNumber {
  width: 80%;
  text-align: center;
  font-size: 20px;
  color: black;
}
.posTable {
  width: 40%;
  vertical-align: middle;
  font-size: 20px;
  color: black;
}
.table {
  --bs-table-border-color: #61affc;
}

.table > thead {
  background: #c8dae5;
}
</style>