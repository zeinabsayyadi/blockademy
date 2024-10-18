"use client";
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import LoginGuard from '@/components/LoginGuard';
import styles from './page.module.css';

const MyCourses: React.FC = () => {
    // Example enrolled courses data
    const enrolledCourses = [
        {
            id: 'course-1',
            title: 'Introduction to Web3',
            instructor: 'Jane Doe',
            thumbnail: '/path/to/course1-thumbnail.jpg'
        },
        {
            id: 'course-2',
            title: 'Smart Contracts 101',
            instructor: 'John Doe',
            thumbnail: '/path/to/course2-thumbnail.jpg'
        },
        {
            id: 'course-3',
            title: 'Blockchain Development',
            instructor: 'Alice Smith',
            thumbnail: '/path/to/course3-thumbnail.jpg'
        },
    ];

    return (
        <div className="flex flex-col h-screen justify-center mx-auto ">
            <main className="mx-auto space-y-5">
                <LoginGuard>
                    <div className={styles.container}>
                        <section className={styles.courses}>
                            <h2>My Enrolled Courses</h2>
                            <div className={styles.courseGrid}>
                                {enrolledCourses.map(course => (
                                    <div key={course.id} className={styles.courseCard}>
                                        <CourseCard course={course} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </LoginGuard>
            </main>
        </div>
    );
};

export default MyCourses;