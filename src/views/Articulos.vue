<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-4">
        <div
          class="card h-100"
          style="background-color: #ffffff; border-radius: 8px; border: none"
        >
          <div class="card-body">
            <h5
              class="card-title fw-bold mb-4"
              style="color: #000; font-size: 0.95rem; text-align: left"
            >
              INFORMACIÓN DEL CONTACTO
            </h5>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Dirección
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.direccion.calle }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.direccion.ciudad }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Correo electrónico
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.correo }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Sitio Web
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.sitioWeb }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Red social
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                <a
                  :href="contacto.redSocial.Instagram"
                  class="text-primary text-decoration-none"
                >
                  {{ contacto.redSocial.Instagram }}
                </a>
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                <a
                  :href="contacto.redSocial.LinkedIn"
                  class="text-primary text-decoration-none"
                >
                  {{ contacto.redSocial.LinkedIn }}
                </a>
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Dirección de correspondencia de correo
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.direccionCorreo.calle }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ contacto.direccionCorreo.ciudad }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Número de teléfonos
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                Fijo:<br />{{ contacto.telefono.fijo }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                Celular:<br />{{ contacto.telefono.celular }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card mb-4" style="border: none">
          <div class="card-body">
            <div
              id="articleCarousel"
              class="carousel slide mb-2"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-center">
                    <img src="https://placehold.co/300x200" alt="Artículo" />
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                role="button"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true">
                  <i
                    class="bi bi-chevron-left"
                    style="color: var(--gray-color)"
                  ></i>
                </span>
              </a>
              <a
                class="carousel-control-next"
                role="button"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true">
                  <i
                    class="bi bi-chevron-right"
                    style="color: var(--gray-color)"
                  ></i>
                </span>
              </a>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-sm"
                style="
                  background-color: var(--gray-color);
                  border-radius: 50%;
                  width: 10px;
                  height: 15px;
                  margin: 0 5px;
                "
              ></button>
              <button
                type="button"
                class="btn btn-sm"
                style="
                  background-color: var(--gray-color);
                  border-radius: 50%;
                  width: 10px;
                  height: 15px;
                  margin: 0 5px;
                "
              ></button>
              <button
                type="button"
                class="btn btn-sm"
                style="
                  background-color: var(--gray-color);
                  border-radius: 50%;
                  width: 10px;
                  height: 15px;
                  margin: 0 5px;
                "
              ></button>
            </div>
          </div>
        </div>

        <div
          class="card"
          style="border: none; max-height: 400px; overflow-y: auto"
        >
          <div class="card-body">
            <div class="row">
              <div
                v-for="articulo in articulos"
                :key="articulo.id"
                class="col-6 col-md-3 mb-3"
              >
                <div class="card text-center" style="border: none">
                  <div class="card-body">
                    <div
                      class="rounded-circle"
                      style="
                        width: 80px;
                        height: 80px;
                        background-color: #e0e0e0;
                        margin: auto;
                        margin-bottom: 10px;
                      "
                    >
                      <img
                        :src="articulo.imagen"
                        class="card-img-top"
                        :alt="articulo.titulo"
                        style="display: none"
                      />
                    </div>
                    <h6 class="card-title" style="font-size: 0.75rem">
                      {{ articulo.titulo }}
                    </h6>
                    <p class="card-text" style="font-size: 0.65rem">
                      {{ articulo.descripcion }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articulosData from "../data/articulos.json";
import infoContacto from "../data/info-contacto.json";

export default {
  name: "Articulos",
  data() {
    return {
      articulos: articulosData,
      contacto: infoContacto.contacto,
    };
  },
  mounted() {
    if (typeof bootstrap !== "undefined") {
      new bootstrap.Carousel(document.getElementById("articleCarousel"));
    }
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
</style>
