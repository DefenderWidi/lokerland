import React from "react";
import Logo from "./assets/lokerlandoutlinelogo.png";

function Footer() {
  return (
    <footer className="bg-[#00114a] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo dan Nama */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="/" className="flex items-center justify-center md:justify-start">
              <img src={Logo} className="h-8 me-3" alt="LokerLand Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                LokerLand
              </span>
            </a>
          </div>
          {/* Grid Link */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-center md:text-left">
                Resources
              </h2>
              <ul className="text-gray-300 font-medium text-center md:text-left">
                <li className="mb-4">
                  <a href="/404" className="hover:underline">
                    LokerLand Blog
                  </a>
                </li>
                <li>
                  <a href="/404" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-center md:text-left">
                Follow us
              </h2>
              <ul className="text-gray-300 font-medium text-center md:text-left">
                <li className="mb-4">
                  <a href="/404" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/404" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-center md:text-left">
                Legal
              </h2>
              <ul className="text-gray-300 font-medium text-center md:text-left">
                <li className="mb-4">
                  <a href="/404" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/404" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024{" "}
            <a href="/" className="hover:underline">
              LokerLand
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
