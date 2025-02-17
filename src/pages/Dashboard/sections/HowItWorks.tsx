import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Install the app",
    description:
      "Get Ekspensify from the Play Store and install it on your device. The app is lightweight and easy to set up, making it perfect for managing your finances on the go.",
  },
  {
    id: 2,
    title: "Set Up Your Account",
    description:
      "Create your account and set up your wallet within minutes. You’ll have full control of your finances without the need for any bank details.",
  },
  {
    id: 3,
    title: "Start Tracking",
    description:
      "Begin monitoring your income and expenses right away. Log your transactions, set budgets, and gain clear insights into your spending patterns.",
  },
];

const StepItem = ({ step }: any) => {
  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center md:text-left"
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
          {step.id}
        </div>
      </div>
      <h3 className="font-semibold text-lg mt-4 text-primary">{step.title}</h3>
      <p className="text-secondary text-center text-sm mt-2 max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full px-5">
      <h2 className="text-center text-2xl  md:text-3xl font-semibold text-gray-900 mb-10">
        How it’s Work
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-12 relative">
        <div className="absolute top-4 container m-auto max-w-3xl w-full h-0.5 border-t-2 border-dashed border-main/30 left-0 right-0 mx-auto z-0"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative z-10">
            <StepItem step={step} />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-col items-center space-y-8 relative">
        {/* <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div> */}
        {steps.map((step) => (
          <div key={step.id} className="relative">
            <StepItem step={step} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
