import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from './components/appHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                <main className='max-w-5xl'>
                    {children}
                </main>
            </body>
        </html>
    )
}
