"use client";
import Link from "next/link";
import { GiLion } from "react-icons/gi";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";

const data = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Shop", href: "/shop" },
  { text: "Contact Us", href: "/contact" },
];

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav className=" relative">
      <div className="flex flex-col md:flex-row justify-between md:place-items-center py-5">
        <main className=" flex justify-between">
          <div className=" flex place-items-center gap-2">
            <GiLion className=" font-bold text-amber-600" />
            <h1 className=" font-bold text-gray-600 text-base">LHF</h1>
          </div>
          <div className="btn flex md:hidden  btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-[#B88E2F] indicator-item">
                0
              </span>
            </div>
          </div>
          <button
            className="md:hidden transition-transform transform ease-in-out"
            onClick={toggleNav}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileNav ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </main>

        <div>
          <div className=" hidden md:flex gap-5 ">
            {data.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className=" font-semibold text-sm text-gray-500"
                onClick={() => setMobileNav(false)}
              >
                {" "}
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="btn hidden md:flex  btn-circle btn-ghost btn-md ml-4">
          <div className="indicator">
            <BsCart3 className="h-6 w-6" />
            <span className="badge badge-sm badge-[#B88E2F] indicator-item">
              0
            </span>
          </div>
        </div>
      </div>

      {mobileNav && (
        <main className=" slide-in-right z-10 absolute md:hidden flex flex-col gap-3 bg-gray-100 py-2 pl-2 w-[100%] !h-auto">
          {data.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className=" font-semibold text-sm text-gray-500"
            >
              {" "}
              {item.text}
            </Link>
          ))}
        </main>
      )}
    </nav>
  );
}
