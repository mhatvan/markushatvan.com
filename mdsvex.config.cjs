module.exports = {
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool',
  },
  rehypePlugins: [
    require('rehype-slug'),
    [
      require('rehype-autolink-headings'),
      {
        behavior: 'wrap',
      },
    ],
  ],
};
