// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050A30]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6">
            <Image
              src="/logo-banner.png"
              alt="Twenty Watts Logo"
              width={150}
              height={35}
            />
            {/* Navigation links shown on larger screens */}
            <div className="hidden md:flex gap-6 text-md text-gray-300 font-semibold self-start">
              <Link href="/about" className="hover:text-white transition">
                about
              </Link>
              <Link href="/careers" className="hover:text-white transition">
                careers
              </Link>
              <Link href="/contacts" className="hover:text-white transition">
                contacts
              </Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-gray-300 text-sm text-right">
            <p>info@twentywatts.com</p>
            <p>Via Rugabella, 10</p>
            <p>20122 Milano (MI)</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Twenty Watts. All rights reserved.
        </div>
      </div>
    </footer>
  );
}