"use client";
import CourseCard from "@/components/CourseCard";
import LoginGuard from "@/components/LoginGuard";
import styles from './page.module.css';

const Home: React.FC = () => {
  // Use React.FC to define the component type
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
  return (
    <div className="flex flex-col h-screen justify-center mx-auto ">
      <main className="mx-auto space-y-5">
        <LoginGuard>
          <div className={styles.container}>
            <main>
              <section className={styles.hero}>
                <h1>Welcome to Blockademy</h1>
                <p>Your gateway to Web3 and blockchain development</p>
                <a className={styles.ctaButton} href="/courses">Browse Courses</a>
              </section>

              <section className={styles.courses}>
                <h2>Popular Courses</h2>
                <div className={styles.courseGrid}>
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>
            </main>

          </div>
        </LoginGuard>
      </main>
    </div>
  );
};

export default Home;
