<script setup>
defineProps({
    title: String,
    text1: String,
    image: String,
    text2: String,
    phrase: String,
    pet: Boolean
})
</script>

<template>
    <section>
        <LayoutContainer>
            <div class="flex justify-between gap-16 sm:flex-col sm:gap-8">
                <div class="w-full">
                    <h2 v-if="title" v-html="title" class="mb-8 sm:mb-4"></h2>
                    <div v-if="text1" v-html="text1"></div>
                </div>
                <img v-if="image" :src="image" class="max-w-[560px] w-full rounded-[24px] sm:rounded-[16px]" alt="Foto">
            </div>
            <section v-if="text2" v-html="text2" class="pt-20 sm:pt-12"></section>
        </LayoutContainer>
        <div v-if="phrase" class="border-t border-b border-light-gray py-8 mt-32 sm:mt-20">
            <LayoutContainer>
                <div class="flex items-center justify-between sm:flex-col sm:gap-4 gap-10">
                    <VectorsMemorialPawLeft v-if="pet" />
                    <VectorsMemorialPlantLeft v-else />
                    <h3 class="font-serif text-center !text-[80px] sm:!text-5xl">{{ phrase }}</h3>
                    <VectorsMemorialPawRight v-if="pet" />
                    <VectorsMemorialPlantRight v-else />
                </div>
            </LayoutContainer>
        </div>
    </section>
</template>