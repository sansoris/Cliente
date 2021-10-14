<template>
  <Basiclayouts>
    <div v-if="users.length">
      <MDBRow :cols="['1', 'md-4']" class="g-4">
        <div v-for="users in users" :key="users.id">
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{{ users.id }}</MDBCardTitle>
                <MDBCardText>
                  {{ users.username }} || {{ users.email }}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </MDBRow>
    </div>
    <MDBRow>
      <div class="btn-toolbar mb-2 mb-md-10">
        <div class="btn-group me-2">
          <router-link
            type="button"
            class="btn btn-primary"
            to="/register"
            style="background-color: #8b0000; border-color: #8b0000"
          >
            Crear usuario
          </router-link>
        </div>
      </div>
    </MDBRow>
    <MDBRow>
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
    </MDBRow>
  </Basiclayouts>
</template>

<script>
import Basiclayouts from "../layouts/Basiclayouts.vue";

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
  name: "Lista",
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
      users: [],
    };
  },
  mounted() {
    fetch("http://localhost:1337/users")
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
      });
  },
};
</script>
