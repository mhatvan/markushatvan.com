<script lang="ts">
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '../models/post';

  export let posts: Post[];

  const popularPosts = posts.filter((_post: Post, idx: number) => idx < 3);
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Popular Articles</h2>
  </header>

  {#each popularPosts as post}
    <div class="py-4 border-b border-gray-600">
      <InfoTags post="{post}" />
      <br />
      <a sveltekit:prefetch href="/blog/{post.slug}" class="text-gray-800"
        >{post.title}</a
      >
    </div>
  {/each}
</div>
