import React from "react";
import guessworkImg from "../assets/img/guessworkImg.png";
import guessworkImg2 from "../assets/img/guessworkImg2.png";
import centerlogo from "../assets/img/centerlogo.png";
import centerimg from "../assets/img/centerimg.png";

function SimpleSteps() {
  return (
    <section
      id="Solution"
      className="container mx-auto px-3  py-5 xs:py-6 sm:py-8 md:py-10 xl:py-20"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2
        className="text-lg sm:text-xl md:text-3xl lg:text-medium font-bold text-center font-Montserrat mb-6 sm:mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Predict Ad Performance with Simple Steps
      </h2>

      {/* Cards Section */}
      <div
        className="flex flex-row justify-center items-center gap-3 sm:gap-8 md:gap-10 lg:gap-14 mb-10 md:mb-12 lg:mb-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Left Card */}
        <article
          className="w-full  sm:max-w-3xs md:max-w-2xs lg:max-w-xs pt-5 sm:pt-10 px-4 sm:px-6 backdrop-blur-[35px] shadow-[0_0_20px_0_#FBBF244D] rounded-2xl relative"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img
            src={guessworkImg}
            alt="Guesswork"
            className="w-full aspect-[3/4] object-cover rounded-t-xl"
          />
          <button className="py-1 px-2 sm:py-2 sm:px-4 bg-rose-400 text-sm sm:text-base text-white font-medium rounded-md absolute -top-4 left-1/2 -translate-x-1/2">
            Guesswork
          </button>
        </article>

        {/* Center Logo */}
        <img
          className="hidden md:block w-24 lg:w-28 xl:w-60 my-6 md:my-0 animate-bounce"
          src={centerlogo}
          alt="Center Logo"
          data-aos="zoom-in"
          data-aos-delay="400"
        />

        {/* Right Card */}
        <article
          className="w-full sm:max-w-3xs md:max-w-2xs lg:max-w-xs  pt-5 sm:pt-10 px-4 sm:px-6 backdrop-blur-[35px] shadow-[0_0_20px_0_#FBBF244D] rounded-2xl relative"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src={guessworkImg2}
            alt="Reality"
            className="w-full aspect-[3/4] object-cover rounded-t-xl"
          />
          <button className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base bg-lime-500 text-white font-medium rounded-md absolute -top-4 left-1/2 -translate-x-1/2">
            Reality
          </button>
        </article>
      </div>

      {/* Bottom Image */}
      <img
        className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-6xl"
        src={centerimg}
        alt="Center"
        data-aos="fade-up"
        data-aos-delay="600"
      />
    </section>
  );
}

export default SimpleSteps;
