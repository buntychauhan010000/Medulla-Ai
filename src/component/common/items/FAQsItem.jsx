import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "../Helper";

function FAQsItem({ openIndex, toggleFAQ }) {
  return (
    <>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const ref = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
          if (ref.current) {
            setHeight(ref.current.scrollHeight); // content ka exact height le lo
          }
        }, [isOpen]);

        return (
          <div
            key={index}
            className="border border-slate-200 rounded-lg sm:rounded-xl bg-white shadow-sm"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="no-hover-scale w-full flex justify-between items-center p-3 sm:p-5 lg:p-6 text-left text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-800 font-semibold focus:outline-none"
            >
              <span className="pr-3 sm:pr-4">{faq.question}</span>
              <motion.span
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <FaMinus className="text-sky-900 flex-shrink-0" />
                ) : (
                  <FaPlus className="text-sky-900 flex-shrink-0" />
                )}
              </motion.span>
            </button>

            {/* Answer Animation */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: height, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div
                    ref={ref}
                    className="px-3 sm:px-5 pb-3 sm:pb-5 text-slate-500 font-medium text-xs sm:text-base lg:text-lg leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}

export default FAQsItem;
