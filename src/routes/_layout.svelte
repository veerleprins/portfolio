<script>
  // Components
  import Header from '../components/organisms/global/Header.svelte'
  import Footer from '../components/organisms/global/Footer.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

<Header />

<slot />

<Footer />
