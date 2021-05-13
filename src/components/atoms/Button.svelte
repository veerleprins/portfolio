<script>
  // Props
  export let text
  export let url
</script>

<style lang="scss">
  div {
    --background-color: #fcd9b8;
    --hover-color: #e09145;
    --text-color: black;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    a {
      box-shadow: 5px 5px 10px black;
      text-decoration: none;
      border-radius: 2px;
      padding: 0.5em 1em;
      background-color: var(--background-color);
      color: var(--text-color);
      transition: 0.3s;
      &:hover {
        background-color: var(--hover-color);
      }
    }
  }
</style>

<div>
  <a href={url}>{text}</a>
</div>
