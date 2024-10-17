<script setup>
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
        query Inicio {
          page(id: "2", idType: DATABASE_ID) {
            seo {
              title
              metaDesc
            }
            inicio {
              bannerTitulo
              bannerTexto
              bannerFrase
              bannerBotao
              bannerUrl
              bannerFoto {
                sourceUrl
              }
              cfSubtexto
              cfTitulo
              cfNumeros {
                texto
              }
              faqPerguntas {
                pergunta
                resposta
              }
              faqTitulo
              planos {
                nome
                preco
                destaque
              }
              planosBotao
              planosComparacao {
                plano1
                plano2
                plano3
                texto
              }
              planosPeriodo
              planosTitulo
              sobreFoto {
                sourceUrl
              }
              sobreTexto
              sobreTitulo
            }
          }
          gerais {
            nodes {
              geral {
                whatsapp
              }
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
  ogDescription: data.value.page.seo.metaDesc,
})
</script>

<template>
  <div>   
    <PagesHomeBanner
      :title="data.page.inicio.bannerTitulo"
      :text="data.page.inicio.bannerTexto"
      :button="data.page.inicio.bannerBotao"
      :url="data.page.inicio.bannerUrl"
      :image="data.page.inicio.bannerFoto.sourceUrl"
      :phrase="data.page.inicio.bannerFrase"
    />
    <PagesHomeAbout
      :title="data.page.inicio.sobreTitulo"
      :text="data.page.inicio.sobreTexto"
      :image="data.page.inicio.sobreFoto.sourceUrl"
    />
    <PagesHomeWhoWorks
      :title="data.page.inicio.cfTitulo"
      :numbers="data.page.inicio.cfNumeros"
      :subtext="data.page.inicio.cfSubtexto"
    />
    <PagesHomePlans
      :title="data.page.inicio.planosTitulo"
      :plans="data.page.inicio.planos"
      :comparsion="data.page.inicio.planosComparacao"
      :button="data.page.inicio.planosBotao"
      :period="data.page.inicio.planosPeriodo"
      :whatsapp="data.gerais.nodes[0].geral.whatsapp"
    />
    <PagesHomeFAQ
      :title="data.page.inicio.faqTitulo"
      :questions="data.page.inicio.faqPerguntas"
    />
  </div>
</template>