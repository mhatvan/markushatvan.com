<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {
    faReddit,
    faPinterest,
    faTwitter,
    faFacebook,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import { page } from '$app/stores';
  import type { Post } from '../models/post';

  export let post: Post;

  const fullURL = `https://markushatvan.com${$page.path}`;
  const encodedURL = encodeURIComponent(fullURL);
  const encodedPostTitle = encodeURIComponent(post.title);
  const encodedPostExcerpt = encodeURIComponent(post.excerpt);

  const shareButtonStyle = 'inline-flex text-teal-700 hover:text-teal-800';
</script>

<a
  href="https://www.facebook.com/sharer/sharer.php?u={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Facebook"
>
  <Icon data="{faFacebook}" class="mr-3" scale="{1.5}" />
</a>
<a
  href="https://www.linkedin.com/shareArticle?mini=true&url={encodedURL}&title={encodedPostTitle}&summary={encodedPostExcerpt}&source=LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on LinkedIn"
>
  <Icon data="{faLinkedin}" class="mx-3" scale="{1.5}" />
</a>
<a
  href="https://twitter.com/intent/tweet?text={encodedPostTitle}&url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Twitter"
>
  <Icon data="{faTwitter}" class="mx-3" scale="{1.5}" />
</a>
<a
  href="https://www.reddit.com/submit?url={encodedURL}&title={encodedPostTitle}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Reddit"
>
  <Icon data="{faReddit}" class="mx-3" scale="{1.5}" />
</a>
<a
  href="https://pinterest.com/pin/create/button/?url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Pinterest"
>
  <Icon data="{faPinterest}" class="mx-3" scale="{1.5}" />
</a>
