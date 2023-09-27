import './globals.css';

import { Footer } from 'src/app/_components/footer';
import { Header } from 'src/app/_components/header';

export const metadata = {
  title: 'profile',
  openGraph: {
    title: 'my profile',
    description: 'プロフィールと職務経歴',
    type: 'article',
    siteName: 'profile',
    images: 'http://www.bizreach.jp/img/logo/top-bizreach-ogp-img.png',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex min-h-screen flex-col font-mono'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
