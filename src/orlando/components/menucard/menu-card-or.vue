<template>
<div class="h-max">
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
          <div v-for="foodItem in foodItems"
            class="flex items-center justify-evenly shadow-md  rounded-md p-3 border-zinc-100 border"
          >
            <img
              class="w-1/3"
              :src="foodItem.imageUrl"
              alt="Mostrito"
            />
            <div class="flex flex-col justify-center items-center">
              <span class="text-lg font-medium text-black">
                {{ foodItem.name }}</span
              >
              <span
                class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full"
                > {{ currency.symbol + "" + foodItem.price }} </span
              >
            </div>
          </div>
        </div>
      </pv-tab-panel>
      <pv-tab-panel value="1">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </pv-tab-panel>
      <pv-tab-panel value="2">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus.
        </p>
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

const availableCurrencies = ref([{ symbol: 'S/.', name: 'PEN'}, { symbol: '$', name: 'USD'}])
const currency = ref(availableCurrencies.value[0])

const foodItems = ref([
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
  {
    imageUrl:
      "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
    name: "1/4 Chicharron de Pollo",
    price: 24,
  },
] as Array<FoodItem>);
</script>
<style scoped></style>
