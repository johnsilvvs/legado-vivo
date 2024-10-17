<script setup>
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
            query {
              page(id: "3", idType: DATABASE_ID) {
                seo {
                  metaDesc
                  title
                }
                title
                content
              }
            }
    `
  }, 
  transform(data) { return data.data }
})

useSeoMeta({
  title: data.value.page.seo.title,
  description: data.value.page.seo.metaDesc,
  ogTitle: data.value.page.seo.title,
  ogDescription: data.value.page.seo.metaDesc
})
</script>

<template>
  <section class="pt-[180px] sm:pt-32 pb-16 sm:pb-10 mb-16 sm:mb-10 bg-purple">
    <LayoutContainer>
      <h1 class="text-white text-center">{{ data.page.title }}</h1>
    </LayoutContainer>
  </section>

  <section class="p-policy-content">
    <LayoutContainer class="!max-w-[900px]">
      <div v-html="data.page.content"></div>
    </LayoutContainer>
  </section>
</template>

<style lang="postcss">
.p-policy-content {

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mt-14 mb-4 sm:mt-10;
  }

  img {
    @apply w-full;
  }

  figure {
    @apply block my-10 sm:my-8;

    img {
      @apply !w-full !h-auto object-cover;
    }

    figcaption {
      @apply text-center mt-4 font-normal text-sm;
    }
  }

  ol,
  ul {
    @apply my-8 ml-5 sm:my-5;

    li {
      @apply mb-4 font-normal text-base leading-[160%];
    }
  }

  ul {

    li {
      @apply list-disc;
    }
  }

  ol {

    li {
      @apply list-decimal;
    }
  }

  p {
    @apply mb-8 sm:mb-5;
  }

  .wp-block-columns {
    @apply m-0;
  }
}
</style>