<script setup>
const config = useRuntimeConfig()
const { data, refresh, pending } = await useFetch(
  config.public.apiBase,
  {
    method: 'get',
    query: {
      query: `
              query Geral {
                gerais {
                  edges {
                    node {
                      geral {
                        cookiesBotao
                        cookiesTexto
                        email
                        telefone
                        whatsapp
                        logo {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
                menuTopo: menu(idType: NAME, id: "Topo") {
                  menuItems {
                    nodes {
                      label
                      uri
                      target
                    }
                  }
                }
                menuRodape: menu(idType: NAME, id: "Rodapé") {
                  menuItems {
                    nodes {
                      label
                      uri
                      target
                    }
                  }
                }
              }
    `
  }, 
  transform(data) { return data.data }
})
</script>

<template>
  <LayoutNav
    :logo="data.gerais.edges[0].node.geral.logo.sourceUrl"
    :menu="data.menuTopo.menuItems.nodes"
  />
  <slot />
  <LayoutCookies
    :text="data.gerais.edges[0].node.geral.cookiesTexto"
    :button="data.gerais.edges[0].node.geral.cookiesBotao"
  />
  <LayoutFooter
    :logo="data.gerais.edges[0].node.geral.logo.sourceUrl"
    :menu="data.menuRodape.menuItems.nodes"
    :whatsapp="data.gerais.edges[0].node.geral.whatsapp"
    :phone="data.gerais.edges[0].node.geral.telefone"
    :email="data.gerais.edges[0].node.geral.email"
  />
</template>