<template>
  <div id="app">
      <headerBlock />
      <router-view />
      <footerBlock />
  </div>
</template>

<script>

import headerBlock from "@/components/defaultTemplate/headerBlock";
import footerBlock from "@/components/defaultTemplate/footerBlock";

export default {
    name: 'App',
    components: {
        headerBlock,
        footerBlock
    }
}
</script>

<style lang="scss">
</style>
