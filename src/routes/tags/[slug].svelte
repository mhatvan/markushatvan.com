<script context="module">
  import { convertToSentenceCase } from '../../utils';

  export async function load({ page, fetch }: LoadInput) {
    try {
      const allPosts = await fetch(`/blog.json`);
      const posts: Post[] = await allPosts.json();

      const postsByTag = posts.filter((post: Post) => {
        if (!post.tags) {
          return [];
        }
        const regex = new RegExp(post.tags.join('|'), 'i');
        return regex.test(convertToSentenceCase(page.params.slug));
      });

      return { props: { posts, postsByTag, slug: page.params.slug } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../../models/post';
  import type { LoadInput } from '@sveltejs/kit/types.internal';

  export let postsByTag: Post[];
  export let slug: string;
  export let posts: Post[];

  const readableSlug = convertToSentenceCase(slug);
</script>

<svelte:head>
  <title>{readableSlug} | Markus Hatvan</title>

  <meta name="description" content="Posts tagged with {readableSlug}." />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <h1>
    Posts tagged with
    <span class="underline">{readableSlug}</span>
  </h1>
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">
  <BlogPostFilters posts="{postsByTag}" filteredByTag />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
