<template>
  <Basiclayouts>
    <div v-for="recomendados in recomendados" :key="recomendados.id">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Ciudad</th>
            <th>Servicios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ recomendados.id }}</td>
            <td>{{ recomendados.Nombre }}</td>
            <td>{{ recomendados.Apellido }}</td>
            <td>{{ recomendados.Telefono }}</td>
            <td>{{ recomendados.Ciudad }}</td>
            <td>{{ recomendados.Servicios }}</td>

            <td style="text-align: center">
              <i
                class="close icon"
                @click="deleteComentario(recomendados.id)"
              ></i>
            </td>

            <!-- <router-link
              :to="{
                name: 'recomendadosUpdate',
                params: { id: recomendados.id },
              }"
              class="btn btn-sm btn-primary"
            >
              Edit
            </router-link> -->
            <button
              class="btn btn-sm btn-danger"
              @click.prevent="deleteRecomendado(recomendados.id)"
            >
              Delete
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click.prevent="deleteRecomendado(recomendados.id)"
            >
              Editar
            </button>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-toolbar mb-2 mb-md-10">
      <div class="btn-group me-2">
        <router-link
          type="button"
          class="btn btn-primary"
          to="/dashboard"
          style="background-color: #ffa07a; border-color: #ffa07a"
        >
          Regresar
        </router-link>
      </div>
    </div>
  </Basiclayouts>
</template>

<script>
import Basiclayouts from "../layouts/Basiclayouts.vue";

export default {
  name: "Comentarios",
  components: {
    Basiclayouts,
  },
  data() {
    return {
      recomendados: [],
    };
  },
  mounted() {
    fetch("http://localhost:1337/recomendados")
      .then((res) => res.json())
      .then((data) => {
        this.recomendados = data;
      });
  },

  update() {
    // fetch data
    fetch("http://localhost:1337/recomendados")
      // response to json
      .then((res) => res.json())
      // read data
      .then((data) => {
        this.recomendados = data;
      });
  },
  methods: {
    deleteRecomendado() {
      // send delete request  API ID : recomendados
      fetch("http://localhost:1337/recomendados" + [(id = "")], {
        method: "DELETE",
      })
        // read response status == 204
        .then((res) => {
          if (res.status == 204) this.success();
        })
        .catch(() => this.error());
    },
    success() {
      Swal.fire({
        icon: "success",
        text: "Post Deleted",
      }).then(() => this.$router.go());
    },
    error() {
      Swal.fire({
        icon: "error",
        text: "Error!",
      });
    },
  },

  // setup() {
  //   const remove = (id) => {
  //     deleteComentario(id);
  //   };
  //   return {
  //     recomendados,
  //   };
  // },
};
</script>
