<script>
  // Components
  import Button from '@/components/atoms/Button.svelte'
  import Label from '@/components/atoms/Label.svelte'
  import Input from '@/components/atoms/Input.svelte'
  import Textarea from '@/components/atoms/Textarea.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  form {
    height: 100%;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    flex-direction: column;
    fieldset {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      flex-direction: column;
      border: none;
    }
  }
  @include size-s {
    form {
      fieldset {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 2em;
        width: 100%;
      }
    }
  }
</style>

<form action="https://formspree.io/f/xjvjyazj" method="POST" autocomplete="off">
  <fieldset>
    <Label labelName="name">
      Name:
      <Input type="text" name="name" placeholder="John Doe" />
    </Label>

    <Label labelName="mail">
      Email:
      <Input type="text" name="mail" placeholder="johndoe@mail.com" />
    </Label>
  </fieldset>
  <Label labelName="message">
    Description:
    <Textarea name="message" placeholder="Job offer, Project details, etc." />
  </Label>
  <Button isButton>Send</Button>
</form>
