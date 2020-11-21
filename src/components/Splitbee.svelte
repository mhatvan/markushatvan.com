<script>
  // @ts-nocheck
  import { stores } from '@sapper/app';
  const { page } = stores();
  import { onMount } from 'svelte';

  onMount(() => {
    const splitbeeScript = document.createElement('script');
    splitbeeScript.type = 'text/javascript';
    splitbeeScript.async = true;
    splitbeeScript.src = `https://cdn.splitbee.io/sb.js`;
    document.head.append(splitbeeScript)
  });
</script>
