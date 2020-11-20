<script>
  // @ts-nocheck
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  export let segment: string;

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 w-full bg-white header-box-shadow">
  <div
    class="container flex flex-wrap items-baseline justify-between p-3 mx-auto bg-white"
  >
    <div class="flex">
      <a
        rel="prefetch"
        aria-current="{segment === undefined ? 'page' : undefined}"
        href="."
        class="mt-0 text-xl font-semibold tracking-tight nav-link sm:inline-block"
      >
        Markus Hatvan
      </a>
    </div>
    <div class="ml-auto sm:hidden">
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
      class="w-full ml-auto sm:flex sm:w-auto"
    >
      <a
        rel="prefetch"
        aria-current="{segment === 'about' ? 'page' : undefined}"
        href="/about"
        class="nav-link sm:inline-block sm:mt-0"
      >
        About
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'blog' ? 'page' : undefined}"
        href="/blog"
        class="nav-link sm:inline-block sm:mt-0"
      >
        Blog
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'recommendations' ? 'page' : undefined}"
        href="/recommendations"
        class="nav-link sm:inline-block sm:mt-0"
      >
        Recommendations
      </a>
      <a
        rel="prefetch"
        aria-current="{segment === 'contact' ? 'page' : undefined}"
        href="/contact"
        class="nav-link sm:inline-block sm:mt-0"
      >
        Contact
      </a>
      <a
        href="https://github.com/mhatvan"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-0 nav-link sm:inline-block sm:mt-0"
      >
        GitHub
        <Icon data="{faGithub}" class="ml-2 -mt-1" />
      </a>
    </nav>
  </div>
</header>

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  [aria-current] {
    font-weight: bold;
  }

  header {
    z-index: 1;
  }
</style>
