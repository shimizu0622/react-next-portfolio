import { createClient } from 'microcms-js-sdk';

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export type Work = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  link: string;
  createdAt: string;
  updatedAt: string;
};

export type Profile = {
  name: string;
  position: string;
  introduction: string;
  skills: string[];
  image: {
    url: string;
    height: number;
    width: number;
  };
};