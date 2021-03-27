<script>
  import SEO from '$lib/SEO.svelte';
  import ExternalLink from '$lib/ExternalLink.svelte';
  import AffiliateNotice from '$lib/AffiliateNotice.svelte';
</script>

<svelte:head>
  <title>About | Markus Hatvan</title>
  <meta
    name="description"
    content="I created this website to be visible on the web as a developer and to share the
    knowledge that I gathered over the years."
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>About Me</h1>

  <div class="mb-6">
    <AffiliateNotice />
  </div>

  <p>
    Hey, I am Markus, a freelance Full Stack Web Developer, Calisthenics
    enthusiast, craft beer lover, and biohacker.
  </p>

  <p>
    I created this website to be visible on the web as a developer and to share
    the knowledge that I gathered over the years. I want to provide value to the
    public and share my thoughts. I wrote an article explaining
    <a sveltekit:prefetch href="/blog/6-reasons-why-i-started-this-blog">
      my reasons why I started this blog</a
    >.
  </p>

  <p>
    The topics that I am especially passionate about are application performance
    optimization, dependency upgrades, code quality, technical SEO and
    accessibility.
  </p>
  <p>
    I love open source software and made code contributions to libraries like
    Microsoft WebTemplateStudio, Svelte, react-boilerplate, Ethereum and
    eslint-plugin-unicorn in the past.
  </p>

  <p>
    Additionally, I write technical articles which are published on platforms
    like freeCodeCamp, Hacker Noon, Medium and codeburst or hold presentations
    at meetups.
  </p>

  <h2>Facts about me</h2>
  <ul>
    <li>does 16-8 intermittent fasting pretty much every day 🍏</li>
    <li>
      keeps a growing
      <a href="/blog/the-beer-bucket-list-for-the-aspiring-connoisseur"
        >list of over ~100 beers</a
      >
      that he drank 🍺
    </li>
    <li>did a smoothie cleanse for 10 days 🥤</li>
    <li>loves to go to metal concerts & drum and bass shows 🎸</li>
    <li>invests in the stock market and owns ~30 crypto coins 💰</li>
    <li>goes everywhere with his mountain bike 🚴‍♂️</li>
    <li>tries to improve everyday life with zero waste options 💚</li>
    <li>enjoys going for a barefoot hike on mountains ⛰️</li>
    <li>can do a full split 🤸‍♂️</li>
    <li>loves to go ice swimming or having a cold shower 🏊‍♂️</li>
    <li>loves to play video games on the hardest difficulty 🎮</li>
  </ul>

  <h2>Current office setup</h2>
  <ul>
    <li>
      <b>Computer:</b>
      <ExternalLink href="https://ubuntu.com/">Ubuntu 20.04</ExternalLink>
      &
      <ExternalLink href="https://www.microsoft.com/">Windows 10</ExternalLink>
      dual-boot
    </li>
    <li>
      <b>Code editor:</b>
      <ExternalLink href="https://code.visualstudio.com/">
        Visual Studio Code
      </ExternalLink>
    </li>
    <li>
      <b>Application management:</b>
      <ExternalLink href="https://rambox.pro/">Rambox</ExternalLink>
    </li>
    <li>
      <b>Browser:</b>
      <ExternalLink href="https://brave.com">Brave Browser</ExternalLink>
    </li>
    <li>
      <b>Email:</b>
      <ExternalLink href="https://www.thunderbird.net/">
        Thunderbird
      </ExternalLink>
    </li>
    <li>
      <b>Music:</b>
      <ExternalLink href="https://www.spotify.com/">Spotify</ExternalLink>
    </li>
    <li>
      <b>Headphones:</b>
      <ExternalLink href="https://amzn.to/3imgiAw" isAffiliateLink>
        Audio-Technica ATH-M50x
      </ExternalLink>
    </li>
    <li>
      <b>Speakers:</b>
      <ExternalLink href="https://amzn.to/2BsWj2v" isAffiliateLink>
        Yamaha HS7
      </ExternalLink>
    </li>
    <li>
      <b>Monitors:</b>
      <ExternalLink href="https://amzn.to/2BT495t" isAffiliateLink>
        BenQ GL2580H
      </ExternalLink>
    </li>
    <li>
      <b>Audio interface:</b>
      <ExternalLink href="https://amzn.to/2VBCD3w" isAffiliateLink>
        Focusrite Scarlett 2i2
      </ExternalLink>
    </li>
  </ul>

  <h2>If you like my content, a tip would be awesome!</h2>

  <p>
    Buy me a coffee:
    <ExternalLink href="https://www.buymeacoffee.com/mhatvan">
      mhatvan
    </ExternalLink>
  </p>
  <p>
    PayPal:
    <ExternalLink href="https://paypal.me/mhatvan">mhatvan</ExternalLink>
  </p>

  <p>BTC: <code>15UgBxhsGAUPmtqMQAFpkVUuqLa6e3rzGp</code></p>
  <p>ETH: <code>0xc7f207503E83F74bF4628c5b60d2Fb8fdd7977E4</code></p>
  <p>XRP: <code>rpkbvS8QG9pzcVPMQux8ug4T5L2B74eGfo</code></p>
  <p>LTC: <code>Le7jKe5Y5s8EHXLMVHruSzcj2PJbnyeD53</code></p>
</section>

<style>
  code {
    margin: 0 0.2em;
    padding: 0.2em 0.4em 0.1em;
    background: rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    word-break: break-all;
  }
</style>
