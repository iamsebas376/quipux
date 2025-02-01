<template>
  <div class="container py-4">
    <div class="row g-4">
      <div class="col-md-5">
        <div
          class="card h-100 border-0 shadow-sm"
          style="background-color: #ffffff; border-radius: 8px"
        >
          <div class="card-body">
            <h5
              class="card-title fw-bold mb-4"
              style="color: #000; font-size: 0.95rem; text-align: left"
            >
              INFORMACIÓN DE LA EMPRESA
            </h5>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Nombre
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.nombre }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Fecha de creación
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.fechaCreacion }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Dirección
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.direccion.calle }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.direccion.edificio }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.direccion.distrito }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.direccion.piso }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.direccion.ciudad }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Número de teléfonos
              </h6>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">Fijo</p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.telefono.fijo }}
              </p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">Fax</p>
              <p class="mb-0" style="color: #666; font-size: 0.85rem">
                {{ empresa.telefono.fax }}
              </p>
            </div>

            <div class="text-center mb-4">
              <h6 class="fw-bold mb-2" style="color: #000; font-size: 0.85rem">
                Sitio Web
              </h6>
              <a
                :href="empresa.sitioWeb"
                class="text-primary text-decoration-none"
                style="color: #666; font-size: 0.85rem"
              >
                {{ empresa.sitioWeb }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <div
          class="card h-100 border-0 shadow-sm"
          style="background-color: #ffffff; border-radius: 8px"
        >
          <div class="card-body">
            <h5
              class="card-title fw-bold mb-4"
              style="color: #000; font-size: 0.95rem; text-align: left"
            >
              INFORMACIÓN DEL CONTACTO
            </h5>

            <div class="row">
              <div class="col-md-6">
                <div class="text-center mb-4">
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
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
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
                    Correo electrónico
                  </h6>
                  <p class="mb-0" style="color: #666; font-size: 0.85rem">
                    {{ contacto.correo }}
                  </p>
                </div>

                <div class="text-center mb-4">
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
                    Sitio Web
                  </h6>
                  <p class="mb-0" style="color: #666; font-size: 0.85rem">
                    {{ contacto.sitioWeb }}
                  </p>
                </div>

                <div class="text-center mb-4">
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
                    Red social
                  </h6>
                  <p class="mb-0" style="color: #666; font-size: 0.85rem">
                    <a
                      :href="contacto.redSocial.Instagram"
                      class="text-primary text-decoration-none"
                      style="color: #666; font-size: 0.85rem"
                    >
                      {{ contacto.redSocial.Instagram }}
                    </a>
                  </p>
                  <p class="mb-0" style="color: #666; font-size: 0.85rem">
                    <a
                      :href="contacto.redSocial.LinkedIn"
                      class="text-primary text-decoration-none"
                      style="color: #666; font-size: 0.85rem"
                    >
                      {{ contacto.redSocial.LinkedIn }}
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-md-1 d-none d-md-block">
                <hr
                  style="
                    background-color: var(--gray-color);
                    height: 100%;
                    width: 2px;
                  "
                />
              </div>

              <div class="col-md-5">
                <div class="text-center mb-4">
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
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
                  <h6
                    class="fw-bold mb-2"
                    style="color: #000; font-size: 0.85rem"
                  >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infoEmpresa from "../data/info-contacto.json";

export default {
  name: "Empresas",
  data() {
    return {
      empresa: infoEmpresa.empresa || {},
      contacto: infoEmpresa.contacto || {},
    };
  },
};
</script>
