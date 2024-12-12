<script setup>
import { VectorsFooterWhatsapp, VectorsFooterPhone, VectorsFooterEmail } from "#components"

defineProps({
  logo: String,
  menu: Array,
  whatsapp: String,
  phone: String,
  email: String
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-purple mt-32 sm:mt-20">
    <LayoutContainer>
      <div class="py-12 sm:py-10 flex items-center justify-between sm:block gap-8">
        <NuxtLink @click="open = false" to="/">
          <NuxtImg class="h-[48px]" :src="logo" alt="Legado Vivo" />
        </NuxtLink>

        <ul class="flex items-center gap-12 sm:gap-8 sm:flex-wrap sm:mt-10">
          <li
            v-for="link, index in menu"
            :key="index"
          >
            <NuxtLink
              class="text-white uppercase font-medium text-base"
              :to="link.uri"
              :target="link.target"
              @click="open = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <ul class="py-8 border-t border-[rgba(255,255,255,.32)] flex gap-6 justify-between sm:flex-col">
        <template
          v-for="i, index in [
            {
              icon: VectorsFooterWhatsapp,
              title: 'WhatsApp',
              value: whatsapp,
              url: `https://api.whatsapp.com/send?phone=55${whatsapp.replace(/\D/g, '')}`
            },
            {
              icon: VectorsFooterPhone,
              title: 'Telefone',
              value: phone,
              url: `tel:+55${phone}`
            },
            {
              icon: VectorsFooterEmail,
              title: 'E-mail',
              value: email,
              url: `mailto:${email}`
            }
          ]"
          :key="index"
        >
          <li v-if="i.value">
            <a
              :href="i.url"
              target="_blank"
              class="flex items-center gap-6"
            >
              <component :is="i.icon" />
              <p>
                <span class="text-white text-base">{{ i.title }}</span>
                <br />
                <strong class="text-white block">{{ i.value }}</strong>
              </p>
            </a>
          </li>
        </template>
      </ul>
      <div class="flex justify-between py-8 sm:py-6 sm:block border-t border-[rgba(255,255,255,.32)]">
        <p class="text-white font-light text-sm sm:text-center">Legado Vivo | Todos os direitos reservados © {{ year }}</p>
        <p class="text-white font-light text-sm sm:text-center">Desenvolvido por <a class="!text-white" href="https://www.eficazti.com.br/" target="_blank">Eficaz TI</a></p>
      </div>
    </LayoutContainer>
  </footer>
</template>