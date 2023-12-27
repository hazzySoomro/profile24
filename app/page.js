import Image from 'next/image'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <div className='bg-gray-600 rounded-md'>
    <Intro/>
    <SectionDivider className="bg-white"/>
    <h2>hell</h2>
    </div>
    
    </main>
  )
}
