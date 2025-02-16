import {
  imgAccounts,
  imgBudget,
  imgCategories,
  imgExport,
  imgTransaction,
} from "../../assets";
import Hero from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import FeatureSection from "./sections/FeatureSection";
import { useRef } from "react";

const Dashboard = () => {
  const featureRef = useRef<HTMLDivElement>(null);

  const handleExploreFeature = () => {
    if (featureRef.current) {
      const topOffset = featureRef.current.offsetTop - 100; // Adjust `100` for desired space
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="space-y-24">
      <Hero handleExploreFeature={handleExploreFeature} />
      <HowItWorks />
      <FeatureSection
        ref={featureRef}
        img={imgTransaction}
        title="Automatically track your online transactions"
        desc="Help find solutions with intuitive and in accordance with client
          business goals. We provide high-quality services."
      />
      <FeatureSection
        rtl
        img={imgAccounts}
        title="Easy to add multiple accounts and wallet"
        desc="Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services."
      />
      <FeatureSection
        img={imgBudget}
        title="Budget Smarter Plan, Track & Stay on Target!"
        desc="Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services."
      />
      <FeatureSection
        rtl
        img={imgExport}
        title="Export your Transaction in PDF/CVS file format"
        desc="Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services."
      />
      <FeatureSection
        img={imgCategories}
        lastSection
        title="You can add & remove your custom categories !"
        desc="Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services."
      />
    </div>
  );
};

export default Dashboard;
