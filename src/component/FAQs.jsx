import React, { useState } from "react";
import FAQsItem from "./common/items/FAQsItem";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="FAQs"
      className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20 max-w-4xl"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2
        className="text-lg sm:text-2xl lg:text-4xl font-extrabold text-center mb-2 sm:mb-3 lg:mb-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Frequently Asked Questions FAQs
      </h2>
      <p
        className="text-slate-400 text-center mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-base lg:text-lg font-medium px-2 sm:px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Find quick answers to common questions about our services to maximize
        your Ad Performance.
      </p>

      {/* FAQ Items */}
      <div
        className="space-y-2 sm:space-y-3 lg:space-y-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <FAQsItem openIndex={openIndex} toggleFAQ={toggleFAQ} />
      </div>
    </div>
  );
}

export default FAQs;
