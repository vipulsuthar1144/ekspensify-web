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
        (collectively, “Services”). This Agreement is legally binding between
        you (“User”, “you” or “your”) and this Mobile Application developer
        (“Operator”, “we”, “us” or “our”). If you are entering into this
        Agreement on behalf of a business or other legal entity, you represent
        that you have the authority to bind such entity to this Agreement, in
        which case the terms “User”, “you” or “your” shall refer to such entity.
        If you do not have such authority, or if you do not agree with the terms
        of this Agreement, you must not accept this Agreement and may not access
        and use the Mobile Application and Services. By accessing and using the
        Mobile Application and Services, you acknowledge that you have read,
        understood, and agree to be bound by the terms of this Agreement. You
        acknowledge that this Agreement is a contract between you and the
        Operator, even though it is electronic and is not physically signed by
        you, and it governs your use of the Mobile Application and Services.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Accounts and Membership
      </h2>
      <p className="mt-2 text-secondary">
        If you create an account in the Mobile Application, you are responsible
        for maintaining the security of your account and you are fully
        responsible for all activities that occur under the account and any
        other actions taken in connection with it. We may monitor and review new
        accounts before you may sign in and start using the Services. Providing
        false contact information of any kind may result in the termination of
        your account. You must immediately notify us of any unauthorized uses of
        your account or any other breaches of security. We will not be liable
        for any acts or omissions by you, including any damages of any kind
        incurred as a result of such acts or omissions. We may suspend, disable,
        or delete your account (or any part thereof) if we determine that you
        have violated any provision of this Agreement or that your conduct or
        content would tend to damage our reputation and goodwill. If we delete
        your account for the foregoing reasons, you may not re-register for our
        Services. We may block your email address and Internet protocol address
        to prevent further registration.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Links to Other Resources
      </h2>
      <p className="mt-2 text-secondary">
        Although the Mobile Application and Services may link to other resources
        (such as websites, mobile applications, etc.), we are not, directly or
        indirectly, implying any approval, association, sponsorship,
        endorsement, or affiliation with any linked resource, unless
        specifically stated herein. We are not responsible for examining or
        evaluating, and we do not warrant the offerings of, any businesses or
        individuals or the content of their resources. We do not assume any
        responsibility or liability for the actions, products, services, and
        content of any other third parties. You should carefully review the
        legal statements and other conditions of use of any resource which you
        access through a link in the Mobile Application. Your linking to any
        other off-site resources is at your own risk.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold text-primary">
        Changes and Amendments
      </h2>
      <p className="mt-2 text-secondary">
        We reserve the right to modify this Agreement or its terms related to
        the Mobile Application and Services at any time at our discretion. When
        we do, we will revise the updated date at the bottom of this page, post
        a notification in the Mobile Application, send you an email to notify
        you. We may also provide notice to you in other ways at our discretion,
        such as through the contact information you have provided.
      </p>
      <p className="mt-2 text-secondary">
        An updated version of this Agreement will be effective immediately upon
        the posting of the revised Agreement unless otherwise specified. Your
        continued use of the Mobile Application and Services after the effective
        date of the revised Agreement (or such other act specified at that time)
        will constitute your consent to those changes.
      </p>

      <hr className="my-6 border-primary" />

      <h2 className="text-xl font-semibold">Acceptance of These Terms</h2>
      <p className="mt-2 text-secondary">
        You acknowledge that you have read this Agreement and agree to all its
        terms and conditions. By accessing and using the Mobile Application and
        Services you agree to be bound by this Agreement. If you do not agree to
        abide by the terms of this Agreement, you are not authorized to access
        or use the Mobile Application and Services.
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
