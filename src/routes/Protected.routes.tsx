import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "terms-conditions",
    element: <TermsConditions />,
  },
];

export default ProtectedRoutes;
