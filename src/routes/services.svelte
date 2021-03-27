<script>
  import ExternalLink from '$lib/ExternalLink.svelte';
  import SEO from '$lib/SEO.svelte';
</script>

<svelte:head>
  <title>Services | Markus Hatvan</title>
  <meta
    name="description"
    content="I create next-level web solutions customized for your needs."
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Services that I offer</h1>

  <p>
    I support committed website owners, companies, startups and individuals just
    like you to improve page performance and save time and stress on the long
    run. I work fast and efficient according to best practices in my area of
    expertise. I also contribute to open source projects on a regular basis and
    therefore can get started and accustomed to new projects quickly. I
    understand that finding the perfect candidate for your project is not easy,
    but when working with me, you can be sure that I will always make sure to
    treat your project as if it would be my own!
  </p>

  <h2>I create next-level web solutions customized for your needs.</h2>

  <p>
    Launching a product or creating a website is complex and overwhelming
    process. That's why I'm here to help you through it to make sure your users
    get the experience they need. Your product has so much potential, so let's
    make it a mindblowing experience!
  </p>

  <h2>Interested in a collaboration?</h2>
  <p>
    You can send me a message through the
    <a href="/contact" sveltekit:prefetch>Contact</a>
    page. Additionally, my CV is available and can be downloaded on the
    <a href="/resume" sveltekit:prefetch>Resume</a>
    page.
  </p>

  <div class="flex flex-wrap -m-2">
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faDraftingCompass}" class="mr-3" scale="{2}" /> -->
          Prototyping your idea
        </h2>

        <p>
          Do you have a idea on paper that needs to be realised and tested for
          viability?
        </p>
        <p>
          I can create a first iteration of a prototype based off mockups for
          you in no time, so that you can re-evaluate the product.
        </p>
      </div>
    </div>
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faClipboardList}" class="mr-3" scale="{2}" /> -->
          Continue development on an existing product
        </h2>

        <p>
          In need of a developer to get a different view on things? Are there
          many features or bug fixes that need to be implemented? Is there a
          looming deadline that you have to meet?
        </p>

        <p>
          You can hire me to implement new features for your product and improve
          it according to your needs.
        </p>
      </div>
    </div>
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faChalkboardTeacher}" class="mr-3" scale="{2}" /> -->
          Project review
        </h2>

        <p>
          Do you have issues with your website or product that keep users from
          enjoying it? Are you experiencing some of the following issues:
        </p>
        <ul>
          <li>bad user experience</li>
          <li>slow and laggy page performance</li>
          <li>your technical SEO is lacking</li>
          <li>handicapped users cannot user your site effectively</li>
        </ul>

        <p>
          I can review your website and give you a detailed analysis about the
          bottlenecks.
        </p>
      </div>
    </div>

    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faPenFancy}" class="mr-3" scale="{2}" /> -->
          Technical writing
        </h2>

        <p>
          I love writing technical articles and help out new developers. Some of
          my articles have been published on platforms like freeCodeCamp, Hacker
          Noon, Medium or codeburst.
        </p>

        <p>
          Here is a small subselection of published articles to give you a feel
          for my writing style:
        </p>
        <ul>
          <li>
            <ExternalLink
              href="https://www.freecodecamp.org/news/why-you-should-start-contributing-to-open-source-software-right-now/"
            >
              Why You Should Start Contributing to Open Source Software Right
              Now
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://hackernoon.com/why-i-chose-sapperjs-for-my-website-and-what-ive-learned-about-the-framework-so-far-rd473ypc"
            >
              Why I Chose SapperJS For My Website, and What I've Learned About
              the Framework So Far
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://medium.com/better-programming/10-reasons-why-i-recommend-svelte-to-every-new-web-developer-8e0e2030b413"
            >
              10 Reasons Why I Recommend Svelte to Every New Web Developer
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://medium.com/better-programming/8-common-web-development-mistakes-87800f80d8e"
            >
              8 Common Web Development Mistakes and How to Avoid Them
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faComments}" class="mr-3" scale="{2}" /> -->
          Public speaking
        </h2>
        <p>
          It is always a pleasure for me to share knowledge and present
          interesting topics to an audience at a meetup or conference.
        </p>
        <p>
          Whatever the topic, pitch it to me and we will find a way to showcase
          it in the ideal way.
        </p>
      </div>
    </div>
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faHandshake}" class="mr-3" scale="{2}" /> -->
          Coaching/Consulting
        </h2>

        <p>
          Do you have a hard time understanding a certain software development
          concept? Do you experience running into a lot of bugs with your code?
          Is there an issue with the collaboration of team members in your
          company?
        </p>
        <p>
          I can help you to incorporate best practices and code quality tools
          into your or your teams workflow, learn you a certain JavaScript
          framework or detect the productivity bottlenecks.
        </p>
      </div>
    </div>
  </div>
</section>
