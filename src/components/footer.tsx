import Image from 'next/image';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='flex justify-center items-center mt-auto w-full h-12 border-t'>
      <a
        className='flex items-center'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by
        {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </a>
    </footer>
  );
};
