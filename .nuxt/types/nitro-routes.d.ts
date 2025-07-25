// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/cleanup-unused-assets': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cleanup-unused-assets.post').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.17.7_@vue+compiler-sfc@3.5.17_typescript@5.8.3_vite@7.0.5/node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.2_vue@3.5.17/node_modules/nuxt-site-config/dist/runtime/server/routes/__site-config__/debug').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.4.0_vue@3.5.17/node_modules/@nuxtjs/robots/dist/runtime/server/routes/robots-txt').default>>>>
    }
    '/__robots__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.4.0_vue@3.5.17/node_modules/@nuxtjs/robots/dist/runtime/server/routes/__robots__/debug').default>>>>
    }
    '/__robots__/debug-path.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+robots@5.4.0_vue@3.5.17/node_modules/@nuxtjs/robots/dist/runtime/server/routes/__robots__/debug-path').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.4.3_h3@1.15.3_vite@7.0.5_vue@3.5.17/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.4.3_h3@1.15.3_vite@7.0.5_vue@3.5.17/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.4.3_h3@1.15.3_vite@7.0.5_vue@3.5.17/node_modules/@nuxtjs/sitemap/dist/runtime/server/routes/sitemap.xml').default>>>>
    }
    '/__nuxt_island/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/#internal/nuxt/island-renderer').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.10.0/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}