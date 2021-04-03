<script lang="ts">
  import BlogPostTag from './BlogPostTag.svelte';
  import ShareButtons from './ShareButtons.svelte';
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <div
      class="flex items-center justify-between p-6 text-center bg-white rounded shadow-xl
      sm:flex-row"
    >
      <div class="w-full">
        <h1>{post.title}</h1>

        <InfoTags post="{post}" />

        <BlogPostTag tags="{post.tags}" />

        <div class="flex flex-wrap justify-center my-5">
          <ShareButtons post="{post}" />
        </div>

        {#if post.hasAffiliateLink}
          <div class="text-sm text-gray-700 italic" role="alert">
            Disclosure: This article may contain affiliate links, meaning I
            receive a commission for purchases made through these links, at no
            cost to you.
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
