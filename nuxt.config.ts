// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui-pro', 'nuxt-security'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  security: {
    strict: true,

    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'none'"],
        'default-src': ["'none'"],
        'connect-src': ["'self'"],
        'font-src': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'frame-src': ["'self'"],
        'img-src': ["'self'", "'https://ui-pro-starter.nuxt.dev'"],
        'manifest-src': ["'self'"],
        'media-src': ["'self'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", "'nonce-{{nonce}}'"],
        'script-src': ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        'upgrade-insecure-requests': true,
        'worker-src': ["'self'"],
      },
      crossOriginEmbedderPolicy: 'require-corp',
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block',
      referrerPolicy: 'same-origin',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
        preload: true,
      },
    },

    csrf: true,

    ssg: {
      hashStyles: true,
    },
  },
})