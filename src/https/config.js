/* src/config.js */

const config = {
    appEnv: process.env.NODE_ENV,
  
    appName: process.env.VUE_APP_TITLE,
  
    appUrl: process.env.VUE_APP_APP_URL,
    landingUrl: process.env.VUE_APP_LANDING_URL,
  
    apiKey: process.env.VUE_APP_API_KEY,
  
    apiUrl: process.env.VUE_APP_API_URL,
    domain: process.env.VUE_APP_DOMAIN,
  
    websocket: process.env.VUE_APP_WEBSOCKETS_SERVER,
    pusherKey: process.env.VUE_APP_PUSHER_APP_KEY,
  
    companyName: process.env.VUE_APP_COMPANY_NAME,
    supportEmail: process.env.VUE_APP_SUPPORT_EMAIL,
    supportPhone: process.env.VUE_APP_SUPPORT_PHONE,
  
    accessTokenStorageKey: "croxxapp_session",
    accessTokenExpiresInStorageKey: "croxxapp_session_expires_in",
    accessTokenExpiresAtStorageKey: "croxxapp_session_expires_at",
    accessTokenExpiryTimeLeftForFrontendAutoRefresh: 18000, // in seconds, 18000secs = 5 hours
    referralCodeStorageKey: "croxxapp_referral_code",
  
    getSubdomain: () => {
      let host = window.location.host;
      let parts = host.split(".");
      let subdomain = parts[0];
      return subdomain;
    },
  };
  // "eslint-plugin-prettier": "^3.1.3",
  export default config;
  