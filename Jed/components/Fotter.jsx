import React from "react";

const Fotter = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Jed</h3>
            <p className="text-white/60 text-sm">
              Transforming dreams into global success through education and visa
              guidance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Visa Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Professional Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Career Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Application Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Jed Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="border-2 px-2 py-1 hover:bg-red-600 hover:text-white hover:border-red-600 transition uppercase ">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="border-2 px-2 py-1 hover:bg-red-600 hover:text-white hover:border-red-600  transition uppercase">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#" className="border-2 px-2 py-1 hover:bg-red-600 hover:text-white hover:border-red-600 transition uppercase">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
