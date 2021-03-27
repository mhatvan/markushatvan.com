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
  <title>Privacy Policy | Markus Hatvan</title>

  <meta name="description" content="Privacy policy for markushatvan.com" />
</svelte:head>

<SEO />
<span>
  <a
    href="https://www.iubenda.com/privacy-policy/82646403"
    class="iubenda-white no-brand iubenda-embed iub-legal-only iub-body-embed"
    title="Privacy Policy">Privacy Policy</a
  >
</span>
