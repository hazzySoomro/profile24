"use client"

import Image from 'next/image'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <div className='bg-gray-600 rounded-md'>
    <Intro/>
    <motion.div
      className="bg-gray-300 my-24 h-16 w-1 rounded-full flex ml-[400px] items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>

    </div>
    
    </main>
  )
}
