<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import Image from '@/components/atoms/Image.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    padding-top: 3.5em;
    margin-bottom: 10em;
    .wrapper {
      display: flex;
      flex-direction: column;
      article {
        display: flex;
        flex-direction: column;
        p {
          max-width: 75ch;
          margin: 1em 0em;
          &:nth-of-type(1) {
            margin-top: 0;
          }
          span {
            color: $secondary;
            font-style: italic;
          }
        }
      }
      div {
        // Image
        width: 50%;
      }
    }
  }
  @include size-s {
    section {
      .wrapper {
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 2em;
        article {
          justify-content: start;
          width: 60%;
        }
        div {
          width: 40%;
        }
      }
    }
  }
</style>

<section id="about">
  <Title isSubtitle>About me</Title>
  <div class="wrapper">
    <article>
      <p>
        Hi there! My name is Veerle Prins and I live in Hoofddorp, the
        Netherlands. Besides the fact that I spend my time on creative hobbies
        (such as photography) and having drinks with friends, I am also someone
        who is interested in everything related to the web.
      </p>
      <p>
        During the past three years of the Communication & Multimedia Design
        course at the Amsterdam University of Applied Sciences, I have mainly
        developed an interest in
        <span>Front-end development</span>. For this reason I have chosen to
        follow as many tech courses as possible and I am currently following the
        minor Web Design & Development.
      </p>
      <p>
        In the meantime I can say that I have learned a lot in the field of
        development. Because of this I can already say that I see myself as a
        more technical developer who also likes to think about the user
        experience.
      </p>
    </article>
    <div>
      <Image src="/assets/images/IMG_7505.jpg" alt="Image of Veerle Prins" />
    </div>
  </div>
</section>
