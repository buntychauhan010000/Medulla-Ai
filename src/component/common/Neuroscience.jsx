import React from "react";
import bluestar from "../../assets/img/bluestar.png";
import perfume from "../../assets/img/perfume.png";

function Neuroscience() {
  return (
    <section
      className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 lg:gap-16 items-center py-8 sm:pb-10"
      data-aos="fade-up"
    >
      {/* Left Section */}
      <article
        className="flex flex-col items-center sm:items-end gap-4 sm:gap-3 lg:gap-5 text-center sm:text-end w-full sm:w-1/2 xl:w-2/5"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img
          className="w-14 sm:w-16 lg:w-20"
          src={bluestar}
          alt="Blue Star"
          data-aos="zoom-in"
          data-aos-delay="150"
        />
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-md leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Neuroscience Backed Models
        </h2>
        <p
          className="text-sm sm:text-base lg:text-lg font-semibold text-slate-500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          MedullaAI delivers accurate visual analysis using AI models trained on
          real eye-tracking data. Our models predict human gaze and attention
          and mimic how the brain responds to visuals.
        </p>
        <button
          className="bg-cyan-700 py-2 px-6 sm:py-2.5 sm:px-7 lg:py-3 lg:px-9 text-white font-medium rounded-full transition duration-300 hover:bg-cyan-800"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Find Out
        </button>
      </article>

      {/* Right Section */}
      <article
        className="bg-gradient-to-tr from-sky-100 to-amber-200 w-full sm:w-1/2 py-6 px-4 flex justify-center items-center rounded-2xl mt-6 sm:mt-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          className="w-4/5 lg:w-3/5"
          src={perfume}
          alt="Perfume Visual"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
      </article>
    </section>
  );
}

export default Neuroscience;
