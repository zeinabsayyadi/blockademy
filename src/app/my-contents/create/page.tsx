"use client";
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from './create.module.css';

const CreateCourse: React.FC = () => {
    const [title, setTitle] = useState('');
    const [instructor, setInstructor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter(); // Initialize the useRouter hook

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        const newCourse = { id: Date.now().toString(), title, instructor, thumbnail, description };
        console.log(newCourse);

        // Simulate course creation (you would replace this with an API call)
        // Redirect to the "my-content" page after submission
        router.push('/my-content'); // Programmatic navigation after submission
    };

    return (
        <div className={styles.container}>
            <h1>Create a New Course</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Course Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="instructor">Instructor</label>
                    <input
                        type="text"
                        id="instructor"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="thumbnail">Thumbnail URL</label>
                    <input
                        type="text"
                        id="thumbnail"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Create Course</button>
            </form>
        </div>
    );
};

export default CreateCourse;
