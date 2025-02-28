// components/Footer.jsx
import Link from 'next/link';

const navItems = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/hakkimda' },
  { name: 'Blog', path: '/blog' },
  { name: 'Hobilerim', path: '/hobilerim' },
  { name: 'AvniBot', path: '/avnibot' },
  { name: 'İletişim', path: '/iletisim' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Ayşe Zehra</h2>
            <p className="text-gray-300">
              Hoş geldiniz.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Sayfalar</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">İletişim</h2>
            <p className="text-gray-300">
              Email: karaomerogluzehra@gmail.com<br />
              Telefon: Tabiki yasak! 📞
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}