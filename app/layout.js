import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header1'
import Footer from '@/components/footer'
import ActiveSectionContextProvider from '../context/active-section-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hassaan Ali Soomro',
  description: 'Web developer',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body  className="bg-black text-gray-200 ">
        <ActiveSectionContextProvider>
        <div className='flex items-center justify-center bg-slate-200'>
        <Header />
        </div>
        {children}
        <Footer/>
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
