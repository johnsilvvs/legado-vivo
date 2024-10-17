<script setup>
defineProps({
  submit: Boolean,
  href: String,
  blank: Boolean,
  transparency: Boolean,
  white: Boolean,
  full: Boolean,
  arrow: Boolean,
  download: Boolean
})
</script>

<template>
  <template v-if="href">
    <a
      v-if="download"
      :href="href"
      :class="{ transparency, white, full }"
      target="_blank"
      download
    >
      <slot />
      <VectorsUtilsArrowButton v-if="arrow" />
    </a>
    <NuxtLink
      v-else
      :to="href"
      :target="blank ? '_blank' : '_self'"
      :class="{ transparency, white, full }"
    >
      <slot />
      <VectorsUtilsArrowButton v-if="arrow" />
    </NuxtLink>
  </template>
  <button
    v-else
    :type="submit ? 'submit' : 'button'"
    :class="{ transparency, white, full }"
  >
    <slot/>
    <VectorsUtilsArrowButton v-if="arrow" />
  </button>
</template>

<style lang="postcss" scoped>
a,
button {
  @apply inline-flex items-center justify-center gap-4 rounded-[12px] px-10 h-[56px] text-lg font-extrabold bg-purple text-white uppercase hover:bg-yellow text-center;

  &.transparency {
    @apply bg-[rgba(114,117,171,.16)] text-purple hover:bg-[rgba(114,117,171,.32)];
  }

  &.white {
    @apply bg-white text-purple hover:text-white hover:bg-[#525690];
  }

  &.full {
    @apply w-full !px-0;
  }
}
</style>