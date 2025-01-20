import Image from 'next/image';
import { client, type Profile } from '../libs/client';

async function getProfile() {
  const data = await client.get<Profile>({ endpoint: 'profile' });
  return data;
}

export default async function About() {
  const profile = await getProfile();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h1>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src={profile.image.url}
              alt={profile.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
            <p className="text-gray-600 mb-4">{profile.position}</p>
            <div className="prose max-w-none">
              {profile.introduction}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {profile.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}