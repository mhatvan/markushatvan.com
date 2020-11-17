<script>
  import Image from 'svelte-image';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { faClock } from '@fortawesome/free-regular-svg-icons';

  // adding types throws compiler error for some reason
  // need https://github.com/sveltejs/svelte/pull/4282 to get merged
  export let readableSlug;

  const programmingGoals = [
    {
      text: 'Learn Svelte',
      reached: true,
    },
    {
      text: 'Work with Flutter',
      reached: false,
    },
    {
      text: 'Get better at algorithm challenges',
      reached: true,
    },
    {
      text: 'Contribute to Svelte and Sapper',
      reached: true,
    },
    {
      text: 'Start UI framework comparison website',
      reached: false,
    },
  ];

  const lifestyleGoals = [
    {
      text: 'Do full split',
      reached: true,
    },
    {
      text: 'Do smoothie cleanse for 10 consecutive days',
      reached: true,
    },
    {
      text: 'Replace all cleaning products with zero-waste solutions',
      reached: false,
    },
    {
      text: 'Fast for a full day',
      reached: false,
    },
    {
      text: 'Participate in a 140km bike race',
      reached: false,
    },
  ];

  $: isProgrammingCategory = readableSlug === 'Programming';
  $: goals = isProgrammingCategory ? programmingGoals : lifestyleGoals;
</script>

<div class="w-full md:w-2/4">
  <h1>{readableSlug}</h1>
  <h2>Current goals</h2>

  {#each goals as goal}
    <div class="flex items-baseline italic">
      {#if goal.reached}
        <Icon data="{faCheck}" class="mr-3 text-green-500" />
      {:else}
        <Icon data="{faClock}" class="mr-3 text-gray-600" />
      {/if}
      <p>{goal.text}</p>
    </div>
  {/each}
</div>
<div class="w-full md:w-2/4">
  {#if isProgrammingCategory}
    <Image src="code-review.png" alt="Man with code editor" />
  {:else}
    <Image src="into-the-night.png" alt="Man sitting next to campfire" />
  {/if}
</div>
