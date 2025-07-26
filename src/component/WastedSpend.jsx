import React from "react";
import Neuroscience from "./common/Neuroscience";
import MeasureHuman from "./common/MeasureHuman";

function WastedSpend() {
  return (
    <div className="bg-gradient-to-b from-white to-amber-50  py-5 xs:py-6 sm:py-8 md:py-10 xl:py-20">
      <div className="container mx-auto px-3">
        <p
          className="text-2xl md:text-3xl lg:text-medium font-bold text-center font-Montserrat mb-6 sm:mb-8 lg:mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Check Attention. Optimize Creative. Cut Wasted Spend.
        </p>
        <Neuroscience />
        <MeasureHuman />
      </div>
    </div>
  );
}

export default WastedSpend;
