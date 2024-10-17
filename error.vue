<script setup>
  useHead({
    titleTemplate: title => `${title} | Página não encontrada`
  })
</script>

<template>
  <main class="bg-purple">
    <LayoutContainer>
      <div class="flex flex-col justify-center items-center h-screen">
        <VectorsError class="max-w-full sm:h-[128px]" />
        <h1 class="text-white mt-[-32px] sm:mt-[-24px] text-center">Ops!</h1>
        <p class="text-white mt-6 sm:mt-4 mb-8 text-center">Algo aqui deu errado :( <br /> Não encontramos a página que você está procurando.</p>
        <UiButton white href="/">Voltar para a home</UiButton>
      </div>
    </LayoutContainer>
  </main>
</template>