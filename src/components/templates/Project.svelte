<script>
  // Components
  import Banner from '../atoms/Banner.svelte'

  // Props
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    // position: relative;
    // left: -5vw;
    // width: 100vw;
    // background-color: violet;
    section {
      width: 80vw;
      margin: 0 auto;
    }
    @include size-m {
      /* left: 20vw; */
      /* left: calc(-calc(100vw - 1000px) / 2); */
    }
  }
</style>

<div>
  <Banner src={project.image_banner} alt={project.image_banner_alt} />
  <section>
    <h1>{project.title}</h1>
  </section>
</div>
