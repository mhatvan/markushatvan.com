<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 w-full bg-white header-box-shadow">
  <div
    class="container flex flex-wrap items-center justify-between p-3 mx-auto bg-white"
  >
    <div class="flex">
      <a
        sveltekit:prefetch
        href="."
        class="mt-0 text-xl font-semibold tracking-tight nav-link md:inline-block"
      >
        <img class="h-8" src="/mh-logo.jpeg" alt="Markus Hatvan" />
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center px-3 py-2 text-teal-700 border border-gray-400 hover:text-teal-800 hover:border-gray-500"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="w-full ml-auto md:flex md:w-auto"
    >
      <a
        sveltekit:prefetch
        href="/about"
        class="nav-link md:inline-block md:mt-0"
      >
        About
      </a>
      <a
        sveltekit:prefetch
        href="/blog"
        class="nav-link md:inline-block md:mt-0"
      >
        Blog
      </a>
      <a
        sveltekit:prefetch
        href="/recommendations"
        class="nav-link md:inline-block md:mt-0"
      >
        Recommendations
      </a>
      <a
        sveltekit:prefetch
        href="/services"
        class="nav-link md:inline-block md:mt-0"
      >
        Services
      </a>
      <a
        sveltekit:prefetch
        href="/contact"
        class="nav-link md:inline-block md:mt-0"
      >
        Contact
      </a>
    </nav>
  </div>
</header>

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  header {
    z-index: 1;
  }
</style>
