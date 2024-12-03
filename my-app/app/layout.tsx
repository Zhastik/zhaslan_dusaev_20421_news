import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Новости',
  description: 'Новостной сайт',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-[#f0f4f8]">
        <div className="bg-[#2c3e50] text-white text-center py-8">
          <Link href="/" className="text-4xl font-bold hover:text-gray-300 transition">
            Новости
          </Link>
        </div>
        
        {children}
      </body>
    </html>
  );
}
