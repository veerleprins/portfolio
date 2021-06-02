<script>
  // Components
  import ContactForm from '@/components/molecules/ContactForm.svelte'
  import Title from '@/components/atoms/Title.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin-bottom: calc(10em + 10vh);
    height: 500px;
  }

  @include size-s {
    section {
      div {
        width: 100%;
      }
    }
  }
</style>

<section id="contact">
  <Title isSubtitle>Let's get to know each other</Title>
  <ContactForm />
</section>
