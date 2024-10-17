<script setup>
const open = ref(false)
const fixed = ref(false)
const el = ref(null)

function nav() {
  if(document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) fixed.value = true
  else fixed.value = false
}

onMounted(() => {
  nav()
  window.addEventListener("scroll", nav)
})

defineProps({
  logo: String,
  menu: Array
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 border-b border-transparent py-8 sm:py-4"
    ref="el"
    :class="{ 'bg-purple !border-[rgba(255,255,255,.32)] !py-4': fixed }"
  >
    <LayoutContainer>
      <div class="flex items-center justify-between">
        <NuxtLink class="relative z-50" @click="open = false" to="/">
          <NuxtImg class="h-[48px]" :src="logo" alt="Legado Vivo" />
        </NuxtLink>

        <ul
          class="flex items-center gap-12 sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-full sm:bg-purple sm:opacity-0 sm:invisible sm:translate-x-[-100%] sm:items-start sm:px-sm sm:pb-10 sm:z-40 sm:overflow-y-auto sm:pt-32 sm:flex-col sm:gap-6"
          :class="{ 'sm:!opacity-100 sm:!visible sm:!translate-x-0': open }"
        >
          <li
            v-for="link, index in menu"
            :key="index"
          >
            <NuxtLink
              class="text-white uppercase font-medium text-base sm:text-lg flex items-center gap-3"
              :class="{ '!font-extrabold': index === menu.length - 1 }"
              :to="link.uri"
              :target="link.target"
              @click="open = false"
            >
              {{ link.label }}
              <VectorsUtilsArrowButton v-if="index === menu.length - 1" />
            </NuxtLink>
          </li>
        </ul>

        <button
          @click="open = !open"
          class="hidden sm:flex items-center justify-end relative z-50"
          type="button"
        >
          <VectorsNavClose v-if="open" />
          <VectorsNavMenu v-else />
        </button>
      </div>
    </LayoutContainer>
  </nav>

  <Style v-if="open" type="text/css" children="html { overflow: hidden; }"></Style>
</template>