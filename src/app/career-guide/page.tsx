import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guide",
  description: "Expert career guidance, tips, and resources to help you navigate your professional journey.",
};

const guides = [
  {
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume Building",
    readTime: "5 min read",
    summary: "Learn the secrets to crafting a resume that passes Applicant Tracking Systems and gets noticed by recruiters. Includes templates and examples.",
  },
  {
    title: "Top 10 Interview Questions & How to Answer Them",
    category: "Interview Prep",
    readTime: "8 min read",
    summary: "Master the most commonly asked interview questions with structured answer frameworks and real-world examples from successful candidates.",
  },
  {
    title: "Career Paths in Technology: 2025 Guide",
    category: "Career Planning",
    readTime: "10 min read",
    summary: "Explore the hottest career paths in tech, including AI/ML, cloud computing, cybersecurity, and data science. Understand salary trends and required skills.",
  },
  {
    title: "Building Your Personal Brand on LinkedIn",
    category: "Networking",
    readTime: "6 min read",
    summary: "A step-by-step guide to optimizing your LinkedIn profile, building meaningful connections, and positioning yourself as a thought leader in your field.",
  },
  {
    title: "Negotiating Your First Salary: Do's and Don'ts",
    category: "Career Growth",
    readTime: "4 min read",
    summary: "Don't leave money on the table. Learn proven negotiation strategies that will help you secure the compensation you deserve.",
  },
  {
    title: "Transitioning from College to Corporate Life",
    category: "Fresh Graduates",
    readTime: "7 min read",
    summary: "Essential tips for fresh graduates on adapting to corporate culture, managing expectations, and accelerating your career growth from day one.",
  },
];

const tips = [
  { title: "Stay Curious", description: "Continuously learn new skills and stay updated with industry trends." },
  { title: "Network Actively", description: "Build relationships with professionals in your field through events and online platforms." },
  { title: "Set Clear Goals", description: "Define short-term and long-term career goals and create actionable plans." },
  { title: "Seek Mentorship", description: "Find experienced mentors who can guide your career decisions." },
  { title: "Build a Portfolio", description: "Showcase your work through projects, case studies, and open-source contributions." },
  { title: "Practice Communication", description: "Strong communication skills set you apart in any industry." },
];

export default function CareerGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Career Guide</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Expert resources, tips, and guides to help you make informed career decisions
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <p className="mt-2 text-lg text-gray-600">Curated content to accelerate your career</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.title} className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{guide.summary}</p>
                <button className="mt-4 self-start text-sm font-medium text-primary hover:underline">
                  Read More &rarr;
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Quick Career Tips</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, i) => (
              <div key={tip.title} className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Need Personalized Career Advice?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Book a one-on-one session with our certified career counselors
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-primary-dark"
            >
              Book a Session
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-blue-50"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
