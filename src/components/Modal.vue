<template>
   <div v-if="show" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title titulo" style="font-weight: bold; color: #069cc6">
            Página en construcción
          </h5>          
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body">
          <!-- <slot></slot> -->
           <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <img
                  src="../assets/constructor.jpg"
                  width="70%"
                  alt="My Image"
                  class="img-fluid"
                />
              </div>
              <div
                class="col-md-6 ms-auto general"
                style="display: flex; align-items: center"
              >
                Proximamente podrás disfrutar de este espacio.
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="close">Cerrar</button>
        </div>
      </div>
    </div>
   
  </div>
</template>

<style scoped>


.btn-xl {
  padding: 1.25rem 2.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 1rem;
}

.center-grid {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
</style>

<script>
export default {
  name: 'AppModal',
 props: ['show'],
  methods: {
    close() {
      this.$emit('close');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

