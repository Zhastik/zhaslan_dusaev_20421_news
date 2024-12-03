import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function Home() {
  const news = await prisma.m_news.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  await prisma.$disconnect();

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="space-y-6">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="flex bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="w-32 h-32 bg-gray-200 flex-shrink-0 rounded-md overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 mt-2 text-lg">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
