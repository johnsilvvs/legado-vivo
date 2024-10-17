<script setup>
defineProps({
    title: String,
    text: String,
    image: String
})
</script>

<template>
    <section class="pt-32 sm:pt-20" id="sobre">
        <LayoutContainer>
            <div class="flex justify-between gap-8 sm:flex-col">
                <img class="max-w-[460px] w-full object-cover" :src="image" alt="Foto">
                <div class="max-w-[580px] w-full">
                    <h2 class="mb-8 sm:mb-4 text-black" v-html="title"></h2>
                    <div v-html="text"></div>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>