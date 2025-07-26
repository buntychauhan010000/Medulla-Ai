import React from "react";
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import ContactForm from "./common/ContactForm";

function Contact() {
  return (
    <section
      id="Contact"
      className="bg-gradient-to-b from-white to-sky-100  py-5 xs:py-6 sm:py-8 md:py-10 xl:py-20"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-5 lg:gap-16">
          {/* Left Section (Contact Info + Cards) */}
          <article
            className="md:w-3/5 lg:w-1/2 space-y-6 sm:space-y-8 text-center sm:text-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-900"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Get in Touch with Us
            </h2>

            {/* Highlights */}
            <div
              className="flex flex-col sm:flex-row gap-5 sm:gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex-1">
                <p className="text-base sm:text-lg font-semibold text-sky-900">
                  ● Book a Demo Today:
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Experience our platform in action
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg font-semibold text-sky-900">
                  ● Effortless Assistance:
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Connect with our team anytime
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Phone Card */}
              <article
                className="bg-white shadow rounded-xl p-5 sm:p-6 md:p-3 lg:p-6 text-center sm:text-left mx-auto sm:mx-0 sm:w-1/2"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-slate-300 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                  <FiPhone className="text-xl sm:text-2xl text-sky-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-sky-900 mt-3 sm:mt-4">
                  Call Us
                </h3>
                <p className="text-slate-500 text-sm sm:text-base mt-1">
                  Need help? Message us on WhatsApp
                </p>
                <p className="text-sky-900 font-medium text-sm sm:text-base mt-2">
                  <a href="tel:+917788884477">+91 7788884477</a>
                </p>
              </article>

              {/* Email Card */}
              <article
                className="bg-white shadow rounded-xl p-5 sm:p-6 md:p-3 lg:p-6 text-center sm:text-left sm:w-1/2 mx-auto sm:mx-0"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-slate-300 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                  <FiMessageCircle className="text-xl sm:text-2xl text-sky-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-sky-900 mt-3 sm:mt-4">
                  Reach Out to Us
                </h3>
                <p className="text-slate-500 text-sm sm:text-base mt-1">
                  Need assistance? Drop us a message anytime.
                </p>
                <p className="text-sky-900 font-medium text-sm sm:text-base mt-2">
                  <a href="mailto:support@medullabs.com">
                    support@medullabs.com
                  </a>
                </p>
              </article>
            </div>
          </article>

          {/* Right Section (Form) */}
          <div
            className="md:w-2/5 lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
