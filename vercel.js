{
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/vercel-builder",
      "config": {
        "serverFiles": [".nuxt/content/**", "content/**"]
      }
    }
  ]
}