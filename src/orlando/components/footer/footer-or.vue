<template>
  <div
    class="w-full bg-black h-max flex justify-center items-center flex-col p-5"
  >
    <div class="flex flex-row justify-evenly gap-2">
      <div class="w-1/3 p-4">
        <div>
          <h1 class="text-xl underlinediv text-white">Nosotros</h1>
        </div>
        <div>
          <p class="text-white text-justify my-1 text-xs md:text-base">
            En Orlando, con más de 50 años de tradición en el mercado, 
            nos enorgullece ofrecer el chicharrón de pollo más crocante y 
            riquísimo, junto con el mejor pollo a la brasa de Nasca. Todo 
            esto viene acompañado de nuestro auténtico ají casero, hecho con la receta secreta de la casa.
          </p>
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div>
          <h1 class="text-xl underlinediv text-white">Servicios</h1>
        </div>
        <div>
          <p class="text-white text-justify my-1 text-xs md:text-base">
            Ofrecemos un menú variado con nuestras especialidades en delicioso
            Pollo a la brasa 7 sabores y los crocantes chicharrones de pollo,
            disponibles para disfrutar en nuestros locales o a través de nuestro
            servicio de entrega a domicilio.
          </p>
        </div>
      </div>
      <div class="w-1/3 p-4">
        <div>
          <h1 class="text-xl underlinediv text-white">Contáctanos</h1>
        </div>
        <div>
          <p class="text-white text-justify my-1 text-xs md:text-base">
            Visítanos en nuestros locales en Vista Alegre y Nasca, donde siempre
            te recibiremos con los brazos abiertos. Puedes contactarnos para
            realizar pedidos o reservas, y seguirnos en nuestras redes sociales
            para estar al tanto de nuestras promociones y novedades.
          </p>
          <div class="flex justify-end gap-2">
            <a
              href="https://www.facebook.com/PolleriaOrlando?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                class="w-8 h-8"
              />
            </a>
            <a
              href="https://wa.me/51978800056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                class="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col items-center text-sm">
      <span class="text-white">Esta pagina fue creada por Kipuh!</span>
      <span class="text-white">
        © 2024, Orlandos | Todos los derechos reservados
      </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.underlinediv {
  border-bottom: 3px solid #ffcc00;
  padding-bottom: 2px;
}
</style>
