
import Image from 'next/image'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import { motion } from "framer-motion";
import Skills from '@/components/skills';


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <div className='bg-gray-600 rounded-md'>
    <Intro/>
    {/* <Skills/> */}
    </div>
    
    </main>
  )
}
