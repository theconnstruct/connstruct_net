import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

// import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://connstruct.net',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Connstruct',
      openGraph: {
        home: {
          title: 'I Am Connstruct',
          description: 'The personal website of Connor Maddox.'
        },
        blog: {
          title: 'Blog',
          description: 'Thoughts, ideas, and more.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'theconnstruct/personal-site',
        repositoryId: 'R_kgDOOpBcnQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOOpBcnc4CqFWV',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: netlify()
});