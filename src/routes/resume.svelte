<script>
  import SEO from '$lib/SEO.svelte';
</script>

<svelte:head>
  <title>Resume | Markus Hatvan</title>
  <meta name="description" content="My up-to-date resume, hire me!" />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Resume</h1>
  <p>
    In case you are interested in hiring me for a project, my CV should give you
    all the necessary information!
  </p>
  <p>Last updated: 27.12.2020</p>

  <embed src="CV_MarkusHatvan.pdf" type="application/pdf" />
</section>

<style>
  embed {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
</style>
