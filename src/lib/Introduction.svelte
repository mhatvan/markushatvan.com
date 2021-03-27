<script>
  import Image from 'svelte-image';
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <div
      class="flex flex-col-reverse flex-wrap items-center justify-between px-12 py-8 bg-white rounded shadow-xl md:flex-row"
    >
      <div class="w-full md:w-2/3 md:pr-10">
        <h1>Hey there, I'm Markus.</h1>

        <p>
          I'm a freelance Full Stack Web Developer based in Vienna, Austria.
          Welcome to my personal website, get ready for some great tips on
          programming, biohacking, and life in general. Enjoy!
        </p>

        <p>
          Check out my
          <a
            href="https://github.com/mhatvan"
            target="_blank"
            rel="noopener noreferrer"
          >
            latest activity on GitHub</a>!
        </p>
      </div>
      <div class="w-full mx-auto max-width sm:w-1/2 md:w-1/3">
        <Image
          src="markus-hatvan.jpeg"
          alt="Markus Hatvan"
          placeholderClass="rounded-full"
          class="rounded-full"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .max-width {
    max-width: 250px;
  }
</style>
