<script>
  import GithubButton from './GithubButton.svelte';

  // Unfortunately have to add the repos manually, since I would be running into rate limiting of GitHub API all the time
  const repos = [
    {
      name: 'Svelte',
      description: 'Cybernetically enhanced web apps',
      full_name: 'sveltejs/svelte',
      stargazers_count: '47.7k',
    },
    {
      name: 'React Boilerplate',
      description:
        '🔥 A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.',
      full_name: 'react-boilerplate/react-boilerplate',
      stargazers_count: '27.6k',
    },
    {
      name: 'Mailspring',
      description:
        '💌 A beautiful, fast and maintained fork of @nylas Mail by one of the original authors.',
      full_name: 'Foundry376/Mailspring',
      stargazers_count: '10.9k',
    },
    {
      name: 'Webhint',
      description: '💡 A hinting engine for the web',
      full_name: 'webhintio/hint',
      stargazers_count: '3.2k',
    },
    {
      name: 'Ferdi',
      description:
        '🧔🏽 Ferdi helps you organize how you use your favourite apps by combining them into one application',
      full_name: 'getferdi/ferdi',
      stargazers_count: '3k',
    },
    {
      name: 'WebTemplateStudio',
      description:
        'Microsoft Web Template Studio quickly builds web applications using a wizard-based UI to turn your needs into a foundation of best patterns and practices',
      full_name: 'microsoft/WebTemplateStudio',
      stargazers_count: '1.9k',
    },
    {
      name: 'eslint-plugin-unicorn',
      description: 'Various awesome ESLint rules',
      full_name: 'sindresorhus/eslint-plugin-unicorn',
      stargazers_count: '1.9k',
    },
  ];
</script>

<section class="container mh-container">
  <h2 class="border-b-4 border-teal-700">Past Open Source Contributions</h2>
  {#each repos as repo}
    <div
      class="flex flex-wrap items-center justify-between pb-3 my-6 border-b border-gray-300"
    >
      <div class="inline-flex items-center w-full lg:w-1/4">
        <h3 class="my-0 font-bold break-all">{repo.name}</h3>
      </div>
      <div class="w-full my-3 lg:w-2/4">
        <p class="my-0">{repo.description}</p>
      </div>
      <div class="w-full lg:text-right lg:w-1/4">
        <div class="inline-flex">
          <GithubButton
            urlSlug="{repo.full_name}"
            count="{repo.stargazers_count}"
          />
        </div>
      </div>
    </div>
  {/each}
</section>
