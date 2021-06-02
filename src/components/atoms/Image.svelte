<script>
  // Props
  export let isClickable = false
  export let href = ''
  export let src
  export let alt
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  img {
    width: 100%;
  }
</style>

{#if !isClickable}
  <img {src} {alt} />
{:else}<a {href}> <img {src} {alt} /> </a>{/if}
