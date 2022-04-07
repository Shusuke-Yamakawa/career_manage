import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { Footer } from 'src/components/footer';
import { Header } from 'src/components/header';

type Props = {
  children: ReactNode;
  title: string;
};
const Layout: FC<Props> = (props) => {
  return (
    <div className='flex flex-col min-h-screen font-mono'>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
