<script setup>
const props = useAttrs()
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
        query Listagem {
            ${props.cpt} {
                nodes {
                    memorial {
                        ano
                        foto {
                            sourceUrl
                        }
                        qrCode {
                            sourceUrl
                        }
                    }
                    title
                    slug
                }
            }
            page(id: "${props.id}", idType: DATABASE_ID) {
                listagem {
                    botao
                    titulo
                    texto
                    foto {
                        sourceUrl
                    }
                }
                seo {
                    metaDesc
                    title
                }
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
    <div>
        <PagesListBanner
            :title="data.page.listagem.titulo"
            :text="data.page.listagem.texto"
            :image="data.page.listagem.foto.sourceUrl"
        />
        <PagesListItems
            :list="data[props.cpt].nodes"
            :pet="props.cpt === 'pets'"
            :button="data.page.listagem.botao"
        />
    </div>
</template>