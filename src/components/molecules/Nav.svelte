<script>
  // Internals
  let current = 'home'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  nav {
    ul {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      visibility: hidden;
      flex-direction: row;
      justify-content: flex-end;
      height: 100%;
      li {
        list-style-type: none;
        a {
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          align-items: center;
          padding: 0.5em 1.5em;
          width: 100%;
          height: 60px;
          text-decoration: none;
          transition: 0.4s ease-in-out;
          color: #717171;
          &:hover {
            color: $primary;
          }
          &.active {
            color: $primary;
          }
        }
        &:last-child {
          justify-content: center;
          .fa-moon {
            color: black;
            width: 20px;
            height: 20px;
            &::before {
              content: '\f186';
            }
          }
        }
      }
    }
    @media (min-width: 655px) {
      ul {
        visibility: visible;
      }
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a
        href="#home"
        class={current === 'home' ? 'active' : ''}
        on:click={() => (current = 'home')}
      >Home</a>
    </li>
    <li>
      <a
        href="#about"
        class={current === 'about' ? 'active' : ''}
        on:click={() => (current = 'about')}
      >About</a>
    </li>
    <li>
      <a
        href="#work"
        class={current === 'work' ? 'active' : ''}
        on:click={() => (current = 'work')}
      >Work</a>
    </li>
    <li>
      <a
        href="#contact"
        class={current === 'contact' ? 'active' : ''}
        on:click={() => (current = 'contact')}
      >Contact</a>
    </li>
  </ul>
</nav>
