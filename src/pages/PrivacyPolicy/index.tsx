import { MAIL_CONTACT_US } from "../../utils/constants";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-5 md:px-0">
      <h1 className="text-4xl md:text-5xl font-semibold text-primary">
        Privacy Policy
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Last Updated: February 05, 2025
      </p>

      <p className="text-secondary mt-6">
        This Privacy Policy applies to the Ekspensify mobile application
        ("Application"), developed and provided as an open-source service by
        Dilip Chauhan ("Service Provider"). By using the Application, you agree
        to the collection and use of information as outlined in this policy.
        This service is provided "AS IS."
      </p>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Information Collection and Use
        </h2>
        <p className="text-secondary mt-2">
          The Application collects certain information when you download and use
          it, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-secondary mt-2 space-y-2">
          <li>Your device’s Internet Protocol (IP) address</li>
          <li>The pages you visit within the Application</li>
          <li>Total time spent using the Application</li>
          <li>The operating system of your mobile device</li>
        </ul>
        <p className="text-secondary mt-2">
          The Application does not collect precise location data from your
          device.
        </p>
        <p className="text-secondary mt-2">
          The Service Provider may use your information to communicate important
          notices, updates, or marketing promotions.
        </p>
        <p className="text-secondary mt-2">
          For an improved user experience, you may be required to provide
          personally identifiable information, such as your Name and Email
          Address. This information will be retained and used per this Privacy
          Policy.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Permissions Required
        </h2>
        <p className="text-secondary mt-2">
          The Application requires the following permissions to function
          properly:
        </p>
        <ul className="list-disc list-inside text-secondary mt-2 space-y-2">
          <li>
            <strong>Camera & Storage:</strong> Used for adding attachments to
            transactions.
          </li>
          <li>
            <strong>SMS:</strong> Used for the auto-tracking feature. When
            enabled, the Application reads transaction-related SMS messages to
            track expenses. This is a completely local feature, and no SMS data
            is sent to the server.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Third-Party Access
        </h2>
        <p className="text-secondary mt-2">
          Aggregated and anonymized data may be shared with external services to
          improve the Application. The Service Provider may disclose user data
          under the following circumstances:
        </p>

        <ul className="list-disc list-inside text-secondary mt-2 space-y-2">
          <li>
            When legally required, such as in response to a court order or
            government request.
          </li>
          <li>
            When necessary to protect rights, safety, prevent fraud, or address
            security concerns.
          </li>
          <li>
            With trusted third-party service providers who assist in Application
            functionality but are bound by confidentiality agreements.
          </li>
        </ul>
        <p className="text-secondary mt-2">
          The Application utilizes third-party services, each with its own
          privacy policies:
        </p>
        <ul className="list-disc list-inside text-secondary mt-2 space-y-2">
          <li>
            <a
              href="https://www.google.com/policies/privacy/"
              className="text-linkHover hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/support/privacy"
              className="text-linkHover hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics for Firebase
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/support/privacy"
              className="text-linkHover hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firebase Crashlytics
            </a>
          </li>
          <li>
            <a
              href="https://onesignal.com/privacy_policy"
              className="text-linkHover hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OneSignal
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">Opt-Out Rights</h2>
        <p className="text-secondary mt-2">
          You may stop all data collection by uninstalling the Application using
          the standard uninstall procedures on your mobile device or app
          marketplace.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Data Retention Policy
        </h2>
        <p className="text-secondary mt-2">
          The Service Provider retains user-provided data as long as you use the
          Application and for a reasonable period thereafter. If you wish to
          delete your data, please contact{" "}
          <a
            href={`mailto:${MAIL_CONTACT_US}`}
            className="text-linkHover hover:underline"
          >
            {MAIL_CONTACT_US}
          </a>
          , and your request will be processed within a reasonable timeframe.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Account Deletion & Data Erasure
        </h2>
        <p className="text-secondary mt-2">
          You have the right to delete your account and erase your personal
          data. You can do so in two ways:
        </p>

        <ul className="list-disc list-inside text-secondary mt-2 space-y-2">
          <li>
            <strong>Via the Ekspensify Mobile App:</strong> Log in and delete
            your account from settings.
          </li>
          <li>
            <strong>Via Email Request:</strong> Send a request to{" "}
            <a
              href={`mailto:${MAIL_CONTACT_US}`}
              className="text-linkHover hover:underline"
            >
              {MAIL_CONTACT_US}
            </a>{" "}
            with account deletion instructions.
          </li>
        </ul>
        <p className="text-secondary mt-2">
          To prevent unauthorized access, additional identity verification may
          be required before processing your request. Once processed, all
          personal data will be permanently deleted and cannot be recovered.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Children’s Privacy
        </h2>
        <p className="text-secondary mt-2">
          The Application is not intended for users under the age of 13. The
          Service Provider does not knowingly collect personal data from
          children under 13. If you discover that a child has provided personal
          data, please contact{" "}
          <a
            href={`mailto:${MAIL_CONTACT_US}`}
            className="text-linkHover hover:underline"
          >
            {MAIL_CONTACT_US}
          </a>
          , and it will be promptly deleted.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">Security</h2>
        <p className="text-secondary mt-2">
          The Service Provider implements physical, electronic, and procedural
          safeguards to protect your data. However, no system is completely
          secure, and the Service Provider cannot guarantee absolute security.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">
          Changes to This Privacy Policy
        </h2>
        <p className="text-secondary mt-2">
          This Privacy Policy may be updated periodically. Any changes will be
          posted on this page. Continued use of the Application after updates
          signifies acceptance of the changes.
        </p>
      </section>
      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">Your Consent</h2>
        <p className="text-secondary mt-2">
          By using the Application, you consent to the collection, use, and
          processing of your data as described in this Privacy Policy.
        </p>
      </section>

      <hr className="my-6 border-primary" />

      <section>
        <h2 className="text-xl font-semibold text-primary">Contact Us</h2>
        <p className="text-secondary mt-2">
          For any questions regarding this Privacy Policy, please contact:
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${MAIL_CONTACT_US}`}
            className="text-linkHover hover:underline"
          >
            {MAIL_CONTACT_US}
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
