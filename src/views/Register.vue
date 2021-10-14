<template>
  <Basiclayouts>
    <div class="register">
      <h2>Registro de usuario</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field">
          <input
            type="email"
            placeholder="Correo electronico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>

        <button
          type="submit"
          class="ui button fluid primary"
          style="background-color: #8b0000 "
          :class="{ loading }"
        >
          Crear usuario
        </button>
      </form>

      <!-- <router-link to="/login">
        Iniciar sesión
      </router-link> -->
    </div>
  </Basiclayouts>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as Yup from "yup";
import Basiclayouts from "../layouts/Basiclayouts.vue";
import { registerApi } from "../api/user.js";
import { getTokenApi } from "../api/token.js";

export default {
  name: "Register",
  components: {
    Basiclayouts,
  },
  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter(false);
    const token = getTokenApi();

    // onMounted(() => {
    //   if (token) router.push("/");
    // });

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
      password: Yup.string().required(true),
    });

    const register = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await registerApi(formData.value);
          router.push("/dashboard");
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
      register,
      formError,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  text-align: center;
  h2 {
    margin: 50px 0 30px 0;
  }
  .ui.form {
    max-width: 300px !important;
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
