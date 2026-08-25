import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Meraki — Web3 & AI Growth', template: '%s | Meraki' },
  description: 'Strategy, narrative and distribution for Web3, AI and emerging technology companies.'
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>
}
