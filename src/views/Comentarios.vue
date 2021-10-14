<template>
  <Basiclayouts>
    <div v-for="contactenos in contactenos" :key="contactenos.id">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ contactenos.id }}</td>
            <td>{{ contactenos.Nombre }}</td>
            <td>{{ contactenos.Telefono }}</td>
            <td>{{ contactenos.Email }}</td>
            <td>{{ contactenos.Comentario }}</td>

            <td style="text-align: center">
              <i
                class="close icon"
                @click="deleteComentario(contactenos.id)"
              ></i>
            </td>

            <!-- <router-link
                :to="{
                  name: 'ContactenosUpdate',
                  params: { id: contactenos._id },
                }"
                class="btn btn-sm btn-primary"
              >
                Edit
              </router-link> -->
            <button
              class="btn btn-sm btn-danger"
              @click.prevent="deleteComentario(contactenos.id)"
            >
              Delete
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
import { deleteComentario } from "../api/contactenos";

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
} from "mdb-vue-ui-kit";

export default {
  name: "Comentarios",
  components: {
    Basiclayouts,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
  },
  data() {
    return {
      contactenos: [],
    };
  },
  mounted() {
    fetch("http://localhost:1337/contactenos")
      .then((res) => res.json())
      .then((data) => {
        this.contactenos = data;
      });
  },

  update() {
    // fetch data
    fetch("http://localhost:1337/contactenos")
      // response to json
      .then((res) => res.json())
      // read data
      .then((data) => {
        this.contactenos = data;
      });
  },
  methods: {
    deleteComentario() {
      // send delete request  API ID : contactenos
      fetch("http://localhost:1337/contactenos" + [(id = "")], {
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
  //     contactenos,
  //   };
  // },
};
</script>
