

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-pink-50 py-4 px-6 md:px-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          <b>My Portfolio</b>
        </h2>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-9 font-semibold text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

