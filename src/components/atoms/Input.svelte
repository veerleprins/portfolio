<script>
  // Props
  export let inputType
  export let inputName
  export let placeholderText
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
    &:focus {
      outline: none;
      background-color: $border;
      color: $secondary;
    }
  }
  input[type='text'] {
    color: $secondary;
  }
</style>

<input type={inputType} name={inputName} placeholder={placeholderText} />
