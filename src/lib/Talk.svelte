<script lang="ts">
  import ExternalLink from './ExternalLink.svelte';
  import Icon from 'svelte-awesome';
  import type { ITalk } from 'src/models/talk';
  import { formatDate } from '../utils';

  export let talk: ITalk;
</script>

<div
  class="flex flex-wrap items-center justify-between pb-6 mt-6 border-b border-gray-300"
>
  <div class="inline-flex items-center w-full mb-3 lg:my-0 lg:w-3/4">
    <Icon data="{talk.logo}" scale="{2}" class="mr-3 {talk.logoColor}" />
    <span class="mr-3 text-sm text-gray-800"
      >{talk.date ? formatDate(talk.date) : 'TBD'}</span
    >
    <span class="block">
      <b>{talk.title}</b>
      {#if talk.videoLink}
        &middot;
        <ExternalLink href="{talk.videoLink}">Video</ExternalLink>
      {/if}
      {#if talk.slidesLink}
        &middot;
        <ExternalLink href="{talk.slidesLink}">Slides</ExternalLink>
      {/if}
    </span>
  </div>
  <div class="w-full lg:w-1/4">
    <ExternalLink href="{talk.organizerLink}">
      {talk.organizer}
    </ExternalLink>
    &middot;
    {talk.location}
  </div>
</div>
