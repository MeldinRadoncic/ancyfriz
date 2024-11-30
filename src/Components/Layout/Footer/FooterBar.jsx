import React from 'react';

const date = new Date().getFullYear();

const FooterBar = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base font-light">
            &copy; {date} AncyFriz. Sva prava zadržana.
          </p>
        </div>
        <div>
          <a
            href="/privacy-policy"
            className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <div>
          <a
            href="https://www.appwizardpro.com"
            className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by App Wizard
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
