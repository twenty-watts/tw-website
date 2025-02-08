// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="py-6 bg-[#050A30] shadow-md">
      <div className="max-w-5xl mx-auto px-8 flex justify-between items-center">
        {/* Logo linking to homepage */}
        <Link href="/">
          <Image
            src="/twentywatts.gif"
            alt="TW logo"
            width={240}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        {/* Navigation Links and LinkedIn Icon */}
        <div className="flex items-center gap-6">
          <div className="flex gap-12 items-center text-md text-gray-300 font-semibold">
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
          <a
            href="https://www.linkedin.com/company/twenty-watts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}