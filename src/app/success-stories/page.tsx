import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read inspiring stories from RightRoads alumni who transformed their careers.",
};

const stories = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer at Google",
    course: "Full Stack Web Development",
    story: "Coming from a non-technical background, I never imagined I could land a job at Google. The Full Stack Development course at RightRoads gave me hands-on experience with real projects. The placement team guided me through every step of the interview process.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Data Analyst at Amazon",
    course: "Data Analytics & Visualization",
    story: "RightRoads transformed my career. The data analytics program was incredibly practical, and the mentors were always available. Within 3 months of completing the course, I received multiple offers and chose Amazon.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Marketing Manager at Flipkart",
    course: "Digital Marketing Mastery",
    story: "The Digital Marketing course was a game-changer. I learned SEO, social media strategy, and analytics from industry experts. The career counseling helped me identify the right path, and now I lead a marketing team.",
    rating: 5,
  },
  {
    name: "Divya Krishnan",
    role: "Cloud Architect at Microsoft",
    course: "Cloud Computing & DevOps",
    story: "The cloud computing program at RightRoads was comprehensive and up-to-date. The hands-on labs and real-world projects prepared me for industry challenges. I got placed at Microsoft with a 150% salary hike.",
    rating: 5,
  },
  {
    name: "Rohit Agarwal",
    role: "Business Consultant at Deloitte",
    course: "Business Leadership Program",
    story: "The Business Leadership Program sharpened my strategic thinking and communication skills. The mock interviews and case study sessions were invaluable. RightRoads helped me transition from a mid-level role to consulting at Deloitte.",
    rating: 4,
  },
  {
    name: "Ananya Desai",
    role: "UX Designer at Freshworks",
    course: "Communication & Soft Skills",
    story: "While I had design skills, I lacked confidence in presentations and interviews. The soft skills program at RightRoads helped me communicate effectively. Combined with their placement support, I landed my dream role.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Success Stories</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Real stories from real people whose lives were transformed through RightRoads
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <div key={s.name} className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <StarRating count={s.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 italic">
                  &ldquo;{s.story}&rdquo;
                </blockquote>
                <div className="mt-6 border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-sm font-bold text-white">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                      <p className="text-xs text-primary">{s.role}</p>
                    </div>
                  </div>
                  <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">
                    {s.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
