<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    };
  }
</script>

<script lang="ts">
  import { isDev } from '../stores';

  export let error;
  export let status;
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="text-center mh-container">
  <h1>{status}</h1>

  <p>{error.message}</p>
</div>

{#if $isDev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
