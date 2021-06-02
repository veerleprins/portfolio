<script>
  // Props
  export let type
  export let name
  export let placeholder
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  input {
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid $border;
    width: 100%;
    height: 30px;
    margin-top: 1em;
    padding: 0 5px;
    font-size: 14px;
    &:focus {
      outline: none;
      background-color: $border;
      color: $secondary;
    }
  }
  input[type='text'] {
    color: $secondary;
  }
  @include size-s {
    input {
      font-size: 16px;
    }
  }
</style>

<input {type} {name} {placeholder} />
