<script lang="ts">
  import type { Post } from '../models/post';

  export let previousArticle: Post;
  export let nextArticle: Post;
</script>

<div class="flex flex-wrap mb-10 -m-2">
  {#if previousArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="h-full p-5 card">
        <small class="block text-sm text-gray-600">
          <em>Previous article</em>
        </small>
        <b>
          <a
            sveltekit:prefetch
            href="/blog/{previousArticle.slug}"
            class="text-xl no-underline hover:underline link-inherit"
            style="font-weight: 700;"
          >
            {previousArticle.title}
          </a>
        </b>
      </div>
    </div>
  {/if}
  {#if nextArticle}
    <div class="w-full p-2 md:w-1/2">
      <div class="h-full p-5 card">
        <small class="block text-sm text-gray-600">
          <em>Next article</em>
        </small>
        <b>
          <a
            sveltekit:prefetch
            href="/blog/{nextArticle.slug}"
            class="text-xl no-underline hover:underline link-inherit"
            style="font-weight: 700;"
          >
            {nextArticle.title}
          </a>
        </b>
      </div>
    </div>
  {/if}
</div>
