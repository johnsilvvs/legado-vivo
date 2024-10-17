<script setup>
defineProps({
    title: String,
    numbers: Array,
    subtext: String
})
</script>

<template>
    <section class="cf py-32 sm:py-20 mt-32 sm:mt-20 bg-purple" id="como-funciona">
        <LayoutContainer>
            <div class="flex justify-between sm:flex-col gap-10">
                <h2 class="sticky top-32 max-w-[330px] sm:max-w-full w-full sm:relative sm:top-0">{{ title }}</h2>
                <div class="max-w-[760px] w-full">
                    <ul class="flex flex-col">
                        <li
                            v-for="i, index in numbers"
                            :key="index"
                            :class="{ 'before:!bg-purple': index === numbers.length - 1 }"
                            class="flex items-center gap-12 sm:gap-4 sm:flex-col sm:items-start relative before:absolute before:w-0.5 before:h-full before:bg-[rgba(255,255,255,.32)] before:z-10 before:top-8 before:left-[60px] pb-10 sm:pb-8 before:sm:hidden"
                        >
                            <h4 class="bg-white !text-purple flex items-center justify-center rounded-[16px] min-w-[120px] max-w-[120px] h-[120px] sm:min-w-[64px] sm:max-w-[64px] sm:h-16 sm:!text-2xl text-center relative z-20">{{ index < 9 ? "0" : "" }}{{ index + 1 }}.</h4>
                            <p class="w-full">{{ i.texto }}</p>
                        </li>
                    </ul>
                    <div v-if="subtext" class="pl-[168px] sm:pl-0 mt-16 sm:mt-12" v-html="subtext"></div>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>

<style lang="postcss">
.cf {
    *:not(h4) {
        @apply !text-white;
    }
}
</style>