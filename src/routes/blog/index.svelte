<script context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      const blog = await fetch(`/blog.json`);
      const posts = await blog.json();

      // const webmentions = await fetch(
      //   `https://webmention.io/api/count.json?target=${params.slug}`,
      // );
      // const webmentionCounts = await webmentions.json();

      return { props: { posts } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogPost from '../../../static/blog-post.png';
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { LoadInput } from '@sveltejs/kit/types.internal';
  import type { Post } from '../../models/post';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog | Markus Hatvan</title>
  <meta
    name="description"
    content="Opinions and viewpoints about Programming, Lifestyle and other topics."
  />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <div class="w-full md:w-2/3 md:pr-10">
    <h1>Blog</h1>
    <p>
      Opinions and viewpoints about
      <a href="/categories/programming" sveltekit:prefetch>Programming</a>,
      <a href="/categories/lifestyle" sveltekit:prefetch>Lifestyle</a>
      and other topics. I am here to share my knowledge in an expressive manner and
      there will be guest authors from time to time.
    </p>
    <h2>Got a blog post topic proposal?</h2>
    <p>
      You can suggest content
      <a
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        on the GitHub project page
      </a>
      or through my socials.
    </p>
  </div>
  <div class="w-full mx-auto max-width sm:w-1/2 md:w-1/3">
    <img srcset="{BlogPost}" type="image/webp" alt="Blog post card" />
  </div>
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">
  <BlogPostFilters posts="{posts}" />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
