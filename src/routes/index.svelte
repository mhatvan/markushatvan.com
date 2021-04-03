<script context="module">
  export async function load({ fetch }: LoadInput) {
    const blog = await fetch(`/blog.json`);
    const posts = await blog.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import Introduction from '$lib/Introduction.svelte';
  import Applause from '$lib/Applause.svelte';
  import InspirationalQuote from '$lib/InspirationalQuote.svelte';
  import OSSContributions from '$lib/OSSContributions.svelte';
  import CurrentProjects from '$lib/CurrentProjects.svelte';
  import Talks from '$lib/Talks.svelte';
  import RecentPosts from '$lib/RecentPosts.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../models/post';
  import ServicesCallToAction from '$lib/ServicesCallToAction.svelte';
  import type { LoadInput } from '@sveltejs/kit/types.internal';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Markus Hatvan - On your side for your site</title>
  <meta
    name="description"
    content="Personal website and blog written from scratch with SvelteKit and TailwindCSS."
  />
</svelte:head>

<SEO />

<Introduction />

<RecentPosts posts="{posts}" />

<ServicesCallToAction />

<CurrentProjects />

<Applause />

<OSSContributions />

<InspirationalQuote />

<Talks />
