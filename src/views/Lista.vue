<template>
  <Basiclayouts>
    <div id="users">
      <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="users in users" :key="users.id">
          {{ users.name }}
        </li>
      </ul>
    </div>
  </Basiclayouts>
</template>

<script>
// import axios from "axios";
// import { onMounted } from "vue";
// import { useRouter } from "vue-router";

export default {
  name: "users",
  data() {
    return {
      Users: [],
      error: null,
    };
  },

  async onMounted() {
    try {
      const response = await axios
        .get("http://localhost:1337/Users")
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
