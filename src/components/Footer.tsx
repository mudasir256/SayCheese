import Image from 'next/image';

const DentalFooter = () => {
  return (
    <footer className="bg-[#5B9EC4] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Logo and Description Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-24 pt-8 lg:pt-0 pb-10 lg:mb-12">
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 lg:-mt-6">
            <Image
              src="/Images/logosaycheese.png"
              alt="Say Cheese Kids Dental and Orthodontics"
              width={100}
              height={140}
              className="w-28 sm:w-32 lg:w-40 h-auto rounded-2xl object-contain"
              priority
            />
          </div>

          <div className="flex items-center lg:w-1/2">
            <p className="text-white text-[15px] sm:text-base leading-relaxed text-center lg:text-left px-2 sm:px-0">
              Creating beautiful, healthy smiles for children in Chino, CA. Our experienced
              general dentist, Dr. Joshua Kohan, provides gentle, comprehensive dental care
              in a fun, child-friendly environment.
            </p>
          </div>
        </div>

        {/* Main Content Section - 2 Column Grid on Tablet, 3 Columns on Desktop */}
        <div className="pb-10 lg:pb-0 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-0 lg:mb-12">



          {/* Visit Us Box */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b border-white/20 lg:border-0 lg:text-xl lg:font-semibold lg:mb-6">
              Visit Us
            </h3>
            <div className="space-y-3.5 lg:space-y-3 text-[15px]">
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="font-medium lg:font-normal">Monday - Thursday</span>
                <span className="text-white/90 lg:text-white lg:ml-4">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="font-medium lg:font-normal">Friday</span>
                <span className="text-white/90 lg:text-white lg:ml-4">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="font-medium lg:font-normal">Saturday</span>
                <span className="text-white/90 lg:text-white lg:ml-4 lg:text-right">Closed</span>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="font-medium lg:font-normal">Sunday</span>
                <span className="text-white/90 lg:text-white lg:ml-4">Appointments Only</span>
              </div>
            </div>
          </div>

          {/* Contact Information Box */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b border-white/20 lg:border-0 lg:text-xl lg:font-semibold lg:mb-6">
              Contact Information
            </h3>
            <div className="space-y-3.5 lg:space-y-3 text-[15px]">
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="w-32 font-medium lg:font-normal">Phone</span>
                <a href="tel:+19094796030" className="text-white/90 lg:text-white lg:ml-4 hover:opacity-80 transition-opacity">
                  (909) 479-6030
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="w-32 font-medium lg:font-normal">Email</span>
                <a href="mailto:saycheesekidsdental@gmail.com" className="text-white/90 lg:text-white lg:ml-4 hover:opacity-80 transition-opacity break-words">
                  saycheesekidsdental@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <span className="w-32 font-medium lg:font-normal">Address</span>
                <a
                  href="https://maps.google.com/?q=12113+Central+Ave,+Chino,+CA+91710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 lg:text-white lg:ml-4 hover:opacity-80 transition-opacity"
                >
                  12113 Central Ave, Chino, CA 91710
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Box */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-2 border-b border-white/20 lg:border-0 lg:text-xl lg:font-semibold lg:mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3.5 lg:space-y-3 text-[15px]">
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#home" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Home
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#meet-dr-kohan" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Meet Dr. Kohan
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#services" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Dental Services
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#braces" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Braces & Orthodontics
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#reviews" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Patient Reviews
                </a>
              </div>
              <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start lg:flex-row lg:justify-between">
                <a href="#contact" className="font-medium lg:font-normal hover:opacity-80 lg:hover:text-gray-200 transition-all">
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-5">
          <p className="text-center text-white text-sm">
            © 2025 Say Cheese Kids Dental & Orthodontics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DentalFooter;