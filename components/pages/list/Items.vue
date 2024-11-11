<script setup>
defineProps({
    list: Array,
    pet: Boolean,
    button: String
})
</script>

<template>
    <section>
        <LayoutContainer>
            <ul class="grid grid-cols-3 sm:grid-cols-1 sm:gap-y-6 gap-x-6 gap-y-10">
                <li
                    v-for="i, index in list"
                    :key="index"
                    class="px-6 pb-6 pt-20 relative border border-light-gray rounded-[16px]"
                >
                    <figure class="absolute top-0 left-2/4 translate-y-[-50%] translate-x-[-50%] before:h-1 before:w-6 before:bg-purple before:absolute before:bottom-0 before:left-2/4 before:translate-x-[-50%] before:translate-y-[50%] mb-4">
                        <img v-if="i.memorial.foto.sourceUrl" class="w-32 h-32 object-cover rounded-[8px] mx-auto" :src="i.memorial.foto.sourceUrl" :alt="i.title">
                        <img v-if="pet" class="w-10 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]" src="/img/dog.png" alt="Pet" />
                    </figure>
                    <h6 v-if="i.memorial.ano" class="text-center text-gray !text-base mb-2">{{ i.memorial.ano }}</h6>
                    <h4 class="font-serif text-center mb-2">{{ i.title }}</h4>
                    <img class="border border-light-gray p-1 w-32 h-32 mx-auto mb-6" :src="i.memorial.qrCode.sourceUrl" alt="QR Code">
                    <UiButton
                        transparency
                        full
                        blank
                        :href="pet ? `/pets/${i.slug}` : `/memoriais/${i.slug}`"
                    >
                        {{ button }}
                        <VectorsUtilsArrowNewLayer />
                    </UiButton>
                </li>
            </ul>
        </LayoutContainer>
    </section>
</template>
