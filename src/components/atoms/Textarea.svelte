<script>
  // Props
  export let textareaName
  export let placeholderText
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  textarea {
    font-family: 'Inter', sans-serif;
    background-color: transparent;
    color: white;
    resize: none;
    border: none;
    border-bottom: 1px solid $border;
    width: 100%;
    margin-top: 1em;
    padding: 5px 5px;
    &:focus {
      outline: none;
      background-color: $border;
      color: $secondary;
    }
  }
  textarea[type='text'] {
    color: $secondary;
  }
</style>

<textarea
  name={textareaName}
  cols="30"
  rows="2"
  placeholder={placeholderText}
/>
