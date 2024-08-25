<template>
    <div class="h-max p-4">
        <div class="w-full flex justify-center p-5" >
            <h1 class="text-2xl font-bold" >Menu</h1>
        </div>
        <pv-tabs value="0">
            <div class="flex w-full justify-center ">
                <pv-tab-list>
                    <pv-tab class="text-orange-500 text-lg" value="0">Los 7 Favoritos</pv-tab>
                    <pv-tab class="text-orange-500 text-lg" value="1">Carta</pv-tab>
                    <pv-tab class="text-orange-500 text-lg" value="2">Bebidas</pv-tab>
                </pv-tab-list>
            </div>
            <pv-tab-panels>
                <pv-tab-panel value="0">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div v-for="foodItem in topSevenFavorites"
                            class="flex items-center justify-evenly shadow-md  rounded-md p-3 border-zinc-100 border">
                            <img class="w-1/3" :src="foodItem.imageUrl" alt="Mostrito" />
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-lg font-medium text-black">
                                    {{ foodItem.name }}</span>
                                <span
                                    class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full">
                                    {{ currency.symbol + "" + foodItem.price }} </span>
                            </div>
                        </div>
                    </div>
                </pv-tab-panel>
                <pv-tab-panel value="1">
                    
                </pv-tab-panel>
                <pv-tab-panel value="2">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div v-for="foodItem in drinks"
                            class="flex items-center justify-evenly shadow-md  rounded-md p-3 border-zinc-100 border">
                            <img class="w-1/3" :src="foodItem.imageUrl" alt="Mostrito" />
                            <div class="flex flex-col justify-center items-center">
                                <span class="text-lg font-medium text-black">
                                    {{ foodItem.name }}</span>
                                <span
                                    class="text-md flex items-center justify-center text-white font-medium px-5 py-2 bg-red-600 rounded-full">
                                    {{ currency.symbol + "" + foodItem.price }} </span>
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

const availableCurrencies = ref([{ symbol: 'S/.', name: 'PEN' }, { symbol: '$', name: 'USD' }])
const currency = ref(availableCurrencies.value[0])

const topSevenFavorites = ref([
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
        name: "1/4 Chicharron de Pollo",
        price: 24,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/337687435_875489670188295_2880514990359156885_n.png?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XY3GoDIRKsQQ7kNvgGgi1GD&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAjar5Fm8Gs0_UnjzkQgvbEIe18NdmyihH-NQ_LWhvuLA&oe=66D049F0",
        name: "1/4 de Pollo a la Brasa",
        price: 27,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/447193791_956585819495196_2052375901242093334_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j0if0x63_ZkQ7kNvgFb8Yh9&_nc_ht=scontent.fpio3-1.fna&_nc_gid=A8KvkGQGmaBt-8vgabRaKG_&oh=00_AYBGzciQGyfFaPtsAf2VYkwXQyB-J2uqbGxbSa2ZwPW39A&oe=66D04D70",
        name: "Mostrito a la Brasa",
        price: 27,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/434487798_921349746352137_566529925219583146_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ozuOgS8UNzsQ7kNvgH4iaNM&_nc_ht=scontent.fpio3-1.fna&oh=00_AYDBTl2p0UsojOQmbhIyssKm31V28askoD_lUMUKgzdO2A&oe=66D02E88",
        name: "Milanesa de Pollo",
        price: 30,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/449958789_976410930846018_4192329271915356286_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7eDBMqw3cJMQ7kNvgG6oGUN&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAjxeL_vifKXjY4uCAmml4l_28aLFCBnKY86PIfXdmHIw&oe=66D01C47",
        name: "1/4 Chicharron de Pollo",
        price: 24,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7",
        name: "Tallarin Saltado",
        price: 24,
    },
    {
        imageUrl:
            "https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/440404127_937535644733547_4952781826825298586_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tEK5b3Siv_MQ7kNvgGP22m6&_nc_ht=scontent.fpio3-1.fna&oh=00_AYDhlAMXJs6eA0llGQ5bBqX1ATeiTv6f_mPjv0V4lKDQyg&oe=66D02F56",
        name: "Arroz Chaufa de Pollo",
        price: 24,
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
<style scoped>

</style>
