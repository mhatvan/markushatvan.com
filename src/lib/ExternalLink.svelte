<script lang="ts">
  export let href: string;
  export let title: string | undefined = undefined;
  export let customClass: string = '';
  export let ariaLabel: string | undefined = undefined;
  export let rel: string = '';
  export let isAffiliateLink: boolean = false;
</script>

<a
  href="{href}"
  target="_blank"
  rel="noopener noreferrer {rel}"
  class="cursor-pointer {customClass}"
  title="{title}"
  aria-label="{ariaLabel}"
>
  <!-- prettier-ignore -->
  <slot />{isAffiliateLink ? '*' : ''}
</a>
