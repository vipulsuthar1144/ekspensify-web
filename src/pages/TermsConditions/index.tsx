import { MAIL_CONTACT_US } from "../../utils/constants";

const TermsConditions = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-5 md:px-0">
      <h1 className="text-3xl md:text-5xl font-semibold text-primary">
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-500  mt-1">
        Last Updated: February 06, 2025
      </p>

      <p className="text-secondary mt-6">
        These terms and conditions (“Agreement”) set forth the general terms and
        conditions of your use of the “Ekspensify” mobile application (“Mobile
        Application” or “Service”) and any of its related products and services
        (collectively, “Services”).
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Accounts and Membership
      </h2>
      <p className="mt-2 text-secondary">
        If you create an account in the Mobile Application, you are responsible
        for maintaining the security of your account and you are fully
        responsible for all activities that occur under the account.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Links to Other Resources
      </h2>
      <p className="mt-2 text-secondary">
        The Mobile Application and Services may link to other resources (such as
        websites, mobile applications, etc.), but we do not endorse or take
        responsibility for their content.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Changes and Amendments
      </h2>
      <p className="mt-2 text-secondary">
        We reserve the right to modify this Agreement or its terms at any time
        at our discretion. Any changes will be posted in the Mobile Application
        and may be communicated through additional means.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold">Acceptance of These Terms</h2>
      <p className="mt-2 text-secondary">
        By accessing and using the Mobile Application and Services, you agree to
        be bound by this Agreement. If you do not agree, you are not authorized
        to use the Mobile Application and Services.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold">Contact Us</h2>
      <p className="mt-2 text-secondary">
        If you have any questions or concerns about this Agreement, please
        contact us at:
      </p>
      <a
        href={`mailto:${MAIL_CONTACT_US}`}
        className="text-linkHover hover:underline"
      >
        {MAIL_CONTACT_US}
      </a>
      <p className="text-sm text-gray-500 mt-6">
        This document was last updated on February 06, 2025.
      </p>
    </div>
  );
};

export default TermsConditions;
