import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AnimatedLogo from "../components/AnimatedLogo";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

const AppLayout = () => {
  const [showSplashScreen, hideSplashScreen] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="text-primary w-full bg-main text-sm">
      {showSplashScreen ? (
        <AnimatedLogo />
      ) : (
        <>
          <AppHeader />
          <main className="min-h-screen py-10">
            <Outlet />
          </main>
          <AppFooter />
        </>
      )}
    </div>
  );
};

export default AppLayout;
