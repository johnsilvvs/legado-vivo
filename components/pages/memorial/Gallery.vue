<script setup>
defineProps({
    images: Array
})

const open = ref(false)
const current = ref(0)
</script>

<template>
    <template v-if="images.length">        
        <section class="pt-32 sm:pt-20">
            <LayoutContainer>
                <h2 class="text-center mb-16 sm:mb-10">Galeria de Fotos</h2>
                <ul class="grid grid-cols-4 gap-6 sm:grid-cols-2 sm:gap-4">
                    <li
                        v-for="i, index in images"
                        :key="index"
                    >
                        <button
                            @click="open = true, current = index"
                            type="button"
                            class="relative h-[265px] sm:h-auto overflow-hidden rounded-[12px] before:absolute before:top-0 before:left-0 before:bg-purple before:opacity-0 before:w-full before:h-full hover:before:opacity-80 group"
                        >
                            <img :src="i.foto.sourceUrl" alt="Foto" class="w-full h-full object-cover">
                            <VectorsMemorialZoom class="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100" />
                        </button>
                    </li>
                </ul>
            </LayoutContainer>
        </section>

        <article
            v-if="open"
            class="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center overflow-hidden"
        >
            <button
                class="absolute top-6 xl:top-10 right-6 xl:right-10 z-30 duration-300 w-12 h-12 flex items-center justify-center bg-[#555892]"
                @click="open = false"
                type="button"
            >
                <VectorsNavClose />
            </button>

            <button
                class="absolute top-2/4 translate-y-[-50%] left-6 sm:left-2 z-30"
                @click="current > 0 ? current-- : current = images.length - 1"
                type="button"
            >
                <VectorsMemorialPrev class="sm:w-10" />
            </button>

            <LayoutContainer class="relative z-20 flex items-center justify-center">
                <img
                    class="max-h-full"
                    :src="images[current].foto.sourceUrl"
                    alt="Foto"
                />
            </LayoutContainer>

            <button
                class="absolute top-2/4 translate-y-[-50%] right-6 sm:right-2 z-30"
                @click="current < images.length - 1 ? current++ : current = 0"
                type="button"
            >
                <VectorsMemorialNext class="sm:w-10" />
            </button>

            <div
                @click="open = false"
                class="bg-[rgba(114,117,171,.8)] fixed top-0 left-0 w-full h-full z-10"
            ></div>
        </article>
    </template>
</template>