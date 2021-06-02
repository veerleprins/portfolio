<script>
  // Props
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  li {
    background-color: #292929;
    list-style-type: none;
    height: auto;
    padding: 2em;
    a {
      color: rgb(245, 245, 245);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      h3 {
        color: gray;
        font-size: 12px;
        letter-spacing: 4px;
        margin-bottom: 2em;
      }
      h4 {
        font-size: 2em;
        margin-bottom: 1em;
      }
      img {
        width: 100%;
        height: 50vw;
        max-height: 300px;
        object-fit: cover;
        margin-bottom: 2em;
      }
      p {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  @include size-s {
    li {
      min-width: 85%;
    }
  }
</style>

<li>
  <a href={project.github_repo} target="_blank">
    <h3>CASE</h3>
    <h4>{project.title}</h4>
    <img src={project.image_banner} alt={project.image_banner_alt} />
    <p>View work</p>
  </a>
</li>
