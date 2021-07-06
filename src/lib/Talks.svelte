<script lang="ts">
  import {
    faAngular,
    faJsSquare,
    faNpm,
  } from '@fortawesome/free-brands-svg-icons';
  import type { ITalk } from 'src/models/talk';
  import { dateIsBefore } from '../utils';
  import Talk from './Talk.svelte';

  const talks: ITalk[] = [
    {
      title: 'Why I Recommend Svelte to Every New Web Developer',
      date: '2021-03-25',
      logo: faJsSquare,
      logoColor: 'text-yellow-500',
      videoLink: 'https://youtu.be/CBgN-jcO4OU?t=14280',
      slidesLink:
        'https://www.beautiful.ai/player/-MWKF2YJqj_rDUv0ldRG/Why-I-Recommend-Svelte-to-Every-New-Web-Developer',
      organizer: 'WeAreDevelopers Live Days',
      organizerLink: 'https://www.wearedevelopers.com/event/live-days-01',
      location: 'Remote',
    },
    {
      title: 'How I built a Sapper blog with all the must-have features',
      date: '2020-09-24',
      logo: faJsSquare,
      logoColor: 'text-yellow-500',
      videoLink: 'https://www.youtube.com/watch?v=8rm12dGk03g',
      slidesLink:
        'https://www.beautiful.ai/player/-MI0JqYe0oPmQRIf08NQ/How-I-built-a-Sapper-blog-with-all-the-must-have-features',
      organizer: 'MMT Tech',
      organizerLink: 'https://www.mmtdigital.co.uk/',
      location: 'Remote',
    },
    {
      title: 'How to boost web dev efficiency',
      date: '2018-04-12',
      logo: faAngular,
      logoColor: 'text-red-700',
      videoLink: 'https://www.youtube.com/watch?v=708el7zgGfY',
      slidesLink:
        'https://slides.com/chimpcmder/how-to-boost-your-web-development-efficiency',
      organizer: 'Angular Vienna',
      organizerLink: 'https://www.meetup.com/de-DE/Angular-Vienna/',
      location: 'Vienna, Austria',
    },
    {
      title: `Betcha didn't know that?!`,
      date: '',
      logo: faNpm,
      logoColor: 'text-red-700',
      videoLink: '',
      slidesLink: 'https://slides.com/chimpcmder/betcha-didn-t-know-that',
      organizer: 'Vienna.js',
      organizerLink: 'https://www.meetup.com/de-DE/viennajs/',
      location: 'Vienna, Austria',
    },
    {
      title: 'Best practices for open source contributions',
      date: '2021-07-20',
      logo: faJsSquare,
      logoColor: 'text-yellow-500',
      videoLink: '',
      slidesLink:
        'https://www.beautiful.ai/player/-MCCJc2bhl1Tizg5YvKe/Best-practices-for-open-source-contributions',
      organizer: 'freeCodeCamp Vienna',
      organizerLink: 'https://www.meetup.com/de-DE/fccvienna/',
      location: 'Vienna, Austria',
    },
  ];
</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Talks</h2>

  <small class="block mt-6 text-sm text-gray-800"> <em>Upcoming</em> </small>

  {#each talks as talk}
    {#if !dateIsBefore(talk.date)}
      <Talk talk="{talk}" />
    {/if}
  {/each}

  <small class="block mt-6 text-sm text-gray-800"> <em>Past</em> </small>

  {#each talks as talk}
    {#if dateIsBefore(talk.date)}
      <Talk talk="{talk}" />
    {/if}
  {/each}
</section>
