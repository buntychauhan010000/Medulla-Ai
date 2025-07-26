// src/components/Contact/ContactForm.jsx
import React from "react";
import PrimaryButton from "./PrimaryButton";

function ContactForm() {
  return (
    <article className="bg-gradient-to-br from-blue-100 to-yellow-200 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md">
      <form className="space-y-5 sm:space-y-6 lg:space-y-7">
        {/* Name */}
        <div>
          <label className="block text-sm sm:text-base font-semibold text-sky-900">
            Name
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full mt-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm sm:text-base font-semibold text-sky-900">
            Email
          </label>
          <input
            type="email"
            placeholder="janesmith@gmail.com"
            className="w-full mt-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm sm:text-base font-semibold text-sky-900">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Message goes here..."
            className="w-full mt-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 bg-white rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>

        {/* Button */}
        <PrimaryButton label="Submit" />
      </form>
    </article>
  );
}

export default ContactForm;
