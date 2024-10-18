import React from 'react';
import styles from './content.module.css'; // Import the CSS for styling

// Dummy data for the content
const contentData = {
    'content-1': {
        title: 'Introduction to Web3',
        description: 'Learn the basics of Web3 and why it matters.',
        videoUrl: '/assets/lesson1.mp4',
    },
    'content-2': {
        title: 'Building Smart Contracts',
        description: 'Learn how to create your first smart contract.',
        videoUrl: '/assets/lesson1.mp4',
    },
    'content-3': {
        title: 'Blockchain Deep Dive',
        description: 'Understand the core architecture of blockchain technology.',
        videoUrl: '/assets/lesson1.mp4',
    },
};

// The dynamic content page component
const ContentPage = ({ params }: { params: { contentId: string } }) => {
    const content = contentData[params.contentId as keyof typeof contentData];

    if (!content) {
        return <p>Content not found</p>;
    }

    return (
        <div className={styles.contentContainer}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <div className={styles.videoWrapper}>
                {/* Embed the video */}
                <iframe
                    className={styles.videoPlayer}
                    src={content.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={content.title}
                />
            </div>
        </div>
    );
};

export default ContentPage;