<script>
  import { onMount } from 'svelte';
  import SEO from '$lib/SEO.svelte';

  onMount(() => {
    var s = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode.insertBefore(s, tag);
  });
</script>

<svelte:head>
  <title>Terms and conditions | Markus Hatvan</title>

  <meta
    name="description"
    content="Terms and conditions for markushatvan.com"
  />
</svelte:head>

<SEO />

<span>
  <a
    href="https://www.iubenda.com/terms-and-conditions/82646403"
    class="iubenda-white no-brand iubenda-embed iub-body-embed"
    title="Terms and Conditions">Terms and Conditions</a
  >
</span>
