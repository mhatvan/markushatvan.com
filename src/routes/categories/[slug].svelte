<script context="module">
  import { convertToSentenceCase } from '../../utils';

  export async function load({ page, fetch }: LoadInput) {
    try {
      const allPosts = await fetch(`/blog.json`);
      const posts = await allPosts.json();

      const postsByCategory = posts.filter(
        (post: Post) =>
          post.category === convertToSentenceCase(page.params.slug),
      );

      return { props: { posts, postsByCategory, slug: page.params.slug } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import CurrentGoals from '$lib/CurrentGoals.svelte';
  import SEO from '$lib/SEO.svelte';
  import { page } from '$app/stores';
  import type { Post } from '../../models/post';
  import type { LoadInput } from '@sveltejs/kit/types.internal';

  export let postsByCategory: Post[];
  export let posts: Post[];

  $: readableSlug = convertToSentenceCase($page.params.slug);
</script>

<svelte:head>
  <title>{readableSlug} | Markus Hatvan</title>

  <meta
    name="description"
    content="Opinions and viewpoints about {readableSlug}."
  />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <CurrentGoals readableSlug="{readableSlug}" />
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">
  <BlogPostFilters posts="{postsByCategory}" filteredByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
