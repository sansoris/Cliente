<template>
  <Basiclayouts>
    <h3>Estamos en comentarios</h3>
    <!-- <div id="contactenos">
      <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="contactenos in contactenos" :key="contactenos.id">
          {{ contactenos.comentario }}
        </li>
      </ul>
    </div> -->
  </Basiclayouts>
</template>

<script>
import axios from "axios";
// import { onMounted } from "vue";
// import { useRouter } from "vue-router";
import postContactenosApi from "../api/contactenos.js";

export default {
  name: "contactenos",
  data() {
    return {
      contactenos: [],
      error: null,
    };
  },

  async onMounted() {
    try {
      const response = await axios
        .postContactenosApi("http://localhost:1337/Contactenos")
        .then((response) => {
          console.log(response);
          // this.users = response.data;
        });
    } catch (error) {
      this.error = error;
    }
  },
};
</script>
