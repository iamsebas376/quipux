<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-6">
        <h1 class="display-4 mb-4 text-primary">¿Qué quieres buscar?</h1>
        <p class="lead mb-4">
          Encuentra la información que desees consultar...
        </p>

        <div class="d-flex justify-content-center mb-4">
          <select class="form-select me-2">
            <option selected>Todos los servicios</option>
            <option>Servicio 1</option>
            <option>Servicio 2</option>
            <option>Servicio 3</option>
          </select>
          <input
            type="text"
            class="form-control me-2"
            placeholder="Buscar servicio..."
          />
          <button class="btn btn-primary">
            <i class="bi bi-search"></i>
          </button>
        </div>

        <div class="card text-center shadow-sm mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6>Certificado</h6>
                <p>Conocé los beneficios que tenemos para ti al registrarte</p>
                <button class="btn btn-outline-primary">+ beneficios</button>
              </div>
              <div class="col">
                <h6>Crear cuenta</h6>
                <p>Conocé los beneficios que tenemos para ti al registrarte</p>
                <button class="btn btn-outline-primary">Ver todo</button>
              </div>
              <div class="col">
                <h6>Top trámites</h6>
                <p>Conocé los trámites más solicitados...</p>
                <button class="btn btn-outline-primary">Ver todo</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 position-relative">
        <img :src="resource1" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import resource1 from "../assets/resource-1.png";

export default {
  name: "Colaboradores",
  data() {
    return {
      resource1,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.card {
  border: none;
  border-radius: 8px;
}
</style>
