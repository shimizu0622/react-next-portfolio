import Image from 'next/image';
import Link from 'next/link';
import { client, type Work } from '../libs/client';

async function getWorks() {
  const data = await client.getList<Work>({ endpoint: 'works' });
  return data.contents;
}

export default async function Works() {
  const works = await getWorks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        My Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
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
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}