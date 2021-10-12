<template>
  <Basiclayouts>
    <div id="about" class="about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="about-box">
              <h2>IMPORTANTE</h2>
              <h3>Términos y Condiciones de la plataforma</h3>
              <h4>* Tratamiento de datos personales</h4>
              <p>
                De conformidad con la Ley 1581 de 2012 (protección de datos
                personales) y mediante el registro del formulario de
                recomendación, autoriza la recolección, almacenamiento y uso de
                los datos allí solicitados, con la finalidad de adelantar el
                trámite de revisión de la información, así como para publicarlos
                en la plataforma, con el fin de ser contactado por futuros
                clientes que hagan uso de ella. <br />
                Como titular de información tiene derecho a conocer, actualizar
                y rectificar sus datos personales, solicitar prueba de
                autorización otorgada para su tratamiento, ser informado sobre
                el uso que se ha dado a los mismos, presentar quejas ante la SIC
                por infracción a la ley, revocar la autorización, solicitar la
                supresión de sus datos en los casos en que sea procedente y
                acceder en forma gratuita a los mismos. <br />
                Si requiere información adicional no dude en contactarse Mail:
                <b>contactenos@selorecomiendo.com.co </b>
              </p>
              <h4>* Condiciones</h4>
              <p>
                Apreciado Usuario: el sitio web de SE LO RECOMIENDO (en adelante
                el Sitio Web) tiene como función principal proveer información
                sobre contactos o recomendados quienes cotizarán o prestarán un
                servicio domiciliario de así requerirlo; sin embargo una vez
                contactado el recomendado, no se genera ninguna relación
                laboral, comercial o responsabilidad por los sericios prestados.
              </p>

              <router-link to="./CondicionesUso.pdf">Leer más </router-link>
              <!-- pendiente vincular el pdf -->
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 padding_rl">
            <div class="about-box_img">
              <figure><img src="@/assets/img/civil01.jpg" alt="#" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Basiclayouts>
</template>

<script>
import Basiclayouts from "@/layouts/Basiclayouts.vue";
// import Home from './Home.vue'
import Vinculate from "./Vinculate.vue";
import Contactenos from "./Contactenos.vue";

export default {
  name: "Terminos",
  components: {
    Basiclayouts,
    // Home,
    Vinculate,
    Contactenos,
  },
};

// keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",U="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+j,CLICK_DATA_API:"click"+x+j},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'}
</script>

<style lang="scss" scoped>
.slider_section {
  padding: 90px 0;
  background: #ececf0;
}

