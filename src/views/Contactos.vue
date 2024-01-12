<template>
  <div class="main-container" style="background-color: #292727;">
    <Navbar :logo="logo_src" :alt="app_name" />
    <!-- Start Map Section -->
    <section class="pad-t30">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="map-container">
              <br><br>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.191761578478!2d-8.59787078932235!3d41.56509418483516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24530c1657782f%3A0xfaccdc58d39b7743!2zRXNwYcOnb3MgTWlyYW5kYSAtIE1vYmlsacOhcmlvIEUgRGVjb3Jhw6fDo28sIExkYQ!5e0!3m2!1spt-PT!2spt!4v1701860917178!5m2!1spt-PT!2spt" width="1280px" height="550px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Map Section -->
  
      <!-- Start Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <br>
            <br>
            <h4 class="AlignLeftContactos">Contacte-nos</h4>
            <p class="AlignLeftContactos">──────</p>
            <div class="row">
              <div class="col-md-4">
                <div class="AlignLeftInfo">
                  <p>Espaços Miranda Lda.</p>
                  <br>
                  <p>
                    R. das Termas de Eirogo, nº291 <br>
                    4750-461 Galegos Sta. Maria - Barcelos <br>
                    Braga - Portugal
                  </p>
                  <p>
                    <br>
                    lat: 41.565252
                    <br>
                    lng: -8.595256
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="AlignMiddleEmail">
                  <p>
                    Email: <a href="mailto:geral@espacosmiranda.com" class="contact-link">geral@espacosmiranda.com</a>
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="AlignRightCellphone">
                  <p style="margin-right: 178px;">Tel: <a href="tel:253813156" class="contact-link">253 813 156</a></p>
                  <p>(Chamada para a rede fixa nacional)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"

export default {
  name: "Contactos",

  components: {
    Navbar,
  },

  data() {
    return  {
      logo_src: "/img/logo.png",
      app_name: "Espaços Miranda" 
    }
  }
}
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';

  .map-container {
    text-align: center;
  }

  .contact-section {
    text-align: center;
    color: white;
    position: relative;
    z-index: 1;
  }

  .contact-link {
    color: #b49660;
  }

  .AlignLeftContactos {
    color: #b49660;
    text-align: left;
    
    font-size: 26px;
  }

  .AlignLeftInfo {
    text-align: left;
    margin-left: 30px;
    font-size: 20px;
  }

  .AlignMiddleEmail {
    text-align: center;
    font-size: 20px;
  }

  .AlignRightCellphone {
    text-align: right;
    font-size: 20px;
    margin-right: 30px;
  }
</style>