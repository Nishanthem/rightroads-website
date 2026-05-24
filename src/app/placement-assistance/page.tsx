import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement Assistance",
  description: "Our dedicated placement cell connects you with top employers across industries.",
};

const steps = [
  { step: "01", title: "Profile Building", description: "We help you craft a compelling resume and professional online presence." },
  { step: "02", title: "Skill Assessment", description: "Identify strengths and areas for improvement through structured evaluations." },
  { step: "03", title: "Interview Prep", description: "Mock interviews, group discussions, and aptitude training with industry experts." },
  { step: "04", title: "Company Matching", description: "We match your profile with suitable openings from our 200+ partner companies." },
  { step: "05", title: "Placement Drive", description: "Participate in exclusive placement drives organized on campus and online." },
  { step: "06", title: "Post-Placement Support", description: "Continued mentorship and support even after you land your dream job." },
];

const partners = [
  "TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra",
  "Accenture", "Capgemini", "Cognizant", "Deloitte", "Amazon",
  "Microsoft", "Google", "Flipkart", "Zoho", "Freshworks",
];

const jobs = [
  { title: "Software Developer", company: "TCS", location: "Hyderabad", type: "Full-time" },
  { title: "Data Analyst", company: "Infosys", location: "Bangalore", type: "Full-time" },
  { title: "Digital Marketing Executive", company: "Zoho", location: "Chennai", type: "Full-time" },
  { title: "Business Analyst", company: "Deloitte", location: "Mumbai", type: "Full-time" },
  { title: "Cloud Engineer", company: "Amazon", location: "Hyderabad", type: "Full-time" },
  { title: "UI/UX Designer", company: "Freshworks", location: "Chennai", type: "Full-time" },
];

export default function PlacementAssistancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Placement Assistance</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Your dream job is just a step away. Our dedicated placement cell works
            tirelessly to connect you with the right opportunities.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Our structured placement process ensures you are fully prepared
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="text-3xl font-extrabold text-blue-100">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Our Hiring Partners</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <span key={p} className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Job Openings */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Latest Job Openings</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div key={job.title + job.company} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
                <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.location}
                  </span>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/student-registration"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-primary-dark"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
