<script setup>
defineProps({
    title: String,
    text: String,
    button: String,
    url: String,
    image: String,
    phrase: String
})
</script>

<template>
    <section
        :style="`background: linear-gradient(45deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .24) 100%), url('${image}') center/cover no-repeat;`"
        class="flex items-end pt-[400px] pb-24 sm:pt-[200px] sm:pb-16"
        id="inicio"
    >
        <LayoutContainer>
            <div class="flex justify-between sm:flex-col gap-8 sm:gap-3">
                <h1 class="text-white max-w-[640px] w-full">{{ title }}</h1>
                <div class="max-w-[460px] w-full flex flex-col justify-between gap-8 border-l-[4px] border-yellow pl-10 mb-3 sm:pl-0 sm:border-0">
                    <p class="text-white">{{ text }}</p>
                    <UiButton arrow full :href="url">{{ button }}</UiButton>
                </div>
            </div>
        </LayoutContainer>
    </section>
    <section class="phrase border-b border-light-gray overflow-hidden">
        <LayoutContainer>
            <div class="relative border-l border-light-gray py-16 pl-20 sm:pl-14 sm:py-10">
                <VectorsHomeQuote class="absolute left-0 translate-x-[-64px] top-10 sm:top-6 sm:translate-x-[-50%]" />
                <div v-html="phrase"></div>
            </div>
        </LayoutContainer>
    </section>
</template>

<style lang="postcss">
.phrase {
    p {
        &,
        & * {
            @apply font-medium text-2xl sm:text-base;
            strong {
                @apply !text-purple;
            }
        }
    }
}
</style>