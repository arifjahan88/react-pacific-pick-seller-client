import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-white md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between mx-3">
          <p className="text-xl font-bold dark:text-gray-400">Pacific Pick</p>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <p href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </p>
            </li>
            <li>
              <p href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </p>
            </li>
            <li>
              <p href="#" className="hover:underline">
                Contact
              </p>
            </li>
          </ul>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-300" />
        <div className="text-center">
          @2022 <strong>Pacific Pick</strong> All Rights Resurved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
