import Link from 'next/link';
import type { FC } from 'react';

const items = [
  { href: '/', label: 'Profile' },
  { href: '/carrer', label: 'Carrer' },
];

export const Header: FC = () => {
  return (
    <header>
      <nav className='w-screen bg-gray-800'>
        <div className='flex items-center pl-8 h-14'>
          <div className='space-x-4'>
            {items.map(({ href, label }) => {
              return (
                <Link className='py-2 px-3 text-gray-300 hover:bg-gray-700 rounded' key={href} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
