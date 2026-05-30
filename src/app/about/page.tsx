import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RightRoads - our mission, vision, and the team dedicated to empowering careers.",
};

const values = [
  { title: "Excellence", description: "We maintain the highest standards in training and mentorship.", icon: "star" },
  { title: "Innovation", description: "We adopt the latest methodologies and technologies in education.", icon: "bulb" },
  { title: "Integrity", description: "Transparent processes and honest guidance in every interaction.", icon: "shield" },
  { title: "Impact", description: "Measurable outcomes that transform lives and careers.", icon: "chart" },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", bio: "20+ years in corporate training and business coaching." },
  { name: "Priya Sharma", role: "Head of Placements", bio: "Former HR Director with extensive industry connections." },
  { name: "Anil Reddy", role: "Chief Academic Officer", bio: "PhD in Education with a passion for skill development." },
  { name: "Meera Patel", role: "Career Counselor", bio: "Certified career coach helping thousands find their path." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About RightRoads</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Building bridges between talent and opportunity since 2015.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                At RightRoads, we believe every individual deserves the opportunity to build a
                fulfilling career. Our mission is to provide world-class business coaching, skill
                development, and placement assistance that empowers professionals at every stage
                of their journey.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We partner with leading organizations to understand industry needs and design
                programs that produce job-ready professionals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                To become the most trusted career development platform in India, creating a
                future where every learner has access to quality education, mentorship, and
                employment opportunities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We envision a world where the right skills meet the right opportunities, and
                every career journey begins on the right road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Our Core Values</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Industry experts dedicated to your success
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-2xl font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
