"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const courseOptions = [
  "Business Leadership Program",
  "Full Stack Web Development",
  "Data Analytics & Visualization",
  "Digital Marketing Mastery",
  "Cloud Computing & DevOps",
  "Communication & Soft Skills",
];

export default function StudentRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Student Registration</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Take the first step toward your dream career. Register today!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Registration Successful!</h3>
                <p className="mt-2 text-gray-600">Welcome to RightRoads! Our admissions team will contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input id="fullName" name="fullName" type="text" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input id="phone" name="phone" type="tel" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input id="dob" name="dob" type="date" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea id="address" name="address" rows={2} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                </div>

                <hr className="my-6" />
                <h2 className="text-xl font-bold text-gray-900">Educational Details</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                    <select id="qualification" name="qualification" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                      <option value="">Select</option>
                      <option>10th / SSC</option>
                      <option>12th / Intermediate</option>
                      <option>Diploma</option>
                      <option>Bachelor&apos;s Degree</option>
                      <option>Master&apos;s Degree</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-gray-700">College / University</label>
                    <input id="college" name="college" type="text" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">Preferred Course</label>
                  <select id="course" name="course" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                    <option value="">Select a course</option>
                    {courseOptions.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Work Experience (if any)</label>
                  <textarea id="experience" name="experience" rows={2} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" placeholder="Brief description of your work experience" />
                </div>

                <div className="flex items-start gap-2">
                  <input id="terms" name="terms" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and consent to being contacted by RightRoads.
                  </label>
                </div>

                <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-primary-dark">
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
