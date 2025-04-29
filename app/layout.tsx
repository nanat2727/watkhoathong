// src/app/layout.jsx

import './globals.css';
import Navbar from '@/components/Navbar';
import { Niramit, Sarabun } from 'next/font/google';

export const metadata = {
  title: 'MIS | โรงเรียนวัดเขาทอง',
  description: 'โรงเรียนวัดเขาทอง(ชนปากคลอง) สำนักงานเขตพื้นที่การศึกษาประถมศึกษาพัทลุง เขต 1',
};

const niramit = Niramit({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '700'],
});

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.5/keen-slider.min.css"
        />
      </head>
      <body
        className={`${sarabun.className} min-h-screen bg-repeat bg-[length:30px_30px]`}
        style={{ backgroundImage: "url('/school-bg1.png')" }}
      >        <link rel="icon" href="/favicon.ico" />

        <Navbar fontClass={niramit.className} />
        <main className="p-6">{children}</main>
        <footer className={`${niramit.className} bg-blue-800 text-white text-center py-4`}>
          <p className="text-sm">
            © {new Date().getFullYear()} 💙💛 ระบบสารสนเทศเพื่อการบริหารสถานศึกษา | พัฒนาโดย Nat Nonthasen 💙💛
          </p>
        </footer>
      </body>
    </html>
  );
}
