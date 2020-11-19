<script>
  import SEO from '../components/SEO.svelte';
</script>

<svelte:head>
  <title>Resume | Markus Hatvan</title>
  <meta name="description" content="My up-to-date resume, hire me!" />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Resume</h1>

  <embed src="CV_MarkusHatvan.pdf" type="application/pdf" />
</section>

<style>
  embed {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
</style>
