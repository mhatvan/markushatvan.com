<style>
  .mailchimp-style {
    position: absolute;
    left: -5000px;
  }
</style>

<script>
  import ExternalLink from './ExternalLink.svelte';
</script>

<!-- Mailchimp Signup Form -->
<section class="container mb-16 text-center bg-gray-200 border-t-4 border-teal-700 mh-container">
  <div id="mc_embed_signup">
    <form
      action="https://markushatvan.us10.list-manage.com/subscribe/post?u=5cb357866d79280c8f4a5642a&amp;id=498b94dcd1"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <label for="mce-EMAIL" class="block pb-3 text-2xl font-bold">
          Subscribe to the email list for more content!
        </label>
        <input
          type="email"
          value=""
          name="EMAIL"
          class="w-full px-5 py-3 mb-3 text-gray-700 bg-white border border-gray-400 rounded appearance-none hover:border-gray-500"
          id="mce-EMAIL"
          placeholder="johndoe@mail.com"
          required
        />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div class="mailchimp-style" aria-hidden="true">
          <input
            type="text"
            name="b_5cb357866d79280c8f4a5642a_498b94dcd1"
            tabindex="{-1}"
            value=""
          />
        </div>
        <p class="text-xs text-gray-700">
          By clicking below to subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing.
          <ExternalLink href="https://mailchimp.com/legal/">
            Learn more about Mailchimp's privacy practices here.
          </ExternalLink>
        </p>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="w-full px-5 py-3 font-semibold text-white bg-teal-700 rounded cursor-pointer hover:bg-teal-800"
          />
        </div>
      </div>
    </form>
  </div>
</section>
