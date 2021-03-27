<script>
  import AboutMe from './AboutMe.svelte';
  import PopularArticles from './PopularArticles.svelte';
  import SubscribeAndFollow from './SubscribeAndFollow.svelte';
  import Categories from './Categories.svelte';
  import Newsletter from './Newsletter.svelte';
  import type { Post } from '../models/post';

  export let posts: Post[];
</script>

<AboutMe />

<Newsletter />

<PopularArticles {posts} />

<Categories {posts} />

<SubscribeAndFollow />
