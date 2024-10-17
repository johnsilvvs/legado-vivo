<script setup>
const props = useAttrs()
const { slug } = useRoute().params
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
        query {
            ${props.cpt}(id: "${slug}", idType: SLUG) {
                title
                seo {
                    metaDesc
                    title
                }
                memorial {
                    sobreTitulo
                    sobreTexto3
                    sobreTexto2
                    sobreTexto1
                    sobreFrase
                    sobreFoto {
                        sourceUrl
                    }
                    qrCode {
                        sourceUrl
                    }
                    fotos {
                        foto {
                            sourceUrl
                        }
                    }
                    foto {
                        sourceUrl
                    }
                    descricao
                    ano
                }
            }
        }
    `
  }, 
  transform(data) { return data.data }
})

useSeoMeta({
  title: data.value[props.cpt].seo.title,
  description: data.value[props.cpt].seo.metaDesc,
  ogTitle: data.value[props.cpt].seo.title,
  ogDescription: data.value[props.cpt].seo.metaDesc
})
</script>

<template>
    <div>        
        <PagesMemorialBanner
            :name="data[props.cpt].title"
            :year="data[props.cpt].memorial.ano"
            :description="data[props.cpt].memorial.descricao"
            :image="data[props.cpt].memorial.foto.sourceUrl"
            :pet="props.cpt === 'pet'"
        />
        <PagesMemorialAbout
            :title="data[props.cpt].memorial.sobreTitulo"
            :text1="data[props.cpt].memorial.sobreTexto1"
            :image="data[props.cpt].memorial.sobreFoto.sourceUrl"
            :text2="data[props.cpt].memorial.sobreTexto2"
            :text3="data[props.cpt].memorial.sobreTexto3"
            :phrase="data[props.cpt].memorial.sobreFrase"
            :pet="props.cpt === 'pet'"
        />
        <PagesMemorialGallery :images="data[props.cpt].memorial.fotos" />
        <PagesMemorialQRCode
            :name="data[props.cpt].title"
            :qrCode="data[props.cpt].memorial.qrCode.sourceUrl"
        />
    </div>
</template>