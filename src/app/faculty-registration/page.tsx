"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

const subjectAreas = [
  "Business & Management",
  "Web Development",
  "Data Science & Analytics",
  "Digital Marketing",
  "Cloud Computing & DevOps",
  "Soft Skills & Communication",
  "Finance & Accounting",
  "Human Resources",
];

export default function FacultyRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => { data[k] = v.toString(); });

    const result = await submitToGoogleSheets("faculty_registration", data);
    setSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Faculty Registration</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Join our team of expert trainers and shape the next generation of professionals.
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
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Application Received!</h3>
                <p className="mt-2 text-gray-600">Thank you for your interest. Our HR team will review your application and reach out within 5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>

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
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Current Location</label>
                    <input id="location" name="location" type="text" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <hr className="my-6" />
                <h2 className="text-xl font-bold text-gray-900">Professional Details</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                    <select id="qualification" name="qualification" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                      <option value="">Select</option>
                      <option>Bachelor&apos;s Degree</option>
                      <option>Master&apos;s Degree</option>
                      <option>PhD / Doctorate</option>
                      <option>Professional Certification</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <select id="experience" name="experience" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                      <option value="">Select</option>
                      <option>1-3 years</option>
                      <option>3-5 years</option>
                      <option>5-10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject Area</label>
                  <select id="subject" name="subject" required className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                    <option value="">Select your expertise</option>
                    {subjectAreas.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="currentRole" className="block text-sm font-medium text-gray-700">Current Designation & Organization</label>
                  <input id="currentRole" name="currentRole" type="text" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" placeholder="e.g. Senior Developer at TCS" />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Brief Bio / Teaching Philosophy</label>
                  <textarea id="bio" name="bio" rows={3} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" placeholder="Tell us about your teaching experience and approach" />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                  <input id="linkedin" name="linkedin" type="url" className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" placeholder="https://linkedin.com/in/your-profile" />
                </div>

                <div className="flex items-start gap-2">
                  <input id="terms" name="terms" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and consent to being contacted by RightRoads.
                  </label>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={submitting} className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-primary-dark disabled:opacity-50">
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
