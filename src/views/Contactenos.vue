<template>
  <Basiclayouts>
    <div class="contactenos">
      <h2>Contáctanos llenando todos los campos</h2>
      <form class="ui form">
        <div class="field">
          <input type="text" placeholder="Nombre" v-model="formData." />
        </div>
        <div class="field">
          <input type="text" placeholder="Teléfono" v-model="formData" />
        </div>
        <div class="field">
          <input
            type="email"
            placeholder="Correo electronico"
            v-model="formData"
          />
        </div>

        <div class="field">
          <p align="left">Por favor escriba su comentario a continuación</p>
          <textarea> </textarea>
        </div>

        <button
          type="submit"
          class="ui button fluid primary"
          style="background-color: #8b0000 "
          :class="{ loading }"s
        >
          Enviar
        </button>
      </form>
    </div>

    <!-- <div>
      <div id="contacto" class="contacto">
        <form class="formulario" action="#" method="POST">
          <legend>Contáctanos llenando todos los campos</legend>

          <div class="contenedor de campos">
            <div class="campo">
              <label>Nombre</label>
              <input type="text" name="nombre" placeholder="Nombre" required />
            </div>

            <div class="campo">
              <label>Teléfono</label>
              <input type="tel" name="telefono" placeholder="Teléfono" />
            </div>

            <div class="campo w-100">
              <label>Correo</label>
              <input type="email" name="correo" placeholder="Mail" />
            </div>

            <div class="campo w-100">
              <label>Mensaje:</label>
              <textarea> </textarea>
            </div>

            <div class="enviar">
              <input class="boton" type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="container">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
      <div class="text-bg">
        <p></p>
      </div>
    </div> -->
  </Basiclayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as Yup from "yup";
import Basiclayouts from "../layouts/Basiclayouts.vue";
import { postContactenosApi } from "../api/contactenos.js";

export default {
  name: "Contactenos",
  components: {
    Basiclayouts,
  },

  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter(false);
    const token = postContactenosApi();

    // onMounted(() => {
    //   if (getContactenosApi) router.push("/");
    // });

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
    });

    const contactenos = async () => {
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await postContactenosApi(formData.value);
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
      loading.value = false;
    };
    return {
      formData,
      contactenos,
      formError,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.boton {
  background-color: #8b0000;
  color: #fcf9f9;
  margin-top: 0.5rem;
  padding: 0.5rem 3rem;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: none;
}
.boton:hover {
  cursor: pointer;
}
.servicios {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
@media (min-width: 768px) {
  .servicios {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 1rem;
  }
}
.servicio {
  text-align: center;
}
.servicio {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconos {
  display: flex;
  height: 150px;
  width: 150px;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--primario);
  border-radius: 50%;
}
.iconos i {
  font-size: 2rem;
  color: #050505;
}
h1 {
  font-size: 1.4rem;
}
h1 span {
  font-size: 1.4rem;
}
h1,
h2,
h3 {
  text-align: center;
}
h2 {
  font-size: 2.4rem;
}
h3 {
  color: var(--secundario);
  font-weight: 400;
  font-size: 1.6rem;
}
.contenedor {
  margin: 0 auto;
  max-width: 1200px;
}
.sombra {
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  -webkit-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
}
.formulario {
  background-color: #ffa07a;
  padding: 2rem;
  border-radius: 10px;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.formulario legend {
  text-align: center;
  font-size: 1.2rem;
  color: #8b0000;
  margin-bottom: 2rem;
  display: block;
  text-transform: uppercase;
  font-weight: 700;
}
@media (min-width: 768px) {
  .formulario {
    max-width: 800px;
    margin: 0 auto;
  }
}
.contenedor campos {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.campo {
  margin-bottom: 1rem;
  width: 100%;
}
@media (min-width: 480px) {
  .campo {
    display: flex;
    align-items: center;
  }
}
@media (min-width: 768px) {
  .campo {
    flex: 0 0 calc(50% - 0.5rem);
  }
}
.campo label {
  color: #fcf9f9;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}
@media (min-width: 480px) {
  .campo label {
    flex: 0 0 90px;
  }
}
.campo input[type="text"],
.campo input[type="tel"],
.campo input[type="email"],
.campo textarea {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
}
@media (min-width: 768px) {
  :is(.campo)
    :is(input[type="text"], input[type="text"], input[type="tel"], input[type="email"], textarea) {
    flex: 1;
  }
}
.w-100 {
  flex: 0 0 100%;
}
.campo textarea {
  height: 4rem;
}
.enviar {
  display: flex;
  justify-content: flex-end;
  color: #8b0000;
}

.contenido-hero {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contenido-hero h2,
.contenido-hero p {
  color: #fcf9f9;
}

.contactenos {
  text-align: center;
  h2 {
    margin: 50px 0 30px 0;
  }
  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;

    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}

.boton {
  background-color: #8b0000;
  color: #fcf9f9;
  margin-top: 0.5rem;
  padding: 0.5rem 3rem;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: none;
}
</style>
