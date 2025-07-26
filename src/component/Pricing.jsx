import React from "react";
import { plans } from "./common/Helper";
import { LuCrown, LuZap, LuBuilding2 } from "react-icons/lu";
import PricingItem from "./common/items/PricingItem";

function Pricing() {
  return (
    <div
      id="Pricing"
      className="bg-gradient-to-b from-amber-50 to-white py-8 sm:py-14 md:py-10 lg:py-20"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-3">
        {/* Heading */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-medium font-bold">
            Pricing
          </p>
          <p className="text-slate-400 font-semibold mt-1">
            Free Unlimited Till{" "}
            <span className="font-bold">December 31, 2025</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <PricingItem />
        </div>

        {/* Enterprise Block */}
        <div
          className="mt-10 sm:mt-12 border-2 border-cyan-900 rounded-2xl bg-white p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="flex items-center gap-4 text-center sm:text-left"
            data-aos="fade-right"
            data-aos-delay="350"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
              <LuBuilding2 className="text-2xl text-cyan-900" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-900">
                Enterprise
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                Improve your teams CTAs with MedullaAI
              </p>
            </div>
          </div>

          <button
            className="w-full sm:w-auto px-6 sm:px-8 md:px-20 py-2 border-2 text-sm sm:text-base font-medium border-sky-900 text-sky-900 rounded-full hover:bg-sky-900 hover:text-white "
            data-aos="zoom-in"
            data-aos-delay="400"
           
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
