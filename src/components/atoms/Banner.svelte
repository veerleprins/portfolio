<script>
  // Props
  export let src
  export let alt
</script>

<style lang="scss">
  div {
    width: 100%;
    height: 200px;
    background-color: hotpink;
    img {
      object-fit: cover;
      height: inherit;
      width: 100%;
    }
  }
</style>

<div><img {src} {alt} /></div>
