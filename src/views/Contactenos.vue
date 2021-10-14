<template>
  <Basiclayouts>
    <div class="contactenos">
      <h2>Contáctanos llenando todos los campos</h2>
      <form class="ui form" @submit.prevent="contactenos">
        <div class="fields">
          <div class="field">
            <input
              type="text"
              placeholder="Nombre Completo"
              v-model="formData.username"
              :class="{ error: formError.username }"
            />
          </div>
          <div class="field">
            <input
              type="text"
              placeholder="Teléfono"
              v-model="formData.telefono"
              :class="{ error: formError.telefono }"
            />
          </div>
        </div>
        <div class="field">
          <input
            type="email"
            placeholder="Correo electrónico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <label>Por favor escriba su comentario a continuación</label>
          <p align="left">{{ message }}</p>
          <textarea v-model="message"> </textarea>
        </div>

        <button
          type="submit"
          class="ui button fluid primary"
          style="background-color: #8b0000 "
          :class="{ loading }"
        >
          Enviar
        </button>

        <!-- <div
          class="ui button primary"
          style="background-color: #8b0000 "
          @click="postContactenosApi(formData.nombre)"
        >
          Enviar
        </div> -->
      </form>
    </div>
  </Basiclayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as Yup from "yup";
import Basiclayouts from "../layouts/Basiclayouts.vue";
import { postContactenosApi } from "../api/contactenos.js";
import { getTokenApi } from "../api/token.js";

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
    // const contactenos = postContactenosApi();
    const token = getTokenApi();

    // onMounted(() => {
    //   if (token) router.push("/");
    // }); // Al dejarlo activo no carga vista

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      telefono: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
    });

    const contactenos = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await postContactenosApi(formData.value);
          router.push("/servicios");
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
.contactenos {
  text-align: center;
  h2 {
    margin: 10px 0 5px 0;
  }
  .ui.form {
    max-width: 600px !important;
    margin: 0 auto;
    margin-bottom: 140px;

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
