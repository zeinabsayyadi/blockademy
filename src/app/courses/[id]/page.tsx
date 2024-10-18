import CourseContentList from '@/components/CourseContentList';

import styles from './page.module.css';
const CoursePage = ({ params }: { params: { id: string } }) => {
    // Sample course data with content
    const course = {
        id: 'course-1',
        title: 'Introduction to Web3',
        instructor: 'Jane Doe',
        thumbnail: '/path/to/course1-thumbnail.jpg',
        description: 'Learn the basics of Web3 and its applications.',
        content: [
            { id: '0x77b3eb38990fdb8e670143ee9487255b433a0e02', title: 'What is Web3?', thumbnail: '/assets/smart.jpg', videoUrl: 'https://video1.com', description: 'Introduction to Web3 concepts.' },
            { id: '0xc3cffe1623e8c9c534015d06fe8e05b32f36d4ba', title: 'Web3 vs. Traditional Internet', thumbnail: '/assets/web3.jpg', videoUrl: 'https://video2.com', description: 'Understanding the differences.' },
        ],
    };

    const hasAccess = true; // Mock access, set to true/false based on user's access rights

    return (
        <div className="flex flex-col h-screen justify-center mx-auto ">
            <div className={styles.container}>
                <section className={styles.courses}>
                    <h2>Popular Courses</h2>
                    <div className={styles.courseGrid}>
                        <CourseContentList contentList={course.content} hasAccess={hasAccess} courseId={course.id} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoursePage;
