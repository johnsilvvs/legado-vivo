<script setup>
defineProps({
    title: String,
    text: String,
    image: String
})
</script>

<template>
    <section
        :style="`background: linear-gradient(0deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .4) 100%), url('${image}') center/cover no-repeat;`"
        class="mb-40 sm:mb-32 pt-[160px] sm:pt-32"
    >
        <LayoutContainer>
            <h1 class="text-center text-white mb-6 sm:mb-4">{{ title }}</h1>
            <p class="text-center text-white">{{ text }}</p>
            <VectorsUtilsArrowScroll class="mx-auto mt-12 sm:mt-4 translate-y-2/4" />
        </LayoutContainer>
    </section>
</template>