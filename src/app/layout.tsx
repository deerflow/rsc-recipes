import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recipes Database',
    description: 'A recipe search app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
