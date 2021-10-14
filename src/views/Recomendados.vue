<template>
  <Basiclayouts>
    <h1>Recomendados</h1>
    <div id="aplicacion" class="container">
      <table class="table table-striped">
        <tr>
          <th>Id</th>
          <th>Nombres completos</th>
          <th>Apellidos completos</th>
          <th>Teléfono</th>
          <th>Ciudad</th>
          <th>Servicios</th>
        </tr>
        <!-- se trae el for con la etiqueta template -->
        <!-- marcador de datos en llaves -->

        <div class="list" v-for="persona in recomendados" :key="persona.id">
          <tr>
            <td>{{ persona.id }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.telefono }}</td>
          </tr>
        </div>
      </table>
    </div>
  </Basiclayouts>
</template>

<script>
import Basiclayouts from "../layouts/Basiclayouts.vue";

export default {
  name: "Recomendados",
  components: {
    Basiclayouts,
  },
};

// var app = new Vue({
//   el: "#aplicacion",
//   data: {
//     recomendados: [
//       {
//         id: 321654,
//         nombre: "Recomendado 1",
//         telefono: 300300301,
//       },
//       {
//         id: 987654,
//         nombre: "Recomendado 2",
//         telefono: 300300302,
//       },
//       {
//         id: 741852,
//         nombre: "Recomendado 3",
//         telefono: 300300303,
//       },
//       {
//         id: 852963,
//         nombre: "Recomendado 4",
//         telefono: 300300304,
//       },
//       {
//         id: 963741,
//         nombre: "Recomendado 5",
//         telefono: 300300305,
//       },
//     ],
//   },
// });
</script>
