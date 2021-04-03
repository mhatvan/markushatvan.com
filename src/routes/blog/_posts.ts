import fs from 'fs';
import frontMatter from 'front-matter';
import marked from 'marked';
import Prism from 'prismjs';
import 'prism-svelte';
import loadLanguages from 'prismjs/components/index.js';
import readingTime from 'reading-time';

loadLanguages(['shell', 'markdown', 'json']);

const posts = fs
  .readdirSync('./src/posts')
  .filter((elem) => elem.endsWith('.svx'))
  .map((postFilename) => {
    const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
      encoding: 'utf8',
    });

    const postFrontMatter = frontMatter(postContent);

    const renderer = new marked.Renderer();

    renderer.code = (source, lang: string) => {
      const html = Prism.highlight(source, Prism.languages[lang], lang);
      return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`;
    };

    const html = marked(postFrontMatter.body, { renderer });

    const readingTimeDuration = readingTime(postFrontMatter.body).text;

    return {
      ...postFrontMatter.attributes,
      html: marked(html),
      readingTime: readingTimeDuration,
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
