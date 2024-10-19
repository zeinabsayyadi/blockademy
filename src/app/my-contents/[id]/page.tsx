"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import CourseContentList from '@/components/CourseContentList';
import styles from './page.module.css';
import { JsonRpcProvider } from 'ethers';

// Replace with your smart contract's address and ABI
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

// Hardcoded course data as fallback
const hardcodedCourse = {
    id: 'course-1',
    title: 'Introduction to Web3',
    instructor: 'Jane Doe',
    thumbnail: '/assets/course.png',
    description: 'Learn the basics of Web3 and its applications.',
    content: [
        { id: '0x77b3eb38990fdb8e670143ee9487255b433a0e02', title: 'What is Web3?', thumbnail: '/assets/smart.jpg', videoUrl: 'https://video1.com', description: 'Introduction to Web3 concepts.' },
        { id: '0xc3cffe1623e8c9c534015d06fe8e05b32f36d4ba', title: 'Web3 vs. Traditional Internet', thumbnail: '/assets/web3.jpg', videoUrl: 'https://video2.com', description: 'Understanding the differences.' },
    ],
};

const MyCoursePage = ({ params }: { params: { id: string } }) => {
    const [thumbnail, setThumbnail] = useState(hardcodedCourse.thumbnail);
    const [description, setDescription] = useState(hardcodedCourse.description);
    const [content, setContent] = useState(hardcodedCourse.content);
    const [loading, setLoading] = useState(true);
    const [hasAccess] = useState(true); // Assuming the user has access

    // Fetch course and contents from the blockchain
    const fetchCourseData = async (courseAddress: string) => {
        try {
            setLoading(true);

            // Connect to the blockchain

            const provider = new JsonRpcProvider("https://arb-sepolia.g.alchemy.com/v2/JFPV6F9K30KIzQBcPP4snu0JMOmU6zR5");
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

            // Call getCourse to get course details (thumbnail, description)
            const courseData = await contract.getCourse(courseAddress);
            setThumbnail(courseData.courseThumbnail);
            setDescription(courseData.courseDescription);

            // Call getAllContents to get the course contents (videos)
            const contents = await contract.getAllContents(courseAddress);
            const contentList = contents[0].map((contentAddress: string, index: number) => ({
                id: contentAddress,
                title: contents[2][index], // Title from descriptions
                thumbnail: contents[1][index], // Thumbnail URL
                description: contents[2][index], // Description
                videoUrl: '', // Add actual video URL here if available
            }));

            setContent(contentList);
        } catch (error) {
            console.error('Error fetching course data:', error);
            // If the smart contract data fails to load, use hardcoded data
            setThumbnail(hardcodedCourse.thumbnail);
            setDescription(hardcodedCourse.description);
            setContent(hardcodedCourse.content);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourseData(params.id);
    }, [params.id]);

    // Handle course thumbnail and description update (optional)
    const handleCourseUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated Thumbnail:', thumbnail);
        console.log('Updated Description:', description);
        // You would call a mutation or contract write method here
    };

    const handleAddContent = (e: React.FormEvent) => {
        e.preventDefault();
        // Call mutation to add new content
        console.log('Adding new content');
    };

    return (
        <div className="flex flex-col h-screen justify-center mx-auto">
            {loading ? (
                <p>Loading course data...</p>
            ) : (
                <div className={styles.container}>
                    <h1>Manage Course: {params.id}</h1>

                    {/* Course Thumbnail and Description */}
                    <div className={styles.courseInfo}>
                        <h2>Course Thumbnail</h2>
                        <img src={thumbnail} alt="Course Thumbnail" className={styles.thumbnail} />
                        <form onSubmit={handleCourseUpdate} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="thumbnail">Update Thumbnail URL</label>
                                <input
                                    type="text"
                                    id="thumbnail"
                                    value={thumbnail}
                                    onChange={(e) => setThumbnail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="description">Update Description</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>Update Course</button>
                        </form>
                    </div>

                    {/* Add new content (video) */}
                    <div className={styles.addContentSection}>
                        <h2>Add New Content (Video)</h2>
                        <form onSubmit={handleAddContent} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="newContentTitle">Content Title</label>
                                <input
                                    type="text"
                                    id="newContentTitle"
                                    value=""
                                    onChange={() => { }}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="newContentThumbnail">Content Thumbnail URL</label>
                                <input
                                    type="text"
                                    id="newContentThumbnail"
                                    value=""
                                    onChange={() => { }}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="newContentDescription">Content Description</label>
                                <textarea
                                    id="newContentDescription"
                                    value=""
                                    onChange={() => { }}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>Add Content</button>
                        </form>
                    </div>

                    {/* Display current content */}
                    <section className={styles.courses}>
                        <h2>Course Content</h2>
                        <CourseContentList contentList={content} hasAccess={hasAccess} courseId={params.id} />
                    </section>
                </div>
            )}
        </div>
    );
};

export default MyCoursePage;
