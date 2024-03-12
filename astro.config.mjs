import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind(), alpinejs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});