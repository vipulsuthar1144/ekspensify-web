import { motion } from "framer-motion";
import { imgDashedLine, imgRoundedBorder } from "../../../assets";
import { forwardRef } from "react";

interface IFeatureSectionProps {
  rtl?: boolean;
  img: string;
  title: string;
  desc: string;
  lastSection?: boolean;
}
const FeatureSection = forwardRef<HTMLDivElement, IFeatureSectionProps>(
  ({ rtl = false, img, title, desc, lastSection = false }, ref) => {
    return (
      <section
        ref={ref}
        className={`flex w-full overflow-hidden md:overflow-visible container max-w-7xl mx-auto items-center justify-between gap-5 px-5 md:px-0 ${
          !rtl ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
        }`}
      >
        <div
          className={`flex-1 relative flex items-center ${
            !rtl ? "justify-start" : "justify-end"
          }`}
        >
          <motion.img
            src={img}
            alt="Mobile UI 1"
            className="w-full max-w-sm h-auto z-20"
            initial={{ opacity: 0, x: !rtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
          />

          <div
            className={`absolute z-10 top-1/2 -translate-y-1/2  hidden md:block ${
              !rtl ? "left-0  rotate-180" : "right-0  rotate-0"
            }`}
          >
            <motion.img
              src={imgRoundedBorder}
              alt="Mobile UI Border"
              className="w-full max-w-lg h-auto"
            />
          </div>
          {!lastSection && (
            <div
              className={`absolute hidden md:block -bottom-24 -translate-x-1/2 z-30
          ${!rtl ? "left-1/4" : "right-1/2"}
          `}
            >
              <motion.img
                src={imgDashedLine}
                alt="Mobile UI Border"
                className="w-1.5 h-40"
              />
            </div>
          )}
        </div>

        {/* Text Section */}
        <motion.div
          className="text-left flex-1 max-w-4xl"
          initial={{ opacity: 0, x: !rtl ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >
          <h1
            className=" text-3xl md:text-5xl  mb-8 font-bold  md:font-semibold text-primary"
            style={{ lineHeight: "130%" }}
          >
            {title}
          </h1>
          <p className="text-secondary md:leading-7 text-sm md:text-base mt-4">
            {desc}
          </p>

          {/* Buttons */}
          {/* <div className="mt-10 flex items-center gap-6">
            <motion.a
              href="#features"
              className=" md:text-sm flex items-center text-xs gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Get Ready <span className=" text-lg md:text-xl">⤍</span>
            </motion.a>
          </div> */}
        </motion.div>
      </section>
    );
  }
);

export default FeatureSection;
