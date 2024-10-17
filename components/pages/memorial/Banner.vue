<script setup>
defineProps({
    name: String,
    year: String,
    description: String,
    image: String,
    pet: Boolean
})
</script>

<template>
    <section class="bg-purple pt-[160px] sm:pt-28 relative before:absolute before:z-20 before:bottom-0 before:left-0 before:bg-white before:w-full before:h-20 after:absolute after:z-20 after:bottom-20 after:left-0 after:bg-yellow after:w-full after:h-0.5 mb-32 sm:mb-20 sm:after:hidden sm:before:hidden overflow-hidden">
        <div v-if="pet" class="absolute top-0 left-0 w-full h-full z-10 opacity-10" style="background: url('/img/bg-dog.png') top/contain repeat;"></div>
        <LayoutContainer>
            <div class="flex relative z-30 gap-16 sm:flex-col sm:gap-8">
                <div class="hidden sm:block w-full">
                    <h1 class="text-white mb-4 pb-4 border-b border-[rgba(255,255,255,.32)] !text-5xl font-serif">{{ name }}</h1>
                    <h6 v-if="year" class="text-white">{{ year }}</h6>
                </div>
                <figure class="min-w-[320px] max-w-[320px] w-full h-[420px] sm:h-[320px] relative">
                    <img v-if="image" class="w-full h-full object-cover rounded-[16px] shadow-[0_16_48px_rgba(0,0,0,.24)]" :src="image" :alt="name">
                    <img v-if="pet" class="absolute top-0 right-0 translate-y-[-50%] translate-x-[50%]" src="/img/dog.png" alt="Pet">
                </figure>
                <div class="pb-32 sm:pb-12 w-full">
                    <div class="sm:hidden">
                        <h1 class="text-white mb-6 pb-6 border-b border-[rgba(255,255,255,.32)] !text-[80px] font-serif">{{ name }}</h1>
                        <h6 v-if="year" class="mb-4 text-white">{{ year }}</h6>
                    </div>
                    <p v-if="description" v-html="description" class="text-white"></p>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>