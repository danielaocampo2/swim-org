<template>

    <button  class="btn globalColor position-fixed start-0 translate-middle-y h-50 top-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions h">
      <img src="../assets/dropLeft.png" alt="imagen" class="img-fluid " style="width: 30px; height: 30px;">
    </button>
    <DropRight />
  
</template>

<script>
import DropRight from './DropRight.vue';

export default {
  name: 'CompetitionMainPage',
  components: {
    DropRight
  }
}
</script>

<style scoped>

</style>