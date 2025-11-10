import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#87CEEB] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo and Description Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-1">🦷</div>
                <div className="flex gap-1 justify-center">
                  <span className="text-xs">🔴</span>
                  <span className="text-xs">🟢</span>
                  <span className="text-xs">🟡</span>
                  <span className="text-xs">🔵</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-[#FF8C00]">Say Cheese</h2>
              <p className="text-sm text-white uppercase tracking-wide">
                Kids Dental and Orthodontics
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-white leading-relaxed max-w-2xl">
              Creating beautiful, healthy smiles for children in Chino, CA. Our
              experienced general dentist, Dr. Joshua Kohan, provides gentle,
              comprehensive dental care in a fun, child-friendly environment.
            </p>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Visit Us Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <div className="space-y-2 text-sm">
              <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
              <p>Friday: 8:00 AM - 4:00 PM</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Appointments Only</p>
            </div>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Phone No:</span>{" "}
                <a
                  href="tel:9094796030"
                  className="hover:underline"
                >
                  (909) 479-6030
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:saycheesekidsdental@gmail.com"
                  className="hover:underline"
                >
                  saycheesekidsdental@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> 12413 Central
                Ave, Chino, CA 91710
              </p>
            </div>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/meet-dr-kohan" className="block hover:underline">
                Meet Dr. Kohan
              </Link>
              <Link
                href="/childrens-dental-services"
                className="block hover:underline"
              >
                Children&apos;s Dental Services
              </Link>
              <Link
                href="/kids-braces-orthodontics"
                className="block hover:underline"
              >
                Kids Braces & Orthodontics
              </Link>
              <Link href="/patient-reviews" className="block hover:underline">
                Patient Reviews
              </Link>
              <Link href="/contact" className="block hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p>
            © 2025 Say Cheese Kids Dental & Orthodontics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

