<template>
  <div class = "basic-layout">
    <Menu />
 
     
    <div class = "ui container">
    <slot />
  </div>
  </div>
  <Footer />
</template>



<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Basiclayouts",
    components: {
      Menu, 
      Footer,
      
    },
}; 
</script>

<style>

</style>