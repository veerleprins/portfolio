<script>
  // Props
  export let url = ''
  export let isButton = false
  export let className
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  button,
  a {
    background-color: $primary;
    color: $black;
    border-radius: $buttonRadius;
    box-shadow: 5px 5px 10px $shadow;
    width: 200px;
    height: 35px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: $secondary;
    }
  }

  div {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    align-items: center;
    width: 200px;
    height: 35px;
    a {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }
</style>

{#if !isButton}
  <div>
    <a href={url} class={className}>
      <slot />
    </a>
  </div>
{:else}
  <button class={className}>
    <slot />
  </button>
{/if}
