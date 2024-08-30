<template>
  <div class="h-max p-4">
    <div class="w-full flex justify-center p-5 flex-col items-center">
      <div class="w-full flex flex-col justify-center items-center">
        <img src="../../images/food-divider-1.svg" alt="" />
        <h1
          class="text-3xl md:text-4xl grow-0 w-full didact-gothic-regular flex items-center before:content-[' '] before:mr-2 md:before:mr-5 before:h-[1px] before:grow before:bg-zinc-600 after:content-[' '] after:ml-2 md:after:ml-5 after:h-[1px] after:grow after:bg-zinc-600"
        >
          Carta de Platos
        </h1>
        <img src="../../images/food-ender-1.svg" alt="" />
      </div>
      <p class="text-lg text-justify py-5 px-10">
        Ofrecemos un menú variado con nuestras especialidades en delicioso Pollo
        a la brasa 7 sabores y los crocantes chicharrones de pollo, disponibles
        para disfrutar en nuestros locales o a través de nuestro servicio de
        entrega a domicilio.
      </p>
    </div>
    <pv-tabs value="0">
      <div class="flex w-full justify-center">
        <pv-tab-list>
          <pv-tab class="text-orange-500 text-lg" value="0"
            >Los 7 Favoritos</pv-tab
          >
          <pv-tab class="text-orange-500 text-lg" value="1">Carta</pv-tab>
          <pv-tab class="text-orange-500 text-lg" value="2">Bebidas</pv-tab>
        </pv-tab-list>
      </div>
      <pv-tab-panels>
        <pv-tab-panel value="0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="foodItem in topSevenFavorites"
              class="flex items-center justify-evenly shadow-md rounded-md p-3 border-zinc-100 border"
            >
              <img class="w-1/3" :src="foodItem.imageUrl" />
              <div class="flex flex-col justify-center items-center">
                <span class="text-lg font-medium text-black">
                  {{ foodItem.name }}</span
                >
                <span
                  class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full"
                >
                  {{ currency.symbol + "" + foodItem.price }}
                </span>
              </div>
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel value="1">
          <div
            class="w-full p-3 flex justify-center items-center font-semibold"
          >
            <h1 class="text-xl">Chaufa a la Carta!</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="menuItem in chaufaItems"
              class="flex items-center justify-evenly shadow-md rounded-md p-3 border-zinc-100 border"
            >
              <img class="w-1/3" :src="menuItem.imageUrl" />
              <div class="flex flex-col justify-center items-center">
                <span class="text-lg font-medium text-black">
                  {{ menuItem.name }}</span
                >
                <span
                  class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full"
                >
                  {{ currency.symbol + "" + menuItem.price }}
                </span>
              </div>
            </div>
          </div>
          <div
            class="w-full p-3 flex justify-center items-center font-semibold"
          >
            <h1 class="text-xl">Sopas</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="menuItem in soupItems"
              class="flex items-center justify-evenly shadow-md rounded-md p-3 border-zinc-100 border"
            >
              <img class="w-1/3" :src="menuItem.imageUrl" />
              <div class="flex flex-col justify-center items-center">
                <span class="text-lg font-medium text-black">
                  {{ menuItem.name }}</span
                >
                <span
                  class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full"
                >
                  {{ currency.symbol + "" + menuItem.price }}
                </span>
              </div>
            </div>
          </div>
        </pv-tab-panel>
        <pv-tab-panel value="2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div
              v-for="foodItem in drinks"
              class="flex items-center justify-evenly shadow-md rounded-md p-3 border-zinc-100 border"
            >
              <img class="w-1/3" :src="foodItem.imageUrl" alt="Mostrito" />
              <div class="flex flex-col justify-center items-center">
                <span class="text-lg font-medium text-black">
                  {{ foodItem.name }}</span
                >
                <span
                  class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full"
                >
                  {{ currency.symbol + "" + foodItem.price }}
                </span>
              </div>
            </div>
          </div>
        </pv-tab-panel>
      </pv-tab-panels>
    </pv-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface FoodItem {
  imageUrl: string;
  price: number;
  name: string;
}

const availableCurrencies = ref([
  { symbol: "S/.", name: "PEN" },
  { symbol: "$", name: "USD" },
]);
const currency = ref(availableCurrencies.value[0]);

const topSevenFavorites = ref([
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/chicharron-pollo.jpg",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/pollo-brasa.jpg",
    name: "1/4 de Pollo a la Brasa",
    price: 27,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/mostrito.jpg",
    name: "Mostrito a la Brasa",
    price: 27,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/milanesa.jpg",
    name: "Milanesa de Pollo",
    price: 30,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/lomo-saltado.jpg",
    name: "Lomo Saltado",
    price: 24,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/tallarin.jpg",
    name: "Tallarin Saltado",
    price: 24,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/chaufa.jpg",
    name: "Arroz Chaufa",
    price: 24,
  },
] as Array<FoodItem>);

