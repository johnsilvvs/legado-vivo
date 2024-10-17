<script setup>
defineProps({
    title: String,
    plans: Array,
    comparsion: Array,
    button: String,
    period: String,
    whatsapp: String
})

onMounted(() => {
    const lines = document.querySelectorAll(".title p")
    const plans = document.querySelectorAll(".plan")

    window.addEventListener("resize", () => {
        lines.forEach((line, index) => {
            const height = line.offsetHeight
            line.style.height = `${height}px`
        
            plans.forEach(plan => {
                const checks = plan.querySelectorAll("figure")
                checks[index].style.height = `${height}px`
            })
        })
    })

    lines.forEach((line, index) => {
        const height = line.offsetHeight
        line.style.height = `${height}px`
    
        plans.forEach(plan => {
            const checks = plan.querySelectorAll("figure")
            checks[index].style.height = `${height}px`
        })
    })
})
</script>

<template>
    <section class="pt-32 sm:pt-20 oversized sm:overflow-x-hidden" id="planos">
        <LayoutContainer>
            <div class="flex border-b border-r border-light-gray sm:overflow-x-auto">
                <div class="title min-w-[320px] max-w-[320px] sm:min-w-[200px] sm:max-w-[200px] w-full">
                    <h2 class="h-[149px] sm:h-[142px]">{{ title }}</h2>
                    <p
                        v-for="i, index in comparsion"
                        :key="index"
                        class="!text-black !font-medium border-t border-light-gray py-4 pr-4"
                    >
                        {{ i.texto }}
                    </p>
                    <div class="border-t border-light-gray"></div>
                </div>
                <div
                    v-for="i, index in plans"
                    :key="index"
                    class="plan flex-1 sm:flex-none sm:min-w-[205px] sm:max-w-[250px]"
                >
                    <div class="border-t border-b border-l border-light-gray sticky sm:relative top-20 sm:top-0 bg-white">
                        <h6
                            class="uppercase text-center !text-xl py-3 text-gray bg-[#E5E5E550]"
                            :class="{ '!bg-purple !text-white': i.destaque }"
                        >
                            {{ i.nome }}
                        </h6>
                        <h5 class="text-center py-8 flex items-center justify-center gap-1">R${{ i.preco }}<span class="text-gray !font-light !text-sm">/{{ period }}</span></h5>
                    </div>
                    <figure
                        v-for="c, index2 in comparsion"
                        :key="index2"
                        class="flex items-center justify-center border-b border-l border-light-gray"
                    >
                        <VectorsHomeCheck v-if="c[`plano${index + 1}`]" />
                        <VectorsHomeTimes v-else />
                    </figure>
                    <div class="flex justify-center items-center p-4 border-l border-light-gray">
                        <UiButton transparency full :href="`https://api.whatsapp.com/send?phone=55${whatsapp.replace(/\D/g, '')}&text=Olá! Tenho interesse no Plano ${i.nome}. Pode me ajudar?`" target="_blank">{{ button }}</UiButton>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </section>
</template>