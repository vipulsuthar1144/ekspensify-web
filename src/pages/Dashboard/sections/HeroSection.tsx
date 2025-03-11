import { AnimatePresence, motion } from "framer-motion";
import { imgHeroSection, imgPlaystore } from "../../../assets";
import { URL_PLAY_STORE } from "../../../utils/constants";
import { useEffect, useState } from "react";

const Hero = ({
  handleExploreFeature,
}: {
  handleExploreFeature: VoidFunction;
}) => {
  const words = ["Expense.", "Income."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    // <section className="relative w-full  flex items-center justify-center px-6 md:px-16">
    <section className="w-full container max-w-7xl mx-auto min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between gap-5 px-5 md:px-0">
      {/* Left Content */}
      <motion.div
        className="text-left flex-1 max-w-xl overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ willChange: "transform, opacity" }}
      >
        <h1
          style={{ lineHeight: "140%" }}
          className=" text-4xl md:text-6xl leading-relaxed mb-8 font-bold md:font-semibold text-primary"
        >
          Smart way to track your{" "}
          {/* <motion.span
            className="text-linkHover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ willChange: "transform, opacity" }}
          >
            Spending.
          </motion.span> */}
          {/* <span className="relative ml-5  text-linkHover"> */}
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="absolute w-full ml-3 text-linkHover"
              initial={{ opacity: 0, y: -30 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Move to normal position
              exit={{ opacity: 0, y: 30 }} // Exit going downward
              transition={{ duration: 0.3 }}
              style={{ willChange: "transform, opacity" }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
          {/* </span> */}
        </h1>
        <p className="text-secondary md:leading-7 text-sm md:text-base mt-4">
          Ekspensify is a personal finance management app that helps you easily
          track your income and expenses, stay on budget, and make smarter
          financial decisions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-6">
          <motion.a
            href={URL_PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  text-xs md:text-sm gap-2 bg-secondaryButton text-white px-4 py-2 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            {/* <FaGooglePlay /> */}
            <img
              src={imgPlaystore}
              alt="Play Store"
              className="w-5 h-auto select-none cursor-pointer"
              draggable={false}
            />
            Play Store
          </motion.a>

          <motion.button
            onClick={handleExploreFeature}
            className=" flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Explore Features <span className=" text-lg md:text-xl">⤍</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Content - Animated Phones */}
      <div className=" md:mt-0">
        <motion.img
          src={imgHeroSection}
          alt="Mobile UI 1"
          className="w-full max-w-md h-auto "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>
    </section>
    // </section>
  );
};

export default Hero;
