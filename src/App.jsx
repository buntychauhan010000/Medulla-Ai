import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import centerlogo from "./assets/img/centerlogo.png";

import Hero from "./component/Hero";
import SimpleSteps from "./component/SimpleSteps";
import WastedSpend from "./component/WastedSpend";
import Pricing from "./component/Pricing";
import FAQs from "./component/FAQs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec loader
    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS after loader ends
  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-700"
          style={{
            background: "linear-gradient(180deg, #E0F2FE 0%, #FFFBEB 100%)",
          }}
        >
          <img
            src={centerlogo}
            alt="MedullaAI"
            className="w-20 sm:w-24 lg:w-28 animate-bounce mb-4"
          />
          <p className="text-xl sm:text-2xl font-bold text-sky-900 animate-pulse">
            Loading MedullaAI...
          </p>
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <div className="overflow-hidden">
          <Hero />
          <SimpleSteps />
          <WastedSpend />
          <Pricing />
          <FAQs />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
