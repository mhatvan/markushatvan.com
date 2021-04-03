<script lang="ts">
  import { formatDate, convertToSlug } from '../utils';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<span class="text-teal-700">{formatDate(post.creationDate)}</span>
&middot;
<span class="text-teal-700">{post.readingTime}</span>
&middot;
<a sveltekit:prefetch href="/categories/{convertToSlug(post.category)}"
  >{post.category}
</a>
