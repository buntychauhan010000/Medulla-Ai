import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "../Helper"; // <- Path adjust karo

function FAQsItem({ openIndex, toggleFAQ }) {
  return (
    <>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-lg sm:rounded-xl bg-white shadow-sm"
          data-aos="fade-up"
          data-aos-delay={100 + index * 100} // sequential delay
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-3 sm:p-5 lg:p-6 text-left text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-800 font-semibold focus:outline-none"
          >
            <span className="pr-3 sm:pr-4">{faq.question}</span>
            {openIndex === index ? (
              <FaMinus className="text-sky-900 flex-shrink-0" />
            ) : (
              <FaPlus className="text-sky-900 flex-shrink-0" />
            )}
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-3 sm:px-5 pb-3 sm:pb-5 text-slate-500 font-medium text-xs sm:text-base lg:text-lg leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default FAQsItem;
