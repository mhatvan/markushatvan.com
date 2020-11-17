<script context="module">
  export async function preload() {
    try {
      const blog = await this.fetch(`blog.json`);
      const posts = await blog.json();

      // const webmentions = await this.fetch(
      //   `https://webmention.io/api/count.json?target=${params.slug}`,
      // );
      // const webmentionCounts = await webmentions.json();

      return { posts };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script>
  import Image from 'svelte-image';
  import BlogPostHeader from '../../components/BlogPostHeader.svelte';
  import BlogPostSidebar from '../../components/BlogPostSidebar.svelte';
  import ShareButtons from '../../components/ShareButtons.svelte';
  import ReplyBox from '../../components/ReplyBox.svelte';
  import PrevNextArticle from '../../components/PrevNextArticle.svelte';
  import BackToBlogOverviewBtn from '../../components/BackToBlogOverviewBtn.svelte';
  import BlogOverviewHeader from '../../components/BlogOverviewHeader.svelte';
  import BlogPostFilters from '../../components/BlogPostFilters.svelte';
  import SEO from '../../components/SEO.svelte';
  import { afterUpdate } from 'svelte';
  import { convertToSlug } from '../../helpers/utils.js';

  // import Webmentions from '../../components/Webmentions.svelte';
  // import type { Post } from '../../models/post';

  // adding types throws compiler error for some reason
  // need https://github.com/sveltejs/svelte/pull/4282 to get merged
  export let posts;
  export let segment;

  $: segment = segment;
  $: post = posts.find((post) => post.slug === segment);
  $: postIndex = posts.findIndex((p) => p.slug === segment);
  $: previousArticle = posts[postIndex + 1];
  $: nextArticle = posts[postIndex - 1];
  $: pageTitle = `${post?.title} | Markus Hatvan`;

  $: blogPostInfo = post
    ? {
        title: pageTitle,
        excerpt: post?.excerpt,
        creationDate: post?.creationDate,
        cover: post?.cover,
      }
    : {};

  afterUpdate(() => {
    const headings = document.querySelectorAll(
      'article h1, article h2, article h3, article h4, article h5, article h6',
    );

    headings.forEach((heading) => {
      const headingVal = heading.innerHTML;
      const slug = convertToSlug(headingVal);

      const cleanedSlug = slug.replace(/\d-/, '').replace(/[.?!:',/]/g, '');

      heading.innerHTML = `${headingVal} <a href="/blog/${post.slug}#${cleanedSlug}" class="anchor-link" title="Copy anchor link">#</a>`;
      heading.id = slug;
    });

    const locationWithoutHash = window.location.hash.slice(1);
    let validAnchorLink = locationWithoutHash.replace(/^\d\.\s\-/g, '');
    validAnchorLink = validAnchorLink.replace(/[!:',/]/g, '');

    if (validAnchorLink) {
      const anchorLink = document.querySelector(`#${validAnchorLink}`);

      if (anchorLink) {
        const fixedNavbarOffset = -60;
        const offsettedAnchorLink =
          anchorLink.getBoundingClientRect().top +
          window.pageYOffset +
          fixedNavbarOffset;

        window.scrollTo({ top: offsettedAnchorLink, behavior: 'smooth' });
      }
    }
  });
</script>

<svelte:head>
  <title>{segment ? pageTitle : 'Blog | Markus Hatvan'}</title>
  <meta
    name="description"
    content="{segment ? post && post.excerpt : 'Opinions and viewpoints about Programming, Lifestyle and other topics.'}"
  />
</svelte:head>

{#if segment}
  <SEO blogPostInfo="{blogPostInfo}" />

  <BlogPostHeader post="{post}" />

  <section class="container flex flex-wrap mh-container">
    <article class="w-full pb-12 blog lg:w-9/12 lg:pr-16">
      <slot />

      <div class="p-5 my-8 text-center border-4 border-teal-700">
        <p><b>If you liked this post, share it:</b></p>
        <ShareButtons post="{post}" />
      </div>

      <div class="flex items-center my-8">
        <BackToBlogOverviewBtn />
      </div>

      <PrevNextArticle
        previousArticle="{previousArticle}"
        nextArticle="{nextArticle}"
      />

      <!-- <Webmentions webmentionCounts="{webmentionCounts}" /> -->

      <ReplyBox />
    </article>

    <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
      <BlogPostSidebar posts="{posts}" />
    </aside>
  </section>
{:else}
  <SEO />

  <BlogOverviewHeader>
    <div class="w-full md:w-2/3 md:pr-10">
      <h1>Blog</h1>
      <p>
        Opinions and viewpoints about
        <a href="/categories/programming" rel="prefetch">Programming</a>,
        <a href="/categories/lifestyle" rel="prefetch">Lifestyle</a>
        and other topics. I am here to share my knowledge in an expressive
        manner and there will be guest authors from time to time.
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
      <Image src="blog-post.png" alt="Blog post card" />
    </div>
  </BlogOverviewHeader>

  <section class="container flex flex-wrap mh-container">
    <BlogPostFilters posts="{posts}" />

    <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
      <BlogPostSidebar posts="{posts}" />
    </aside>
  </section>
{/if}

<style>
  .max-width {
    max-width: 250px;
  }
</style>
