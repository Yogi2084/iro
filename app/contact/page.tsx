"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="space-y-6 max-w-xl text-white bg-neutral-900 min-h-screen p-6 md:p-12  rounded-2xl">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-gray-300">
        Let's work together. Fill out the form below to get in touch.
      </p>

      {submitted ? (
        <div className="text-green-500 font-semibold">
          Thanks! I’ll get back to you soon.
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-md"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-accent hover:bg-accent/90  bg-amber-50   text-black font-semibold rounded-md"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
