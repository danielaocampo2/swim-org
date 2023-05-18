<template>
<div class="vw-100 h-100 container-center mt-3 marginC">
<div class="col-md-12 mt-2">
        <table class="table table-sm table-responsive table-bordered">
          <thead style="backgorund: blue">
            <tr class="titulos infoContainer" >
              <th scope="col">Carril</th>
              <th scope="col">Descalificación</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, i) in values" :key="i">
              <td class="posTable titulos">{{ `${i + 1}` }}</td>
              <td>
                <div class="form-check d-flex align-items-center">
                  <div v-if="!value.editing" class="display">
                    <div>
                    <p style="margin-bottom: 0px" class="inputNumber general">
                      {{ value.text }}
                    </p>
                    </div>
                    <div style="margin-left: 18px;">
                    <a type="button"
                      class="btn btn-primary"
                      @click="startEditing(value, i)"
                    ><span v-if="value.text === ''">
                        Motivo
                    </span>
                    <span v-else>
                       <i class="fas fa-pencil-alt"></i>
                    </span>
                    </a>
                    </div>
                  </div>
                  <div v-else class="display">
                    <input
                      class="inputNumber general"
                      type="text"
                      v-model="value.tempText"
                     
                      
                    />
                   
                    <button
                      class="btn btn-success"
                      style="margin: 1%"
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
 <button
          class="btn btn-success btn-lg w-50 fw-semibold shadow-sm"
          type="submit"
         
          @click="save"
        >
          Enviar
        </button>
   <div id="messageContainer"></div>
</div>
</template>

<script>
export default {
  name: "AppDisqualifications",
  data() {
    return {
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
    }},

     methods: {
        startEditing(card, index) {
      
        this.values[index].editing = true;
      
    },
    confirmEdit(card, index) {
      var edit = true;
      var id = card.tempText != "" ? card.tempText : card.text;
     
        this.values[index].text = card.tempText;
        this.values[index].editing = false;
        edit = this.values[index].text == "" ? true : false;
      
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
    // cancelEdit(index) {
      
    //     this.values[index].text='';
    //     this.values[index].editing = false;
    
    // },
    save(){
      
        var message='Se han enviado exitosamente los datos al juez principal, una vez validados se cargarán los datos de la siguiente prueba.'
        this.showAlert('','success',message);
    },
    showAlert(error, type, message ) {
      
        const errorMessage = 
        `<div class="alert alert-${type} my-3" role="alert">
        <strong">${error}</strong><p>${message}</p> 
        </div>
        `;
        document.getElementById('messageContainer').innerHTML = errorMessage;
      
      }

   
     }

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
   .display {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 28px;
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
    margin-left: 28px;
    width: 100%
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

.form-check-input[type="checkbox"] {
  transform: scale(1.5); /* Ajusta el valor para cambiar el tamaño del checkbox */
  margin-left: 10px; /* Ajusta el valor para agregar margen a la izquierda */

}
.form-check.d-flex.align-items-center {
  height: 100%; /* Ajusta la altura del contenedor según tus necesidades */
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
  width: 20%;
  vertical-align: middle;
  font-size: 20px;
  color: black;
}
.table {
  --bs-table-border-color: #61affc;
}
.table tbody tr {
  height: 30px; /* Ajusta la altura deseada de las filas */
  line-height: 30px; /* Ajusta la altura de línea deseada */
}
.table > thead {
  background: #c8dae5;
}
</style>