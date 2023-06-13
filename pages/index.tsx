import { Inter } from 'next/font/google'
import { Head } from 'next/document'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <head>
        <title>Medium Blogs</title>
      </head>
      <Header />
    </>
  )
}