const chaufaItems = ref([
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Aeropuerto_30042010.JPG",
    name: "Aeropuerto pollo",
    price: 18,
  },
  {
    imageUrl:
      "https://www.comedera.com/wp-content/uploads/2022/05/aereopuero-receta-peruana-500x500.jpg",
    name: "Aeropuerto carne",
    price: 20,
  },
  {
    imageUrl:
      "https://elchaparral.com.pe/archivos/producto/56-54-tallarin-saltado-de-pollo-muestra.png",
    name: "Tallarín criollo pollo",
    price: 20,
  },
  {
    imageUrl:
      "https://img.freepik.com/fotos-premium/comida-peruana-pollo-saltado-papas-fritas-pollo-sazonado-cebollas-tomates-verduras-asadas-arros-blancos-plato-blanco_136753-120.jpg",
    name: "Pollo saltado",
    price: 20,
  },
  {
    imageUrl: "https://rikotonchicken.pe/wp-content/uploads/2023/06/05.png",
    name: "Tallarín criollo carne",
    price: 22,
  },
  {
    imageUrl:
      "https://www.record.com.pe/wp-content/uploads/2021/07/Lomo-Saltado-1.png",
    name: "Lomo saltado",
    price: 22,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/22/ac/a1/pechuga-de-pollo-a-la.jpg",
    name: "Pechuga plancha",
    price: 22,
  },
  {
    imageUrl:
      "https://www.madamtusan.com.pe/Multimedia/productos/twitter/TALLARINDEPOLLOENTROZOSCONVERDURAS_V1.PNG",
    name: "Tallarín c/ verduras (fideo frito + 3 soles)",
    price: 22,
  },
] as Array<FoodItem>);

const soupItems = ref([
  {
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-prod/TrbaakvbkufSLgX6S-CaldoSinPresa.jpg",
    name: "Caldo sin presa",
    price: 10,
  },
  {
    imageUrl:
      "https://cdn0.recetasgratis.net/es/posts/5/1/4/sopa_a_la_minuta_de_pollo_75415_orig.jpg",
    name: "Sopa minuta pollo",
    price: 15,
  },
  {
    imageUrl:
      "https://w7.pngwing.com/pngs/47/302/png-transparent-chicken-soup-solyanka-pea-soup-cafe-chicken-soup-food-animals-thumbnail.png",
    name: "Sustancia pollo",
    price: 15,
  },
  {
    imageUrl:
      "https://w7.pngwing.com/pngs/567/952/png-transparent-chicken-soup-chicken-sandwich-wrap-chick-fil-a-chicken-meat-soup-soup-food-recipe.png",
    name: "Dieta de pollo",
    price: 15,
  },
  {
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-prod/nhCvbEpcgADbu2fGz-CHINO%20WONG-45.jpg",
    name: "Sopa de kion",
    price: 15,
  },
  {
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/7c/a8/ce/caldo-de-gallina-en-corral.jpg",
    name: "Caldo de gallina",
    price: 16,
  },
  {
    imageUrl:
      "https://recetas.7maravillasgastronomicas.com/wp-content/uploads/2013/09/sustancia-de-carne.jpg",
    name: "Sustancia carne",
    price: 17,
  },
  {
    imageUrl:
      "https://express.donangelo.pe/wp-content/uploads/2022/08/sopa-a-la-minuta.jpg",
    name: "Sopa minuta carne",
    price: 17,
  },
] as Array<FoodItem>);

const drinks = ref([
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKi_2SMFcDEdn-NDf1ZlazJfpkMbMFUdVag&s",
    name: "Chicha Morada",
    price: 15,
  },
  {
    imageUrl:
      "https://png.pngtree.com/png-vector/20231211/ourlarge/pngtree-brazilian-lemonade-pitcher-isolated-png-image_10861720.png",
    name: "Limonada",
    price: 15,
  },
  {
    imageUrl:
      "https://www.happydrinkdelivery.com/wp-content/uploads/2022/04/INKA-COLA-500-ML.jpg",
    name: "Inka Cola",
    price: 4,
  },
  {
    imageUrl:
      "https://www.coca-cola.com/content/dam/onexp/co/es/brands/coca-cola/coca-cola-original/ccso_600ml_750x750.png",
    name: "Coca Cola",
    price: 4,
  },
  {
    imageUrl:
      "https://w7.pngwing.com/pngs/531/213/png-transparent-earl-grey-tea-roman-chamomile-anise-infusion-tea.png",
    name: "Té/Anis",
    price: 5,
  },
  {
    imageUrl:
      "https://dojiw2m9tvv09.cloudfront.net/53648/product/sintitulo6493.png",
    name: "Agua con Gas",
    price: 4,
  },
  {
    imageUrl:
      "https://plazavea.vteximg.com.br/arquivos/ids/312677-512-512/agua-mineral-san-mateo-sin-gas-botella-600ml.jpg",
    name: "Agua sin Gas",
    price: 4,
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/Fabrizio-2025/image-store/main/orlandos/pisco%20y%20vino.png",
    name: "Pisco y Vinos",
    price: 28,
  },
] as Array<FoodItem>);
</script>
<style scoped></style>
