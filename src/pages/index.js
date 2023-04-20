import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
<div className="text-center py-5">
<h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Hello World</h1>
<p className="mt-6 text-lg leading-8 text-gray-400">Isn`t this grande</p>
</div>
)
}
