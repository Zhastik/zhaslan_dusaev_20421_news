import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function NewsPage({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id);

  if (isNaN(articleId)) {
    return <div>Некорректный идентификатор новости</div>;
  }

  const article = await prisma.m_news.findUnique({
    where: { id: articleId },
  });

  if (!article) {
    return <div>Новость не найдена</div>;
  }

  await prisma.$disconnect();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
      <p className="text-gray-700 text-lg">{article.description}</p>
    </div>
  );
}
