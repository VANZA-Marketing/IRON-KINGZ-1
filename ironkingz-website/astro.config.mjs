// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(owner): set the final production domain before launch.
const SITE = 'https://www.ironkingz.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  // Redirect plan for old Squarespace URLs → new structure.
  // TODO(owner): confirm the exact legacy paths in Search Console / analytics
  // and extend this map before switching DNS.
  redirects: {
    '/about': '/our-story',
    '/about-us': '/our-story',
    '/classes': '/programs',
    '/class-schedule': '/schedule',
    '/pricing': '/memberships',
    '/membership': '/memberships',
    '/contact-us': '/contact',
    '/book-now': '/book',
    '/booking': '/book',
    '/boxing': '/programs/boxing',
    '/muay-thai': '/programs/muay-thai',
    '/bjj': '/programs/bjj-keiki-mma',
    '/jiu-jitsu': '/programs/bjj-keiki-mma',
    '/wing-chun': '/programs/wing-chun',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow the local authentic photos to be optimized via astro:assets.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
