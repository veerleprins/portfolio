<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params
    const res = await this.fetch(`cases/${slug}.json`)

    if (res.status === 200) {
      const project = await res.json()
      return { project }
    } else if (res.status === 404) {
      const { error } = await res.json()
      this.error(404, error)
    }
  }
</script>

<script>
  // Components
  import Project from '@/components/templates/Project.svelte'

  // Props
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  main {
    position: relative;
    top: 60px;
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    min-height: 89vh;
  }
  @include size-m {
    main {
      // max-width: 800px;
    }
  }
</style>

<svelte:head>
  <title>{project.title} | Veerle Prins, Portfolio</title>
</svelte:head>

<main>
  <Project {project} />
</main>
