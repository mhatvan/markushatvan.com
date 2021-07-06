<script context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      await fetch('/sitemap.xml');
      await fetch('/rss.xml');

      return true;
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import { afterUpdate } from 'svelte';
  import BreakpointHelper from '$lib/BreakpointHelper.svelte';
  import CookieNotice from '$lib/CookieNotice.svelte';
  import NProgress from '$lib/NProgress.svelte';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
  import { isDev } from '../stores';
  import type { LoadInput } from '@sveltejs/kit';

  import 'prismjs/themes/prism-tomorrow.css';

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

<NProgress />

<Nav />

<main class="pb-12 mh">
  <slot />
</main>

<Footer />

{#if !$isDev}
  <CookieNotice />
{/if}

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
