import React from "react";
import pinkstar from "../../assets/img/pinkstar.png";
import perfumegroup from "../../assets/img/perfumegroup.png";

function MeasureHuman() {
  return (
    <section
      className="flex flex-col-reverse sm:flex-row justify-between gap-8 sm:gap-10 md:gap-5 lg:gap-16 items-center pt-8 lg:pt-10"
      data-aos="fade-up"
    >
      {/* Left Section */}
      <article
        className="bg-gradient-to-tr from-sky-100 to-amber-200 w-full sm:w-1/2 md:w-2/5 lg:w-1/2 py-6 px-4 flex justify-center items-center rounded-2xl mt-6 sm:mt-0"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <img
          className="w-4/5 lg:w-3/5"
          src={perfumegroup}
          alt="Perfume Group"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
      </article>

      {/* Right Section */}
      <article
        className="flex flex-col items-center sm:items-start gap-4 sm:gap-3 lg:gap-5 text-center sm:text-start w-full sm:w-1/2"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <img
          className="w-14 sm:w-16 lg:w-20"
          src={pinkstar}
          alt="Pink Star"
          data-aos="zoom-in"
          data-aos-delay="150"
        />
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-lg leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Measure Human Attention at the Speed of AI
        </h2>
        <p
          className="text-sm sm:text-base lg:text-lg font-semibold text-slate-500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Instant lab-grade heatmaps and data reveal hidden hotspots and
          attention gaps in seconds. Stop burning budgets on blind bets and
          start launching with confidence.
        </p>
        <button
          className="bg-rose-400 py-2 px-6 sm:py-2.5 sm:px-7 lg:py-3 lg:px-9 text-white font-medium rounded-full transition duration-300 hover:bg-rose-500"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get Started
        </button>
      </article>
    </section>
  );
}

export default MeasureHuman;
