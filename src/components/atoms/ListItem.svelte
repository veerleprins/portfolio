<script>
  // Props
  export let clickable = false
  export let href = ''
</script>

<style lang="scss">
</style>

{#if clickable}
  <li>
    <a {href}>
      <slot />
    </a>
  </li>
{:else}
  <li>
    <slot />
  </li>
{/if}
