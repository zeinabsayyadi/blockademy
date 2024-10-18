"use client";
import CourseCard from "@/components/CourseCard";
import LoginGuard from "@/components/LoginGuard";
import styles from './page.module.css';
import Courses from "./courses/page";

const Home: React.FC = () => {
  // Use React.FC to define the component type
  const courses = [
    {
      id: 'course-1',
      title: 'Introduction to Web3',
      instructor: 'Jane Doe',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-2',
      title: 'Smart Contracts 101',
      instructor: 'John Doe',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-4',
      title: 'Ethereum Basics',
      instructor: 'Bob Brown',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-5',
      title: 'Decentralized Finance (DeFi)',
      instructor: 'Carol White',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-6',
      title: 'NFTs and Digital Art',
      instructor: 'Dave Green',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-7',
      title: 'Crypto Trading Strategies',
      instructor: 'Eve Black',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-8',
      title: 'Advanced Solidity',
      instructor: 'Frank Blue',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-9',
      title: 'Blockchain Security',
      instructor: 'Grace Yellow',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-10',
      title: 'Decentralized Applications (DApps)',
      instructor: 'Hank Purple',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-11',
      title: 'Crypto Wallets',
      instructor: 'Ivy Orange',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-12',
      title: 'Introduction to Cryptography',
      instructor: 'Jack Pink',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-13',
      title: 'Blockchain for Business',
      instructor: 'Karen Red',
      thumbnail: '/assets/course.png'
    },
    {
      id: 'course-3',
      title: 'Blockchain Development',
      instructor: 'Alice Smith',
      thumbnail: '/assets/course.png'
    },
  ];
  return (
    <div className="flex flex-col h-screen justify-center mx-auto ">
      <main className="mx-auto space-y-5">

        <LoginGuard>
          <Courses courses={courses} />
        </LoginGuard>
      </main>
    </div>
  );
};

export default Home;
