export default function NewsItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2 text-base">{description}</p>
    </div>
  );
}
