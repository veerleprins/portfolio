<script>
  // Components
  import Title from '@/components/atoms/Title.svelte'
  import WorkList from '@/components/molecules/WorkList.svelte'
  import Button from '@/components/atoms/Button.svelte'

  // Internals
  import { cases } from '@/routes/cases/_cases.js'

  // Navigation buttons
  let distanceLeft = 0

  $: movePrev = () => {
    if (distanceLeft >= 0) {
      console.log('too small')
    } else {
      distanceLeft += 85
    }
  }

  $: moveNext = () => {
    if (distanceLeft <= -170) {
      console.log('too big')
    } else {
      distanceLeft += -85
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding-top: 3.5em;
    margin-bottom: 10em;
    div {
      div {
        width: 300px;
        &.buttons {
          margin-top: 2em;
          display: none;
        }
      }
    }
    ul {
      width: 100%;
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      flex-direction: column;
      gap: 4em;
      margin: 1em auto;
      transition: 0.2s ease;
    }
  }
  @include size-s {
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div {
        width: 40%;
        div {
          width: 300px;
          &.buttons {
            display: flex;
            flex-direction: row;
            gap: 1em;
          }
        }
      }
      .sliderwrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
        right: -5vw;
        @include size-m {
          width: 100%;
          margin-left: 0%;
          right: calc(calc(-100vw - -1000px) / 2);
        }
        ul {
          flex-direction: row;
          gap: 2em;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
</style>

<section id="work">
  <div>
    <Title isSubtitle>Work</Title>
    <p>
      Here you can see some of my projects that I made during the Communication
      & Multimedia Design course
    </p>
    <div class="buttons">
      {#if distanceLeft >= 0}
        <Button isButton className="prev disabled" on:click={movePrev}>
          Previous
        </Button>
        <Button isButton className="next" on:click={moveNext}>Next</Button>
      {:else if distanceLeft <= -170}
        <Button isButton className="prev" on:click={movePrev}>Previous</Button>
        <Button isButton className="next disabled" on:click={moveNext}>
          Next
        </Button>
      {:else}
        <Button isButton className="prev" on:click={movePrev}>Previous</Button>
        <Button isButton className="next" on:click={moveNext}>Next</Button>
      {/if}
    </div>
  </div>

  <div class="sliderwrapper">
    <ul style="left: {distanceLeft}%">
      {#each cases as project}
        <WorkList {project} />
      {/each}
    </ul>
  </div>
</section>
