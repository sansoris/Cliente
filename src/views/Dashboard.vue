<template>
  <!-- v-if pendiente -->
  <Basiclayouts>
    <div
      class="d-flex flex-row overflow-hidden"
      style="max-height: 100vh !important"
    >
      <!-- SIDEBAR -->
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style="width: 280px; height: 100vh !important "
      >
        <router-link
          class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
          to="/dashboard"
        >
          <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">Administrador</span>
        </router-link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/lista">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#home" />
              </svg>
              Usuarios autorizados
            </router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/recomendados">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#table" />
              </svg>
              Recomendados autorizados
            </router-link>
          </li>
          <li>
            <router-link class="nav-link text-white" to="/comentarios">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#grid" />
              </svg>
              Comentarios
            </router-link>
          </li>
          <!-- <li>
            <router-link class="nav-link text-white" to="/dashboard/customers">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#people-circle" />
              </svg>
              Customers
            </router-link>
          </li> -->
        </ul>
        <hr />
        <div class="dropdown">
          <a
            class="
            d-flex
            align-items-center
            text-white text-decoration-none
            dropdown-toggle
          "
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://www.gravatar.com/avatar/?d=mp"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>Administrador</strong>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <!-- <li><a class="dropdown-item">New project...</a></li>
          <li><a class="dropdown-item">Settings</a></li>
          <li><a class="dropdown-item">Profile</a></li>
          <li><hr class="dropdown-divider" /></li> -->
            <li>
              <router-link class="dropdown-item" to="/">Salir</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="container-fluid px-5 overflow-scroll">
        <router-view />
      </div>
    </div>
  </Basiclayouts>
</template>

<script>
// import SvgDashboard from "@/components/Svg/Dashboard.vue";
import Basiclayouts from "../layouts/Basiclayouts.vue";
import getTokenApi from "../api/token";

export default {
  name: "Dashboard",
  components: {
    // SvgDashboard
    Basiclayouts,
  },
  // setup() {
  //   const token = getTokenApi();

  //   return {
  //     token,
  //   };
  // },
};
// import Basiclayouts from "../layouts/Basiclayouts";

// export default {
//   name: "Dashboard",
//   components: {
//     Basiclayouts,
//   },

//   setup() {
//     const token = getTokenApi();

//     const logout = () => {
//       deleteTokenApi();
//       location.replace("/");
//     };

//     return {
//       token,
//       logout,
//     };
</script>
