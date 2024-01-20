import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Tech-Squad, Innovative Network Pvt Ltd',
    location: 'Karachi, Pakistan',
    description:
      'Efficiently resolved a wide range of computer hardware and software issues, including printing, installation, word processing, email, and operating systems problems, ensuring smooth and uninterrupted workflow for end-users.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jan 2017 - Dec 2017',
  },
  {
    title: 'Front-end Developer | Turnsole IT Service',
    location: 'Karachi, Pakistan',
    description:
      'Successfully converted websites from PSD to WordPress, utilizing industry best practices to create visually appealing anduser-friendly websites.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2018 - Oct 2021',
  },
  {
    title: 'Front-end Developer | Sigma IT',
    location: 'Riyadh, Saudi Arabia',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Feb 2022 - Oct 2022',
  },
  {
    title: 'React.js/Next.js Developer | Voxtron PVT LTD',
    location: 'Riyadh, Saudi Arabia',
    description:
      'Enchanced my skills in React, Next.js, Tailwind, Prisma and MongoDB, while working on WordPress and Shopify projects.',
    icon: React.createElement(FaReact),
    date: 'Feb 2023 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'REST API',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'GraphQL',
  'Shopify',
  'WordPress',
  'Wix',
  'Framer Motion',
] as const;
