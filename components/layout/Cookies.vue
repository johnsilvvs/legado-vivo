<script setup>
const accepted = useCookie("lgpd", { default: () => false })

defineProps({
  text: String,
  button: String
})
</script>

<template>
  <article
    class="cookies fixed bottom-10 right-10 z-[45] bg-[rgba(114,117,171,.88)] p-8 sm:py-4 sm:px-sm max-w-[475px] w-full flex flex-col gap-6 sm:gap-4 sm:bottom-0 sm:right-0 opacity-0 invisible"
    :class="{ '!opacity-100 !visible': !accepted }"
  >
    <ClientOnly>
      <div v-html="text"></div>
    </ClientOnly>
    <UiButton
      @click="accepted = true"
      full
      white
    >
      {{ button }}
    </UiButton>
  </article>
</template>

<style lang="postcss">
.cookies {
  p {
    &,
    & * {
      @apply !text-white text-base sm:inline;
    }
  }
}
</style>