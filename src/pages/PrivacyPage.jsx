const PrivacyPage = () => {
  return (
    <>
      <div className="container mx-auto p-8 bg-black text-neutral-300 md:pt-20 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <p className="text-lg mb-6">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and safeguard your personal information when you use our
          MovieDB website and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-6">
          We collect information to provide better services to all our users.
          The information we may collect includes:
          <ul className="list-disc list-inside ml-6">
            <li>
              Personal information like your name, email, and preferences.
            </li>
            <li>
              Usage data, such as the movies you search for or interact with.
            </li>
            <li>Device information, like IP addresses and browser data.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect to:
          <ul className="list-disc list-inside ml-6">
            <li>Provide and improve our services.</li>
            <li>
              Personalize your experience based on your movie preferences.
            </li>
            <li>
              Communicate with you, including sending you relevant updates.
            </li>
            <li>Monitor and analyze website performance.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-6">
          We take your privacy seriously and use appropriate security measures
          to protect your personal data from unauthorized access or disclosure.
          However, no method of transmission over the internet or method of
          electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-6">
          You have the right to:
          <ul className="list-disc list-inside ml-6">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your personal data.</li>
            <li>
              Withdraw your consent to data processing (where applicable).
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update our privacy policy from time to time. We will notify you
          of any significant changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about our privacy policy, please
          contact us at:
          <br />
          <strong>Email:</strong> privacy@moviedb.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPage;
