<script setup>
defineProps({
    name: String,
    qrCode: String
})
</script>

<template>
    <section v-if="qrCode" class="pt-32 sm:pt-20">
        <LayoutContainer>
            <div class="flex flex-col items-center">
                <img class="w-[200px] h-[200px] p-2 border border-light-gray mx-auto mb-12 sm:mb-8" :src="qrCode" :alt="name">
                <h2 class="text-center !text-[80px] font-serif sm:!text-5xl">{{ name }}</h2>
                <p class="text-center mt-6 mb-8 sm:mt-4 sm:mb-6">Você pode <strong>baixar o Código QR acima</strong>, que redireciona para esta página. <br /> Compartilhe a memória de {{ name.split(" ")[0] }}, para que sua luz brilhe e guie o caminho.</p>
                <UiButton :href="qrCode" transparency download>
                    Faça download
                    <VectorsMemorialDownload />
                </UiButton>
            </div>
        </LayoutContainer>
    </section>
</template>