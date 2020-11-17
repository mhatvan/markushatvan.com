<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';
  const { page } = stores();

  const baseURL = `https://markushatvan.com`;

  const fullURL = `${baseURL}${$page.path}`;

  const siteLogo = `${baseURL}/mh-favicon.svg`;

  const schemaOrgURL = 'http://schema.org';

  export let blogPostInfo: {
    title?: string;
    excerpt?: string;
    creationDate?: string;
    cover?: string;
  } = {};

  const fallbackTitle = 'Markus Hatvan - Full Stack Developer';
  const fallbackDescription =
    'Personal website and blog written from scratch with SapperJS and TailwindCSS.';

  const socialTitle = blogPostInfo.title || fallbackTitle;
  const socialDescription = blogPostInfo.excerpt || fallbackDescription;
  const socialImage = blogPostInfo.cover
    ? `${baseURL}/${blogPostInfo.cover}`
    : siteLogo;

  const authorJSONLD = {
    '@type': 'Person',
    name: 'Markus Hatvan',
    email: 'contact@markushatvan.com',
    address: 'Vienna, Austria',
  };

  let schemaOrgJSONLD: any[] = [
    {
      '@context': schemaOrgURL,
      '@type': 'WebSite',
      url: baseURL,
      name: fallbackTitle,
      alternateName: fallbackTitle,
    },
  ];

  const detailSchemaOrgJSONLD = [
    {
      '@context': schemaOrgURL,
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': fullURL,
            name: socialTitle,
            image: socialImage,
          },
        },
      ],
    },
    {
      '@context': schemaOrgURL,
      '@type': 'BlogPosting',
      url: fullURL,
      name: socialTitle,
      alternateName: socialTitle,
      headline: socialTitle,
      image: { '@type': 'ImageObject', url: socialImage },
      author: authorJSONLD,
      publisher: {
        ...authorJSONLD,
        '@type': 'Organization',
        logo: {
          '@type': 'ImageObject',
          url: siteLogo,
        },
      },
      datePublished: blogPostInfo.creationDate,
      description: socialDescription,
    },
  ];

  let isBlogDetailsPage = Object.keys(blogPostInfo).length > 0;

  $: openGraphType = isBlogDetailsPage ? 'article' : 'website';

  const ldJson = `${JSON.stringify(
    isBlogDetailsPage
      ? [...schemaOrgJSONLD, ...detailSchemaOrgJSONLD]
      : schemaOrgJSONLD,
  )}`;

  onMount(() => {
    const ldJsonScript = document.getElementById('addedldJsonScript');

    // We want to avoid placing multiple application/ld+json files in the DOM, therefore replace text content,
    // or load script only on first mount of component
    if (ldJsonScript) {
      ldJsonScript.textContent = ldJson;
    } else {
      const script = document.createElement('script');
      script.setAttribute('id', 'addedldJsonScript');
      script.type = 'application/ld+json';
      script.text = ldJson;
      document.head.appendChild(script);
    }
  });
</script>

<svelte:head>
  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="{socialTitle}" />
  <meta property="og:description" content="{socialDescription}" />
  <meta property="og:url" content="{fullURL}" />
  <meta property="og:image" content="{socialImage}" />
  <meta property="og:type" content="{openGraphType}" />

  <!-- Twitter -->
  <meta property="twitter:title" content="{socialTitle}" />
  <meta property="twitter:description" content="{socialDescription}" />
  <meta property="twitter:url" content="{fullURL}" />
  <meta property="twitter:image" content="{socialImage}" />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>
