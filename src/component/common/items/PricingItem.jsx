import React from "react";
import { plans } from "../Helper";
import { LuCrown, LuZap } from "react-icons/lu";

function PricingItem() {
  return (
    <>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative p-5 sm:p-6 md:p-4 lg:p-8 rounded-2xl bg-white border text-center transition hover:shadow-lg ${
            plan.highlighted ? "border-amber-400 border-2" : "border-gray-200"
          }`}
          data-aos="fade-up" // <-- AOS Animation yaha
          data-aos-delay={index * 150} // har card me 150ms ka delay increment
        >
          {/* Recommended badge */}
          {plan.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs px-3 py-1 rounded-full">
              Recommended
            </div>
          )}

          {/* Icon */}
          <div className="relative w-14 h-14 mx-auto mb-4">
            <div
              className={`absolute inset-0 rounded-full ${
                plan.highlighted
                  ? "bg-gradient-to-r from-sky-100 to-amber-200"
                  : "bg-slate-200"
              }`}
            ></div>
            {plan.name === "Starter" ? (
              <LuZap className="text-2xl text-cyan-900 absolute inset-0 m-auto" />
            ) : (
              <LuCrown className="text-xl text-cyan-900 absolute inset-0 m-auto" />
            )}
          </div>

          {/* Plan Name */}
          <h3 className="text-2xl sm:text-3xl text-cyan-900 font-bold mb-2">
            {plan.name}
          </h3>
          <p className="text-slate-400 font-medium text-base mb-3">
            {plan.tagline}
          </p>

          {/* Price */}
          <p className="text-3xl sm:text-4xl text-cyan-900 font-bold mb-4">
            ${plan.price}{" "}
            <span className="text-base text-slate-400 font-medium">
              {plan.period}
            </span>
          </p>

          {/* Button */}
          <button
            className={`button-base w-full py-2 sm:py-3 rounded-full font-medium ${
              plan.highlighted
                ? "bg-sky-900 text-white hover:bg-sky-800"
                : "border-2 border-sky-900 text-sky-900 hover:bg-sky-900 hover:text-white"
            }`}
          >
            {plan.buttonText}
          </button>

          {/* Features */}
          <ul className="mt-5 sm:mt-6 space-y-2 text-left text-sm lg:text-base text-slate-500">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-amber-400">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default PricingItem;
