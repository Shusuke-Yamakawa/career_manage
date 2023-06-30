import './globals.css';

import { Footer } from 'src/app/_components/footer';
import { Header } from 'src/app/_components/header';

export const metadata = {
  title: 'profile',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col min-h-screen font-mono'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
