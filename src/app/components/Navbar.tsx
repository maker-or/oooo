'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../globals.css';

const Navbar = () => {
  const pathName = usePathname();

  // Function to check if the current path matches the link's path
  const isActive = (path: string) => pathName === path;

  return (
    <nav className="py-5">
      <div className="items-center flex">
        <ul className="inline-flex flex-row items-center mx-auto bg-[#1f1f1f] py-2.5 px-3 rounded-full border text-[#646464] text-[1.2rem] font-medium">
          <li className="px-2">
            <Link href="/">
              <img src="/men.png" alt="logo" width="100px" height="50px" />
            </Link>
          </li>
          <li className="px-2">
            <Link href="/com">
              <button
                className={`rounded-full px-4 py-3 ${
                  isActive('/com') ? 'bg-[#FF5E00] text-[#0c0c0c]' : ''
                }`}
              >
                Todo
              </button>
            </Link>
          </li>

          <li className="px-2">
            <Link href="/com">
              <button
                className={`rounded-full px-4 py-3 ${
                  isActive('/com') ? 'bg-[#FF5E00] text-[#0c0c0c]' : ''
                }`}
              >
                Focus
              </button>
            </Link>
          </li>

          <li className="px-2">
            <Link href="/repo">
              <button
                className={`rounded-full px-4 py-3 ${
                  isActive('/repo') ? 'bg-[#FF5E00] text-[#0c0c0c]' : ''
                }`}
              >
                Repo
              </button>
            </Link>
          </li>

          <li className="px-2">
            <Link href="/">
              <button
                className={`rounded-full px-4 py-3 ${
                  isActive('/') ? 'bg-[#FF5E00] text-[#0c0c0c]' : ''
                }`}
              >
                Space
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
