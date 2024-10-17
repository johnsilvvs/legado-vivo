<script setup>
defineProps({
    title: String,
    questions: Array
})

const open = ref("")
</script>

<template>
    <section class="pt-32 sm:pt-20" id="faq">
        <LayoutContainer>
            <h2 class="mb-16 sm:mb-10 text-center">{{ title }}</h2>
            <div class="flex flex-col gap-6 sm:gap-4 max-w-[940px] w-full mx-auto">
                <dl
                    v-for="i, index in questions"
                    :key="index"
                >
                    <dt
                        class="py-6 px-8 sm:p-4 flex items-center justify-between border border-light-gray cursor-pointer"
                        @click="open === i.pergunta ? open = '' : open = i.pergunta"
                    >
                        <h6>{{ i.pergunta }}</h6>
                        <VectorsHomeArrow
                            class="sm:w-6 sm:h-6"
                            :class="{ 'scale-y-[-1]': open === i.pergunta }"
                        />
                    </dt>
                    <dd
                        class="hidden border-l border-b border-r border-light-gray p-8 sm:py-6 sm:px-4"
                        :class="{ '!block': open === i.pergunta }"
                    >
                        <p v-html="i.resposta"></p>
                    </dd>
                </dl>
            </div>
        </LayoutContainer>
    </section>
</template>