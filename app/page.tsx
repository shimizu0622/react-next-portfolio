import Image from 'next/image';
import Link from 'next/link';
import { client, type Profile, type Work } from './libs/client';

async function getProfile() {
  const data = await client.get<Profile>({ endpoint: 'profile' });
  return data;
}

async function getWorks() {
  const data = await client.getList<Work>({ endpoint: 'works' });
  return data.contents;
}

export default async function Home() {
  const profile = await getProfile();
  const works = await getWorks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {profile.name}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {profile.position}
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src={profile.image.url}
            alt={profile.name}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {profile.introduction}
        </p>
      </div>

      {/* Featured Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.slice(0, 3).map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={work.image.url}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <Link
                  href={`/works/${work.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/works"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View All Works
          </Link>
        </div>
      </div>
    </div>
  );
}