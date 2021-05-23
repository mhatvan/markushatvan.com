<script context="module">
  export async function load({ fetch, page }) {
    const res = await fetch(`/blog.json`);
    const posts = await res.json();
    const post = posts.find((post) => post.slug === page.params.slug);
    return {
      props: {
        post: post,
      },
    };
  }
</script>

<script lang="ts">
  import BackToBlogOverviewBtn from '$lib/BackToBlogOverviewBtn.svelte';
  import BlogPostHeader from '$lib/BlogPostHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import PrevNextArticle from '$lib/PrevNextArticle.svelte';
  import ShareButtons from '$lib/ShareButtons.svelte';
  import type { Post } from 'src/models/post';
//   import { page } from '$app/stores';
  import SEO from '$lib/SEO.svelte';

//   export let posts: Post[];
   export let post;
  
//   $: post = posts.find((post) => post.slug === $page.params.slug);
  $: postIndex = posts.findIndex((p) => p.slug === $page.params.slug);
  $: previousArticle = posts[postIndex + 1];
  $: nextArticle = posts[postIndex - 1];
  $: pageTitle = `${post?.title} | Markus Hatvan`;

  $: blogPostInfo = post
    ? {
        title: pageTitle,
        excerpt: post.excerpt,
        creationDate: post.creationDate,
        cover: post.cover,
      }
    : {};
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<SEO blogPostInfo="{blogPostInfo}" />
<BlogPostHeader post="{post}" />
<section class="container flex flex-wrap mh-container">
  <article class="w-full pb-12 prose-lg lg:prose-xl blog lg:w-9/12 lg:pr-16">
    {@html post.html}
    <div class="p-5 my-8 text-center border-4 border-teal-700">
      <p class="mt-0 mb-4"><b>If you liked this post, share it:</b></p>
      <ShareButtons post="{post}" />
    </div>
    <div class="flex items-center my-8">
      <BackToBlogOverviewBtn />
    </div>
    <PrevNextArticle
      previousArticle="{previousArticle}"
      nextArticle="{nextArticle}"
    />
  </article>
  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
