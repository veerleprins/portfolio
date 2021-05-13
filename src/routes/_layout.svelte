<script>
  // Components
  import Nav from '../components/molecules/Nav.svelte'
  import Footer from '../components/organisms/Footer.svelte'

  // // Props
  // export let segment
</script>

<style lang="scss">
  header {
    background-color: #17181d;
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 10vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    box-shadow: 0px 2px 20px black;
    a {
      display: flex;
      align-items: center;
      color: #173148;
      svg {
        width: 30px;
        height: 30px;
      }
      svg {
        fill: #717171;
      }
      &:hover {
        svg {
          fill: #fcd9b8;
        }
      }
    }
  }
  main {
    position: relative;
    top: 60px;
    max-width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    main {
      max-width: 80vw;
    }
  }
  @media (min-width: 1100px) {
    main {
      max-width: 1000px;
    }
  }
</style>

<header>
  <a href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.86 65.06"
      ><g id="Laag_2" data-name="Laag 2"
        ><g id="Laag_1-2" data-name="Laag 1"
          ><path
            d="M29.83,43.19,49.93,0l9.93,0-30,65.06h0L0,0,42.24,0,30.42,29l-5-9.94,5-11.93H12.69"
          /></g
        ></g
      ></svg
    >
  </a>
  <Nav />
</header>

<main>
  <slot />
</main>

<Footer />
