"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './page.module.css';
import LoginGuard from '@/components/LoginGuard';
import CourseCard from '@/components/CourseCard';
import React from 'react';


export default function CoursePage({ params }: { params: { id: string } }) {
    // Example course data
    const courses = [
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

    const course = courses.find(course => course.id === params.id);

    return (
        <div className="flex flex-col h-screen justify-center mx-auto ">
            <main className="mx-auto space-y-5">
                <LoginGuard>
                    <div className={styles.container}>
                        <section className={styles.courses}>
                            <h2>Popular Courses</h2>
                            <div className={styles.courseGrid}>
                                {course ? (
                                    <div key={course.id} className={styles.courseCard}>
                                        <CourseCard course={course} />
                                    </div>
                                ) : (
                                    <p>Course not found</p>
                                )}
                            </div>
                        </section>
                    </div>
                </LoginGuard>
            </main>
        </div>
    );
}
