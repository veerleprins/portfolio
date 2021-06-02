<script>
  // Props
  export let href = ''
  export let isButton = false
  export let className = ''
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  button,
  a {
    background-color: $primary;
    color: $black;
    border-radius: $buttonRadius;
    box-shadow: 5px 5px 10px $shadow;
    padding: 0.5rem 0;
    width: 200px;
    font-size: 1rem;
    // height: 35px;
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

  button {
    &.prev,
    &.next {
      color: white;
      background-color: #292929;
      box-shadow: none;
    }
    &.disabled {
      background-color: #131313;
      color: gray;
      cursor: unset;
    }
  }
</style>

{#if !isButton}
  <div>
    <a {href}>
      <slot />
    </a>
  </div>
{:else}
  <button class={className !== '' ? className : ''} on:click>
    <slot />
  </button>
{/if}
