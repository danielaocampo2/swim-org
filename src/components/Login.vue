<template>
  <div class="container d-flex justify-content-center">
    <div class="bg-white my-5 py-1 card rounded-5 text-secondary">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <img
            src="../assets/login-icon.svg"
            alt="login-icon"
            style="height: 7rem"
          />
        </div>

        <form @submit="Submit" method="post">
          <div class="input-group mt-4">
            <div class="input-group-text globalColor">
              <img
                src="../assets/username-icon.svg"
                alt="username-icon"
                style="height: 1rem"
              />
            </div>
            <input
              class="form-control bg-light"
              type="text"
              placeholder="ID"
              v-model="form.id"
              required
              
              @input="checkInputLength"
            />
          </div>
          <div v-if="showError" class="error-message text-danger">
            Error: Máximo 8 caracteres.
          </div>
          <div class="input-group mt-1">
            <div class="input-group-text globalColor">
              <img
                src="../assets/password-icon.svg"
                alt="password-icon"
                style="height: 1rem"
              />
            </div>
            <input
              class="form-control bg-light"
              v-model="form.password"
              required
              :type="passwordType"
              placeholder="Contraseña"
            />
            <div
              class="input-group-text"
              type="button"
              @click="switchVisibility"
              
            >
              <img
                v-if="passwordType!='password'"
                src="../assets/eye.svg"
                alt="password-icon"
                style="height: 1rem"
              />
              <img
                v-if="passwordType=='password'"
                src="../assets/eye-off.svg"
                alt="password-icon"
                style="height: 1rem"
              />
            </div>
          </div>

          <div class="d-flex justify-content-around mt-1">
            <div class="pt-1">
              <a
                href="#"
                class="text-decoration-none text-info fw-semibold fst-italic"
                style="font-size: 0.9rem"
                >¿Olvido la contraseña?</a
              >
            </div>
          </div>
          <button
            class="btn btn-primary btn-lg globalColor w-100 mt-4 fw-semibold shadow-sm"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
        <div id="messageContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",

  data() {
    return {
      passwordType: "password",
      eye: false,
      maxInputLength: 8,
      showError: false,
      form: {
        email: "",
        password: "",
      },
      users: {
        0: { id: "12345A", password: "crono1234.", rol: "cronometrador" },
        1: { id: "12345B", password: "juez987.", rol: "juez de recorrido" },
      },
    };
  },
  methods: {
    checkInputLength() {
    if (this.form.id.length > this.maxInputLength) {
      this.showError = true;
    } else {
      this.showError = false;
    }
  },
    Submit(event) {
      event.preventDefault();
      for (let i = 0; i < Object.keys(this.users).length; i++) {
        if (
          this.form.id === this.users[i].id &&
          this.form.password === this.users[i].password
        ) {
          this.$store.commit("login", this.users[i].rol);
          this.$router.push("/MainPage");
        }else{
          this.showAlert()
        }
      }
    },
    switchVisibility() {
      this.passwordType = this.passwordType === "password" ? "text" : "password";

    },
    showAlert() {
      
        const errorMessage = 
        `<div class="alert alert-danger my-3" role="alert">
        <strong>¡Error!</strong><p>Los datos introducidos no son </br> correctos.</p> 
        </div>
        `;
        document.getElementById('messageContainer').innerHTML = errorMessage;
      
      }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
