import Image from 'next/image'
import Intro from '@/components/intro'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <div className='bg-gray-600 rounded-sm pb'>
    <Intro/>
    </div>
    
    </main>
  )
}
