<script>
  import type { Post } from '../models/post';
  import { convertToSlug } from '../utils';

  export let posts: Post[];

  const uniqueCategories: string[] = posts
    .map((post) => post.category)
    .filter((post, idx, arr) => arr.indexOf(post) === idx);
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Categories</h2>
  </header>

  <nav role="complementary">
    {#each uniqueCategories as category}
      <a
        class="block py-4 border-b border-gray-600"
        href="/categories/{convertToSlug(category)}"
      >
        {category}
      </a>
    {/each}
  </nav>
</div>
