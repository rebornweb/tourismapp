import dotenv from 'dotenv';
dotenv.config();

export default {
    env: {
      NEXT_PUBLIC_DUFFEL_API_ENDPOINT: process.env.NEXT_PUBLIC_DUFFEL_API_ENDPOINT,
      NEXT_PUBLIC_DUFFEL_API_KEY_ENV: process.env.NEXT_PUBLIC_DUFFEL_API_KEY_ENV,
      // Add other environment variables as needed
    },

  };
