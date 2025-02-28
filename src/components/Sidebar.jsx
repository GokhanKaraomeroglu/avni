// components/Sidebar.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/hakkimda' },
  { name: 'Blog', path: '/blog' },
  { name: 'Hobilerim', path: '/hobilerim' },
  { name: 'AvniBot', path: '/avnibot' },
  { name: 'İletişim', path: '/iletisim' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block w-64 bg-gray-100 p-4">
      <div className="text-lg font-semibold mb-4">Menü</div>
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              href={item.path}
              className={`block p-2 rounded ${
                pathname === item.path
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}