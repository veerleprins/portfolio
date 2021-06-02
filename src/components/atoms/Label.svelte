<script>
  // Props
  export let labelName
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  label {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    flex-direction: column;
    margin-bottom: 2em;
  }

  @include size-s {
    label {
      width: 100%;
    }
  }
</style>

<label for={labelName}>
  <slot />
</label>
