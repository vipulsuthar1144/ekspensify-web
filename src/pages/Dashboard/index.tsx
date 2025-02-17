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
    <div className="space-y-24 md:space-y-14">
      <Hero handleExploreFeature={handleExploreFeature} />
      <HowItWorks />
      <FeatureSection
        ref={featureRef}
        img={imgTransaction}
        title="Smart Auto-Tracking"
        desc="Effortlessly track your online transactions in real time. Enable auto-tracking, and Ekspensify will automatically detect online transactions and mark them as pending. Review and categorize them later with just a tap!"
      />
      <FeatureSection
        rtl
        img={imgAccounts}
        title="Track Multiple Accounts in One Place"
        desc="Easily manage all your bank accounts in one app. Add multiple accounts and track balances across different banks effortlessly."
      />
      <FeatureSection
        img={imgBudget}
        title="Create and Manage Budgets"
        desc="Set your spending limits and stay on track. With Ekspensify, you can easily create budgets by setting the amount and period (e.g. monthly, weekly). Stay within your budget."
      />
      <FeatureSection
        rtl
        img={imgExport}
        title="Export Your Transactions"
        desc="Easily generate and export your financial statements. With Ekspensify, you can quickly export your transaction history in both PDF and CSV formats."
      />
      <FeatureSection
        img={imgCategories}
        lastSection
        title="Customizable Categories for Income & Expense"
        desc="Ekspensify offers a wide range of predefined categories for both income and expenses. Need something more specific? You can easily create custom categories to fit your unique spending habits and track your money with precision."
      />
    </div>
  );
};

export default Dashboard;
