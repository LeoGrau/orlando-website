<template>
    <pv-tabs value="0" >
        <div class="flex w-full justify-center" >
        <pv-tab-list >
            <pv-tab class="text-orange-500 text-lg" value="0">Los 7 Favoritos</pv-tab>
            <pv-tab class="text-orange-500 text-lg" value="1">Carta</pv-tab>
            <pv-tab class="text-orange-500 text-lg" value="2">Bebidas</pv-tab>
        </pv-tab-list></div>
        <pv-tab-panels>
            <pv-tab-panel value="0">
                <div class="w-full flex justify-evenly my-3">
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40 h-max"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/398027037_837183284768784_4333519193526618187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yjj95IYpYHEQ7kNvgH3Uz1w&_nc_ht=scontent.fpio3-1.fna&oh=00_AYCl8ftfycC1tiryZNyiMRkK1QHrOnYvcRk8WdvQrInj1Q&oe=66D02DD7"
                            alt="Chicharron de Pollo">
                        <span class="text-lg font-medium text-black" > 1/4 Chicharron de Pollo</span>
                    </div>
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/337687435_875489670188295_2880514990359156885_n.png?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XY3GoDIRKsQQ7kNvgGgi1GD&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAjar5Fm8Gs0_UnjzkQgvbEIe18NdmyihH-NQ_LWhvuLA&oe=66D049F0"
                            alt="Pollo a la Brasa">
                        <span class="text-lg font-medium text-black">1/4 Pollo a la Brasa</span>
                    </div>
                </div>
                <div class="w-full flex justify-evenly my-3">
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/447193791_956585819495196_2052375901242093334_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j0if0x63_ZkQ7kNvgFb8Yh9&_nc_ht=scontent.fpio3-1.fna&_nc_gid=A8KvkGQGmaBt-8vgabRaKG_&oh=00_AYBGzciQGyfFaPtsAf2VYkwXQyB-J2uqbGxbSa2ZwPW39A&oe=66D04D70"
                            alt="Mostrito">
                        <span class="text-lg font-medium text-black">Mostrito a la Brasa</span>
                    </div>
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/434487798_921349746352137_566529925219583146_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ozuOgS8UNzsQ7kNvgH4iaNM&_nc_ht=scontent.fpio3-1.fna&oh=00_AYDBTl2p0UsojOQmbhIyssKm31V28askoD_lUMUKgzdO2A&oe=66D02E88"
                            alt="Milanesa de Pollo">
                        <span class="text-lg font-medium text-black">Milanesa de Pollo</span>
                    </div>
                </div><div class="w-full flex justify-evenly my-3">
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/449958789_976410930846018_4192329271915356286_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7eDBMqw3cJMQ7kNvgG6oGUN&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAjxeL_vifKXjY4uCAmml4l_28aLFCBnKY86PIfXdmHIw&oe=66D01C47"
                            alt="Tallarin Saltado">
                        <span class="text-lg font-medium text-black">Tallarin Saltado</span>
                    </div>
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/454266618_995463712274073_8263001984218094649_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sChUaFQwKTUQ7kNvgFpM8-t&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAq1pfY9cUO3m3Na6TZ_4rmpY7yKnPx2Sgk6IOAe_40ZQ&oe=66D0330E"
                            alt="Sopa Wantan">
                        <span class="text-lg font-medium text-black">Sopa Wantan</span>
                    </div>
                </div>
                <div class="w-full flex justify-evenly my-3">
                    <div class="w-3/12 flex items-center justify-evenly h-40 shadow-lg rounded-md">
                        <img class="w-40"
                            src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/440404127_937535644733547_4952781826825298586_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tEK5b3Siv_MQ7kNvgGP22m6&_nc_ht=scontent.fpio3-1.fna&oh=00_AYDhlAMXJs6eA0llGQ5bBqX1ATeiTv6f_mPjv0V4lKDQyg&oe=66D02F56"
                            alt="Arroz Chaufa de Pollo">
                        <span class="text-lg font-medium text-black">Arroz Chaufa de Pollo</span>
                    </div>
                    
                </div>
            </pv-tab-panel>
            <pv-tab-panel value="1">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam
                    eius modi.
                </p>
            </pv-tab-panel>
            <pv-tab-panel value="2">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                    est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus.
                </p>
            </pv-tab-panel>
        </pv-tab-panels>
    </pv-tabs>
</template>
<script setup lang="ts">
</script>
<style></style>
