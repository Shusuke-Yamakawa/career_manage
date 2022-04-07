import Link from 'next/link';
import type { FC } from 'react';

const items = [
  { href: '/', label: 'Profile' },
  { href: '/carrer', label: 'Carrer' },
];

export const Header: FC = () => {
  return (
    <header>
      <nav className='bg-gray-800 w-screen'>
        <div className='flex items-center pl-8 h-14'>
          <div className='flex space-x-4'>
            {items.map(({ href, label }) => {
              return (
                <Link key={href} href={href}>
                  <a data-testid='blog-nav' className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                    {label}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
