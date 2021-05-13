<script>
  // Props

  let workList = [
    {
      URL: '#',
      title: 'HorrorInfo - Find information about horrors',
      imgSRC: 'assets/Mockups/HorrorInfo.svg',
      imgAlt: 'Mockup of HorrorInfo.',
    },
    {
      URL: '#',
      title: 'De Volkskrant - Electric Car in the Netherlands',
      imgSRC: 'assets/Mockups/ElectricCar.svg',
      imgAlt: 'Mockup of Electric Car.',
    },
    {
      URL: '#',
      title: 'Dat.io - An application to date',
      imgSRC: 'assets/Mockups/test-frame.svg',
      imgAlt: 'Mockup of Dat.io.',
    },
    {
      URL: '#',
      title: '',
      imgSRC: '',
      imgAlt: '',
    },
  ]
</script>

<style lang="scss">
  ul {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    flex-direction: column;
    width: 80%;
    margin: 2em auto;
    li {
      list-style-type: none;
      border-radius: 10px;
      margin: 4em 0;
      height: 300px;
      transition: 1s ease-in-out;
      &:nth-child(odd) {
        transform: translateX(-12%);
      }
      &:nth-child(even) {
        transform: translateX(12%);
      }
      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        h3 {
          order: 2;
          padding-top: 1em;
        }
        img {
          order: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
</style>

<ul>
  {#each workList as work}
    <li>
      <a href={work.URL}>
        <h3>{work.title}</h3>
        <img src={work.imgSRC} alt={work.imgAlt} />
      </a>
    </li>
  {/each}
</ul>
