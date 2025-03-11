import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsConditions from "../pages/terms-conditions";
import OpenSource from "../pages/open-source";

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
    path: "open-source",
    element: <OpenSource />,
  },
  {
    path: "terms-conditions",
    element: <TermsConditions />,
  },
];

export default ProtectedRoutes;
