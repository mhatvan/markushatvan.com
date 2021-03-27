<script>
  import { isDev } from '../stores';
</script>

{#if $isDev}
  <!-- Display current tailwind breakpoint in dev -->
  <div class="fixed top-0 z-50 p-2 text-xs font-bold text-black">
    <span class="p-1 px-1 bg-yellow-400 rounded sm:hidden">XS</span>
    <span class="hidden px-1 bg-yellow-400 rounded sm:inline-block md:hidden"
      >SM</span
    >
    <span
      class="hidden px-1 bg-yellow-400 rounded sm:hidden md:inline-block lg:hidden"
      >MD</span
    >
    <span class="hidden px-1 bg-yellow-400 rounded lg:inline-block xl:hidden"
      >LG</span
    >
    <span class="hidden px-1 bg-yellow-400 rounded xl:inline-block 2xl:hidden"
      >XL</span
    >
    <span class="hidden px-1 bg-yellow-400 rounded 2xl:inline-block">2XL</span>
  </div>
{/if}
