<template>
<Basiclayouts> 
  <div id ="contacto"  class ="contacto">
            
    <form class="formulario" action="#" method="POST">
        <legend>Una vez leído terminos y condiciones, por favor diligencie todos los campos</legend>
        <div class="contenedor de campos">
            <div class="campo">
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Nombre" required>
            </div>

            <div class="campo">
                <label>Apellido</label>
                <input type="text" name="apellido" placeholder="Apellido" required>
            </div>

            <div class="campo">
                <label>Teléfono</label>
                <input type="tel" name="telefono" placeholder="Teléfono">
            </div>

            <div class="campo">
                <label>Ciudad</label>
                <input type="text" name="ciudad" placeholder="Ciudad">
            </div>

            <div class="form-check">
                <p>Seleccione el (los) servicios que puede prestar: </p>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox1" value="">
                        <label for="checkbox1" class= "form-check-label">Plomería</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox2" value="">
                        <label for="checkbox2" class= "form-check-label">Electricidad</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox3" value="">
                        <label for="checkbox3" class= "form-check-label">Cerrajería</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox4" value="">
                        <label for="checkbox4" class= "form-check-label">Gasodomésticos</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox5" value="">
                        <label for="checkbox5" class= "form-check-label">Carpintería</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox6" value="">
                        <label for="checkbox6" class= "form-check-label">Electrónicos</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox7" value="">
                        <label for="checkbox7" class= "form-check-label">Pintura</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox7" value="">
                        <label for="checkbox7" class= "form-check-label">Mecánica</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox7" value="">
                        <label for="checkbox7" class= "form-check-label">Albañilería</label>
                    </div>
            </div>

                    <div class="enviar">
                        <input class="boton" type="submit" value="vincúlate" >
                    </div>
        </div> 
 </form>
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
            <div class="text-bg">
                  <p>
                  |
                  </p>
        </div>
        </div>
  </div>
</Basiclayouts> 
</template>

<script>

import Basiclayouts from '@/layouts/Basiclayouts.vue';
import Home from './Home'

export default {
  name: "Vinculate",
  components: {
    Basiclayouts,
    Home, 

    
  },
};
</script>


<style lang="scss" scoped>


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
.boton:hover {
  cursor: pointer;
}
.servicios {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
@media(min-width: 768px) {
  .servicios {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 1rem;
  }
}
.servicio {
  text-align: center;
}
.servicio {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconos {
  display: flex;
  height: 150px;
  width: 150px;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--primario);
  border-radius: 50%;
}
.iconos i {
  font-size: 2rem;
  color: #050505;
}
h1 {
  font-size: 1.4rem;
}
h1 span {
  font-size: 1.4rem;
}
h1,
h2,
h3 {
  text-align: center;
}
h2 {
  font-size: 2.4rem;
}
h3 {
  color: var(--secundario);
  font-weight: 400;
  font-size: 1.6rem;
}
.contenedor {
  margin: 0 auto;
  max-width: 1200px;
}
.sombra {
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  -webkit-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 11px 15px -9px rgba(0, 0, 0, 0.63);
}
.formulario {
  background-color: #FFA07A;
  padding: 2rem;
  border-radius: 10px;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
.formulario legend {
  text-align: center;
  font-size: 1.2rem;
  color: #8b0000;
  margin-bottom: 2rem;
  display: block;
  text-transform: uppercase;
  font-weight: 700;
}
@media(min-width: 768px) {
  .formulario {
    max-width: 800px;
    margin: 0 auto;
  }
}
.contenedor campos {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.campo {
  margin-bottom: 1rem;
  width: 100%;
}
@media(min-width: 480px) {
  .campo {
    display: flex;
    align-items: center;
  }
}
@media(min-width: 768px) {
  .campo {
    flex: 0 0 calc(50% - 0.5rem);
  }
}
.campo label {
  color: #fcf9f9;;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}
@media(min-width: 480px) {
  .campo label{
    flex: 0 0 90px;
  }
}
.campo input[type="text"],
.campo input[type="tel"],
.campo input[type="email"],
.campo textarea {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
}
@media(min-width: 768px) {
  :is(.campo)
  :is(
    input[type="text"],
    input[type="text"],
    input[type="tel"],
    input[type="email"],
    textarea) {
      flex: 1;
    }
}
.w-100 {
  flex: 0 0 100%;
}
.campo textarea {
  height: 4rem;
}
.enviar {
  display: flex;
  justify-content: flex-end;
  color : #8b0000;
}

.contenido-hero {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contenido-hero h2,
.contenido-hero p {
  color: #fcf9f9;;
}

</style>