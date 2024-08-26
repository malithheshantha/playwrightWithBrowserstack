import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
    specPattern: 'cypress/integration/*.spec.ts',
    chromeWebSecurity:false,
    video:true,
    videoCompression: true,

  }
  
})