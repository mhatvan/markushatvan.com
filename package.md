# Dependency upgrade issues

`"svelte": "^3.38.3"`

- stay locked to `v3.38.2` until [FOUC issue](https://github.com/sveltejs/kit/issues/915) and [HTML hydration](https://github.com/sveltejs/svelte/issues/6463) is resolved

`"@sveltejs/kit": "1.0.0-next.120"`

- stay locked to `v1.0.0-next.115` since newer versions result in Netlify page not found issues with blog pages
