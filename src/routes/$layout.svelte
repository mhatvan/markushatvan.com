<script context="module">
  // export async function load({ fetch }) {
  //   try {
  //     await fetch('sitemap.xml');
  //     await fetch('rss.xml');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
</script>

<script>
  import { afterUpdate } from 'svelte';
  import BreakpointHelper from '$lib/BreakpointHelper.svelte';
  import CookieNotice from '$lib/CookieNotice.svelte';
  // import NProgress from '$lib/NProgress.svelte';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
  import { isDev } from '../stores';

  import 'prismjs/themes/prism-tomorrow.css';

  export let segment: string;

  let fullURL: string = '';

  afterUpdate(() => {
    let tmpURL = window.location.href;
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/';
  });
</script>

<svelte:head>
  <link rel="canonical" href="{fullURL}" />
</svelte:head>

<BreakpointHelper />

<!-- <NProgress /> -->

<Nav segment="{segment}" />

<main class="pb-12 mh">
  <slot />
</main>

<Footer segment="{segment}" />

{#if !$isDev}
  <CookieNotice />
{/if}

<style>
  main {
    /* Offset fixed navbar */
    /* min-height: calc(100vh - 335px); */
  }
</style>