@media (min-width: 1200px) and (max-width: 1500px) {
  .banner-main .carousel-caption {
    background: transparent;
  }
  .logo {
    padding-bottom: 6px;
    margin-top: 0px;
  }
  .text-bg h1 {
    font-size: 66px;
  }

  .about .about-box::after {
    background: inherit;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .mean-last {
    display: none !important;
  }
  .logo {
    padding-bottom: 6px;
  }
  .main-menu ul > li a {
    padding: 11px 13px;
    font-size: 16px;
  }

  .text-bg h1 {
    font-size: 43px;
    line-height: 54px;
    padding-bottom: 10px;
  }
  .text-bg span {
    padding-bottom: 13px;
  }
  .submit {
    padding: 17px 0px;
    max-width: 231px;
  }
  .Search_btn {
    font-size: 18px;
    max-width: 173px;
  }
  .about .about-box::after {
    background: inherit;
  }
  .vegetable_shop p {
    font-size: 14px;
    line-height: 25px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .logo {
    padding-bottom: 6px;
  }
  .text-bg h1 {
    font-size: 55px;
    line-height: 73px;
  }
  .Vegetable .Vegetable_fom {
    width: 55%;
  }
  .Search_btn {
    font-size: 17px;
    max-width: 145px;
  }
  .text-bg a {
    max-width: 147px;
    margin-bottom: 30px;
  }
  .margin_top {
    margin-top: 0px;
  }
  .main-menu ul > li a {
    padding: 8px 5px;
    font-size: 13px;
  }
  .margin_top span {
    top: 44%;
  }
  .about .about-box::after {
    background: inherit;
  }
  .vegetable_shop p {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 18px;
  }
  .clients .titlepage h2 {
    margin-bottom: 0;
  }
  .vegetable_shop h3 {
    font-size: 24px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .mean-last {
    display: none !important;
  }
  .logo {
    padding-bottom: 6px;
  }
  .main-menu ul > li a {
    padding: 11px 13px;
    font-size: 16px;
  }

  .text-bg h1 {
    font-size: 43px;
    line-height: 54px;
    padding-bottom: 10px;
  }
  .text-bg span {
    padding-bottom: 13px;
  }
  .submit {
    padding: 17px 0px;
    max-width: 231px;
  }
  .Search_btn {
    font-size: 18px;
    max-width: 173px;
  }
  .about .about-box::after {
    background: inherit;
  }
  .vegetable_shop p {
    font-size: 14px;
    line-height: 25px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .logo {
    padding-bottom: 6px;
  }
  .text-bg h1 {
    font-size: 55px;
    line-height: 73px;
  }
  .Vegetable .Vegetable_fom {
    width: 55%;
  }
  .Search_btn {
    font-size: 17px;
    max-width: 145px;
  }
  .text-bg a {
    max-width: 147px;
    margin-bottom: 30px;
  }
  .margin_top {
    margin-top: 0px;
  }
  .main-menu ul > li a {
    padding: 8px 5px;
    font-size: 13px;
  }
  .margin_top span {
    top: 44%;
  }
  .about .about-box::after {
    background: inherit;
  }
  .vegetable_shop p {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 18px;
  }
  .clients .titlepage h2 {
    margin-bottom: 0;
  }
  .vegetable_shop h3 {
    font-size: 24px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .slider_section {
    padding: 50px 0;
  }
  .logo {
    margin-top: 0px;
  }
  .mean-container .mean-bar {
    margin-top: 7px;
  }
  .header {
    background: #efefef;
    padding: 20px 0px 20px 0px;
  }
  .menu-area {
    float: inherit;
  }
  .text-bg h1 {
    padding-top: 0px;
  }
  .text-img {
    padding-top: 30px;
  }
  .Search_btn {
    font-size: 18px;
    max-width: 191px;
  }
  .about .about-box::after {
    background: inherit;
  }
  .clients .titlepage h2 {
    margin-bottom: inherit;
  }
  .vegetable_shop p {
    margin-bottom: 30px;
  }
  .margin_top span {
    top: 44%;
  }

  .margin_top {
    margin-top: 30px;
  }
  .testimonial_cont {
    padding: 23px 30px;
  }
  .cross_inner h3 {
    padding-left: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .testimonial_cont p {
    padding-left: 0px;
    font-size: 16px;
    line-height: 20px;
  }
  ul.top_icon li a {
    padding: 0px 13px;
  }
}
@media (max-width: 575px) {
  .menu-area {
    float: inherit;
  }
  .header {
    padding: 20px 0px 0px 0px;
    background: #efefef;
  }
  .mean-last {
    display: none !important;
  }
  .logo {
    float: inherit;
    margin-top: 0px;
  }
  .slider_section {
    padding: 10px 0px 40px 0px;
  }
  .text-bg span {
    font-size: 30px;
    line-height: 36px;
  }

  .text-bg h1 {
    padding-bottom: 15px;
    font-size: 39px;
    line-height: 52px;
  }

  .text-bg p {
    font-size: 16px;
    line-height: 24px;
  }
  .Vegetable .Vegetable_fom {
    padding: 15px 15px;
    width: 68%;
    font-size: 14px;
  }
  .Search_btn {
    font-size: 13px;

    max-width: 71px;
  }

  .text-bg a {
    margin-right: 4px;
    font-size: 13px;
    max-width: 104px;
  }
  .images_box {
    margin: 30px 0;
  }

  .about .about-box h2 {
    font-size: 34px;
  }
  .about .about-box p {
    padding: 20px 0px;
    font-size: 16px;
    line-height: 25px;
  }
  .about .about-box::after {
    position: inherit;
  }
  .titlepage h2 {
    line-height: 40px;
    font-size: 31px;
  }
  .vegetable_shop h3 {
    font-size: 25px;
  }

  .vegetable_shop p {
    margin-bottom: 30px;
  }
  .margin_top {
    margin-top: 30px;
  }
  .vegetable_img span {
    display: none;
  }
  .margin_top span {
    display: none;
  }
  .testimonial_cont {
    padding: 34px 20px;
  }
  .cross_inner h3 {
    padding-left: 0px;
    padding-top: 20px;
    padding-bottom: 25px;
  }
  .testimonial_cont p {
    padding-left: 0px;
    font-size: 15px;
    line-height: 21px;
  }

  .clients .titlepage h2 {
    margin-bottom: 0px;
  }
  ul.loca {
    margin-bottom: 30px;
  }
}
.text-bg {
  text-align: left;
}
.text-bg span {
  font-size: 41px;
  line-height: 51px;
  color: #020500;
}
.text-bg h1 {
  color: #8b0000;
  padding-top: 10px;
  font-size: 71px;
  line-height: 85px;
  padding-bottom: 45px;
  font-weight: bold;
}
.text-bg p {
  font-size: 20px;
  display: block;
  color: #020500;
  line-height: 30px;
  padding-bottom: 50px;
  font-weight: 500;
}

.text-bg a {
  font-size: 16px;
  border: #1a1b19 solid 1px;
  background-color: #1a1b19;
  color: #fff;
  padding: 9px 0px;
  max-width: 171px;
  width: 100%;
  display: inline-block;
  text-align: center;

  margin-right: 10px;
}
.text-bg a:hover {
  background-color: #428713;
  border: #428713 solid 1px;
  color: #fff;
}
.text {
  position: inherit;
  text-align: left;
  background: #0fbbad;
  width: 100%;
  bottom: auto;
  padding: 0;
  margin-top: 90px;
}
.img_bg {
  text-align: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
}
.images_box figure {
  margin: 0px;
}
.images_box figure img {
  width: 100%;
}
.carousel-caption {
  position: inherit;
}
.carousel-indicators .active {
  background-color: #1a1b19;
}

.about {
  background-color: #fff;
  box-shadow: #ddd 0px 0px 13px 5px;
  margin: 90px 30px 20px 30px;
}
.about .about-box {
  text-align: left;
  float: right;
  width: 100%;
  max-width: 539px;
  padding: 40px 0;
}

.about .about-box::after {
  position: absolute;
  content: "";
  //  background: url(../images/crros.png);
  height: 244px;
  width: 187px;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
}
.about .about-box h2 {
  font-weight: bold;
  color: #fff;
  line-height: 40px;
  font-size: 45px;
  text-transform: uppercase;
  background: #ff8c00;
  display: inline-block;
  padding: 20px 30px;
}
.about .about-box p {
  font-size: 17px;
  line-height: 28px;
  color: #000;
  padding: 40px 0px;
}

.about .about-box a {
  font-size: 16px;
  border: #070905 solid 1px;
  background-color: #070905;
  color: #fff;
  padding: 9px 0px;
  max-width: 171px;
  width: 100%;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  border-radius: 30px;
}

.about .about-box a:hover {
  background-color: #8b0000;
  border: #8b0000 solid 1px;
  color: #fff;
}
.about .about-box_img figure {
  margin: 0;
}
.about .about-box_img figure img {
  width: 100%;
}
.padding_rl {
  padding: 0;
}
</style>
