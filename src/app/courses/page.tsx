import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore our comprehensive courses in business coaching, skill development, and more.",
};

const courses = [
  {
    title: "Business Leadership Program",
    category: "Business Coaching",
    duration: "12 Weeks",
    mode: "Online + Offline",
    level: "Advanced",
    description: "Develop strategic thinking, team management, and executive leadership skills with real-world case studies.",
    highlights: ["Strategic Planning", "Team Leadership", "Financial Acumen", "Decision Making"],
  },
  {
    title: "Full Stack Web Development",
    category: "Skill Development",
    duration: "16 Weeks",
    mode: "Online",
    level: "Beginner to Intermediate",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and databases to become a job-ready full stack developer.",
    highlights: ["React & Next.js", "Node.js & Express", "MongoDB & SQL", "Deployment"],
  },
  {
    title: "Data Analytics & Visualization",
    category: "Skill Development",
    duration: "10 Weeks",
    mode: "Online",
    level: "Intermediate",
    description: "Learn Python, SQL, Tableau, and Power BI to extract insights and drive data-driven decisions.",
    highlights: ["Python for Data", "SQL Mastery", "Tableau & Power BI", "Statistical Analysis"],
  },
  {
    title: "Digital Marketing Mastery",
    category: "Business Coaching",
    duration: "8 Weeks",
    mode: "Online",
    level: "Beginner",
    description: "Comprehensive digital marketing covering SEO, SEM, social media, content marketing, and analytics.",
    highlights: ["SEO & SEM", "Social Media Strategy", "Content Marketing", "Google Analytics"],
  },
  {
    title: "Cloud Computing & DevOps",
    category: "Skill Development",
    duration: "14 Weeks",
    mode: "Online",
    level: "Intermediate to Advanced",
    description: "Gain expertise in AWS, Azure, Docker, Kubernetes, and CI/CD pipelines for modern cloud infrastructure.",
    highlights: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    title: "Communication & Soft Skills",
    category: "Skill Development",
    duration: "6 Weeks",
    mode: "Online + Offline",
    level: "All Levels",
    description: "Enhance interpersonal skills, public speaking, negotiation, and professional communication.",
    highlights: ["Public Speaking", "Email Writing", "Negotiation", "Interview Preparation"],
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Courses</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Industry-aligned programs designed to make you job-ready
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.title} className="flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="rounded-t-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                    {course.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white">{course.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {course.mode}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      {course.level}
                    </span>
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{course.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {course.highlights.map((h) => (
                      <span key={h} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/student-registration"
                    className="mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
