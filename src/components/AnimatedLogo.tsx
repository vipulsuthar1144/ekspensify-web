import Lottie from "lottie-react";
import animationData from "../assets/app-animated-logo.json"; // Adjust the path accordingly

const AnimatedLogo = () => {
  return (
    <div className=" bg-primary w-full h-screen">
      <div className="flex justify-center items-center h-svh">
        <Lottie
          animationData={animationData}
          loop={false}
          className="max-w-xl"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
