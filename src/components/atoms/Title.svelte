<script>
  // Props
  export let isSubtitle = false
  export let introFont = false
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h1,
  h2 {
    font-family: 'Vendura';
  }

  h1 {
    font-size: $h1-size;
    margin: 4rem 0 2rem;
  }

  h2 {
    margin: 0em 0em 1em 0em;
    font-size: $h2-size;
  }
</style>

{#if !isSubtitle}
  <h1>
    <slot />
  </h1>
{:else}
  <h2>
    <slot />
  </h2>
{/if}
