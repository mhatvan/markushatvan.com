import fs from 'fs';
import frontMatter from 'front-matter';
import marked from 'marked';
import Prism from 'prismjs';
import 'prism-svelte';
import loadLanguages from 'prismjs/components/index.js';
// import readingTime from 'read-time-estimate';

loadLanguages(['shell', 'markdown', 'json']);

const posts = fs
  .readdirSync('./src/routes/blog')
  .filter((elem) => elem.endsWith('.svx'))
  .map((postFilename) => {
    const postContent = fs.readFileSync(`./src/routes/blog/${postFilename}`, {
      encoding: 'utf8',
    });

    const postFrontMatter = frontMatter(postContent);

    const renderer = new marked.Renderer();

    renderer.code = (source, lang: string) => {
      const html = Prism.highlight(source, Prism.languages[lang], lang);
      return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`;
    };

    const html = marked(postFrontMatter.body, { renderer });

    // const readingTimeDuration = readingTime.readTime(postFrontMatter.body)
    //   .humanizedDuration;
    // const beautifiedReadingTime = readingTimeDuration.replace('utes', ' read');

    return {
      ...postFrontMatter.attributes,
      html: marked(html),
      // readingTime: beautifiedReadingTime,
    };
  });

const modifiedPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
  );

export default modifiedPosts;
