import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Next.js Proje',
  description: 'Next.js ve React 19 ile oluşturulmuş proje',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}