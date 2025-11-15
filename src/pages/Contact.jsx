import { motion } from "framer-motion";
import { ArrowDown, Infinity, Repeat } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <>
      <div className="m-8 md:mt-30 text-3xl font-bold md:text-center md:text-6xl">
        Hit Me Up.
      </div>
      <div className="mx-8 md:my-6 text-lg md:text-center md:text-2xl">
        Feel free to reach out for inquiries, or just to say hello!
      </div>
      <div className="mx-8 md:text-center">
        <a
          href="mailto:sinanlw95@gmail.com"
          className="text-blue-500 hover:underline"
        >
          sinanlw95@gmail.com
        </a>
      </div>
      <form
        action="https://formspree.io/f/mldoovqa"
        method="POST"
        className="m-8 flex flex-col gap-4 md:w-1/2 md:mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full bg-zinc-500/20 p-3 rounded-md focus:outline-zinc-500 focus:outline-2"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          className="w-full h-32 md:h-56 bg-zinc-500/20 p-3 rounded-md focus:outline-zinc-500 focus:outline-2 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 p-2 rounded-md cursor-pointer hover:opacity-90"
        >
          Send
        </button>
      </form>
      <div className="w-full text-center my-10">
        My socials
        <ArrowDown className="mx-auto mt-4 animate-bounce" />
      </div>
    </>
  );
}

export default Contact;
