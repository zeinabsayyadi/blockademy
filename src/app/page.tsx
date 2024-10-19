"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { JsonRpcProvider } from 'ethers';
import CourseCard from "@/components/CourseCard";
import LoginGuard from "@/components/LoginGuard";
import styles from './page.module.css';
import Courses from "./courses/page";

// Smart contract details
const CONTRACT_ADDRESS = "0x03AccD75D3e6665703E70C0c01A35556e1b39EB6";
const CONTRACT_ABI = [
  // The ABI you provided
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "courseAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "contentAddress", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "contentThumbnail", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "contentDescription", "type": "string" }
    ],
    "name": "ContentAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "courseAddress", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "courseThumbnail", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "description", "type": "string" }
    ],
    "name": "CourseAdded",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "courseAddress", "type": "address" },
      { "internalType": "string", "name": "courseThumbnail", "type": "string" },
      { "internalType": "string", "name": "courseDescription", "type": "string" },
      { "internalType": "address[]", "name": "contentAddresses", "type": "address[]" },
      { "internalType": "string[]", "name": "contentThumbnails", "type": "string[]" },
      { "internalType": "string[]", "name": "contentDescriptions", "type": "string[]" }
    ],
    "name": "addCourseWithContents",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "courseAddress", "type": "address" }],
    "name": "getAllContents",
    "outputs": [
      { "internalType": "address[]", "name": "contentAddresses", "type": "address[]" },
      { "internalType": "string[]", "name": "thumbnails", "type": "string[]" },
      { "internalType": "string[]", "name": "descriptions", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCourses",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "courseAddress", "type": "address" },
      { "internalType": "uint256", "name": "contentIndex", "type": "uint256" }
    ],
    "name": "getContent",
    "outputs": [
      { "internalType": "address", "name": "contentAddress", "type": "address" },
      { "internalType": "string", "name": "contentThumbnail", "type": "string" },
      { "internalType": "string", "name": "contentDescription", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "courseAddress", "type": "address" }],
    "name": "getCourse",
    "outputs": [
      { "internalType": "string", "name": "courseThumbnail", "type": "string" },
      { "internalType": "string", "name": "courseDescription", "type": "string" },
      { "internalType": "uint256", "name": "contentCount", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const Home: React.FC = () => {
  const [courses, setCourses] = useState<any[]>(
    [
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Introduction to Web3',
        instructor: 'Jane Doe',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Smart Contracts 101',
        instructor: 'John Doe',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Ethereum Basics',
        instructor: 'Bob Brown',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Decentralized Finance (DeFi)',
        instructor: 'Carol White',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'NFTs and Digital Art',
        instructor: 'Dave Green',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Crypto Trading Strategies',
        instructor: 'Eve Black',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Advanced Solidity',
        instructor: 'Frank Blue',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Blockchain Security',
        instructor: 'Grace Yellow',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c1220',
        title: 'Decentralized Applications (DApps)',
        instructor: 'Hank Purple',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c1221',
        title: 'Crypto Wallets',
        instructor: 'Ivy Orange',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c1222',
        title: 'Introduction to Cryptography',
        instructor: 'Jack Pink',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c1223',
        title: 'Blockchain for Business',
        instructor: 'Karen Red',
        thumbnail: '/assets/course.png'
      },
      {
        id: '0xa565796cb130fc298442bc4c92ee179ffac7c122',
        title: 'Blockchain Development',
        instructor: 'Alice Smith',
        thumbnail: '/assets/course.png'
      },
    ]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const provider = new JsonRpcProvider("https://arb-sepolia.g.alchemy.com/v2/JFPV6F9K30KIzQBcPP4snu0JMOmU6zR5");
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
        // Fetch all course addresses
        console.log(contract)
        const courseAddresses = await contract.getAllCourses();
        console.log(courseAddresses)

        const fetchedCourses = [];
        for (const courseAddress of courseAddresses) {
          // Fetch the course data for each address
          const [courseThumbnail, courseDescription, contentCount] = await contract.getCourse(courseAddress);
          fetchedCourses.push({
            id: courseAddress,
            title: courseDescription,
            thumbnail: courseThumbnail, // IPFS or any storage location for the course image
            contentCount
          });
        }

        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
