<script>
  // Components
  import Button from '../atoms/Button.svelte'
  import WorkList from '../molecules/WorkList.svelte'
</script>

<style lang="scss">
  #home {
    padding: 15vh 0;
    p {
      font-size: 24px;
      width: 50%;
      margin-bottom: 2em;
    }
  }
  #work {
    padding: 15vh 0;
  }
</style>

<section id="home">
  <img src="" alt="" />
  <div>
    <h1>Front end Developer</h1>
    <Button text="View my work" url="#work" />
  </div>
</section>
<section id="work">
  <div>
    <h2>My Work</h2>
    <p>Some text here about the projects...</p>
  </div>
  <WorkList />
</section>
<section id="blogs" />
<section id="about">
  <h2>About me</h2>
  <article>
    <h3>Let's get acquainted</h3>
    <p>
      Hi there! I will introduce myself. My name is Veerle Prins and I live in
      Hoofddorp, the Netherlands
    </p>
  </article>
</section>
<section id="contact">
  <h2>Contact me</h2>
  <div>
    <Button
      text="Contact me"
      url="mailto:info@veerleprins.nl?subject=Contact"
    />
  </div>
</section>
