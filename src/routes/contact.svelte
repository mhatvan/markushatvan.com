<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import axios from 'redaxios';
  import {
    faTwitter,
    faMedium,
    faGithub,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faExternalLinkAlt,
    faCheckCircle,
  } from '@fortawesome/free-solid-svg-icons';
  import SEO from '$lib/SEO.svelte';
  import ExternalLink from '$lib/ExternalLink.svelte';

  let didSubmit = false;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const {
    form,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleReset,
    values,
  } = createForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required('Name is a required field.')
        .min(
          2,
          (value) => `Name must be at least ${value.min} characters long.`,
        ),
      email: yup
        .string()
        .email('Email must be a valid email.')
        .required('Email is a required field.'),
      comment: yup.string().required('Comment is a required field.'),
    }),
    onSubmit: (values: { name: string; email: string; comment: string }) => {
      axios
        .post('/', encode({ 'form-name': 'contact', ...values }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(() => {
          handleReset();
          didSubmit = true;
          setTimeout(() => {
            didSubmit = false;
          }, 5000);
        })
        .catch((error) => console.error(error));
    },
  });
</script>

<svelte:head>
  <title>Contact | Markus Hatvan</title>
  <meta
    name="description"
    content="If you want to say hello, the best way you can reach me is through these channels
    below."
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Contact for business inquiries</h1>

  <p>
    I'm currently available full-time to take on new projects. You can find an
    overview of the services that I offer under the
    <a href="/services" sveltekit:prefetch>Services</a>
    tab.
  </p>

  <h2>What projects am I looking for?</h2>

  <p>I am mainly looking for clients with projects:</p>
  <ul>
    <li>with a modern Javascript tech stack</li>
    <li>project duration of 1-3 months (ideally with follow-up projects)</li>
    <li>remote only or in the vicinity of Vienna, Austria</li>
    <li>comfortable with common Central European developer rates</li>
  </ul>

  <p>Please include answers to the following questions in the form below:</p>

  <ul>
    <li>How many hours are needed?</li>
    <li>Approximate deadline?</li>
    <li>Type of company? (Startup, Midsize or large corporation)</li>
    <li>Years in business?</li>
    <li>How did you hear about us?</li>
    <li>Why did you decide to work with us?</li>
  </ul>

  <h2>Let's get in touch!</h2>
  <p>I will guarantee to get back to you within 48 hours.</p>
  <form
    name="contact"
    class="mt-3 mb-8"
    netlify-honeypot="bot-field"
    data-netlify="true"
    on:submit="{handleSubmit}"
  >
    <div class="flex flex-wrap p-3 bg-gray-200 border border-gray-500 rounded">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" class="hidden" />
      <div class="w-1/2 px-2 my-2">
        <label
          for="name"
          class="mb-2 text-sm font-bold tracking-wide text-gray-700">Name</label
        >
        <input
          type="text"
          name="name"
          id="name"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.name}"
        />
        {#if $errors.name}<small transition:fade>{$errors.name}</small>{/if}
      </div>

      <div class="w-1/2 px-2 my-2">
        <label
          for="email"
          class="mb-2 text-sm font-bold tracking-wide text-gray-700"
          >Email</label
        >
        <input
          type="text"
          name="email"
          id="email"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.email}"
        />
        {#if $errors.email}<small transition:fade>{$errors.email}</small>{/if}
      </div>

      <div class="w-full px-2 my-2">
        <label
          for="comment"
          class="mb-2 text-sm font-bold tracking-wide text-gray-700"
          >Comment</label
        >
        <textarea
          rows="5"
          name="comment"
          id="comment"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.comment}"></textarea>
        {#if $errors.comment}
          <small transition:fade>{$errors.comment}</small>
        {/if}
      </div>

      <div class="w-full px-2 my-2">
        <button
          type="submit"
          class="w-full text-lg rounded disabled:cursor-not-allowed disabled:opacity-50 btn-primary"
          disabled="{!$isValid || $isSubmitting}"
        >
          Submit
        </button>
      </div>

      {#if didSubmit}
        <div class="w-full px-2 my-2" transition:fade>
          <div class="alert-success">
            <Icon
              data="{faCheckCircle}"
              class="mr-3 text-green-500"
              scale="{1.5}"
            />
            Message submitted successfully!
          </div>
        </div>
      {/if}
    </div>
  </form>

  <h2>Not convinced yet?</h2>
  <p>
    You can find my up-to-date CV under
    <a sveltekit:prefetch href="/resume">Resume</a>
    for all my professional references and experience.
  </p>
  <p>
    If you rather have a short meeting instead of writing emails, you can book a
    short meeting with me through
    <ExternalLink href="https://calendly.com/markushatvan/15min">
      Calendly.
    </ExternalLink>
  </p>

  <p>
    There is always something to discuss as long as you are not trying to trick
    me with
    <ExternalLink
      href="https://www.cnbc.com/2019/04/18/nigerian-prince-scams-still-rake-in-over-700000-dollars-a-year.html"
    >
      the "Nigerian prince" email scam.
    </ExternalLink>
    ;)
  </p>

  <h2>Across the web</h2>
  <p>
    If you just want to say hello, the best way you can reach me is through
    these channels below.
  </p>

  <div class="flex flex-wrap mb-6">
    <ExternalLink
      href="mailto:contact@markushatvan.com"
      ariaLabel="Write me a mail"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faEnvelope}" scale="{2}" />
    </ExternalLink>
    <ExternalLink
      href="https://github.com/mhatvan"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faGithub}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://www.linkedin.com/in/markus-hatvan-b912b91aa/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faLinkedin}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://twitter.com/HatvanMarkus"
      ariaLabel="Tweet with me on Twitter"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faTwitter}" class="ml-5" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://medium.com/@markushatvan"
      ariaLabel="Follow me on Medium"
      customClass="inline-flex text-teal-900 hover:text-teal-700"
    >
      <Icon data="{faMedium}" class="ml-5" scale="{2}" />
    </ExternalLink>
  </div>

  <div class="flex flex-wrap">
    <div class="w-full sm:w-1/3">
      <h3>Found an unexpected bug?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Submit issue
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Improvements for the website?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Request feature
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Got a blog post topic proposal?</h3>
      <ExternalLink
        href="https://github.com/mhatvan/markushatvan.com/issues/new"
        customClass="inline-flex"
      >
        Suggest content
        <Icon data="{faExternalLinkAlt}" class="mt-1 ml-2" />
      </ExternalLink>
    </div>
  </div>
</section>

<style>
  small {
    @apply text-red-600;
  }
</style>
