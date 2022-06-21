export const msalConfig = {
  auth: {
    clientId: '2c5749e2-ce80-440e-922c-22b684971bbf',
    authority:
      'https://login.microsoftonline.com/3db898d0-11ac-4a31-9838-8e6f9b078c63', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: 'http://localhost:3000/',
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me/',
};
