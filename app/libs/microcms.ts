// app/_libs/microcms.ts
import { createClient } from 'microcms-js-sdk';

export type Profile = {
  name: string;
  occupation: string;
  birthDate: string;
  birthPlace: string;
};

export type Past = {
  title: string;
  content: string;
};

export type Future = {
  title: string;
  content: string;
};

export type Content = {
  profile: Profile;
  past: Past;
  future: Future;
};

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error('NEXT_PUBLIC_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || 'hhpe077swe',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || 'd4LhLaPhBndW4KBhw9BrwCN8frs1VSKBqdFG',
});

export const getContent = async () => {
  try {
    const data = await client.get<Content>({
      endpoint: 'futuer',
    });
    return data;
  } catch (err) {
    console.error('Error fetching content:', err);
    throw err;
  }
};