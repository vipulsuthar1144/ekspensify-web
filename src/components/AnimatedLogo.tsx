import Lottie from "lottie-react";
import animationData from "../assets/app-animated-logo.json"; // Adjust the path accordingly

const AnimatedLogo = () => {
  return (
    <div className="flex justify-center bg-primary items-center h-screen">
      <Lottie animationData={animationData} loop={false} className="max-w-xl" />
    </div>
  );
};

export default AnimatedLogo;
