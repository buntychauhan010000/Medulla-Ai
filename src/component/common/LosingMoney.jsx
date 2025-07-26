import React from "react";
import PrimaryButton from "./PrimaryButton";
import imageStrip from "../../assets/img/image-strip.png";

function LosingMoney() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-amber-50 relative">
      <div className="container mx-auto px-3">
        <div
          className="xl:max-w-3/4 mx-auto py-10 md:py-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1
            className="font-Montserrat text-3xl sm:text-4xl text-sky-900 md:text-5xl lg:text-large font-bold text-center md:leading-15"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Use AI To Stop <span className="text-amber-400">Losing Money</span>{" "}
            When Testing Ads
          </h1>

          <p
            className="lg:text-2xl font-semibold text-center mt-5 text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our <span className="font-black">neuroscience backed AI-based</span>{" "}
            eye tracking model shows you what works before launch, so you only
            invest in proven winners
          </p>

          <div
            className="flex gap-5 justify-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <PrimaryButton label="Sign in with Google" icon={false} />
            <PrimaryButton />
          </div>
        </div>

        <div
          className="w-full flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={imageStrip}
            alt="Ad Preview"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default LosingMoney;
