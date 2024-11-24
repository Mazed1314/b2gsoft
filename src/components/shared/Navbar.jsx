"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

// Navbar links
const LINKS = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "#" },
  { title: "Deals", path: "#" },
  { title: "What's new", path: "#" },
];

// Reusable NavLink component
const NavLink = ({ title, path, active }) => (
  <Link
    href={path}
    className={`${
      active ? "text-primary border-b-2 border-primary" : "text-black"
    } text-lg font-medium hover:text-violet-500`}
  >
    {title}
  </Link>
);

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-violet-50">
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown Menu for Small Screens */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost md:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {LINKS.map(({ title, path }) => (
                <NavLink
                  key={title}
                  title={title}
                  path={path}
                  active={pathName === path}
                />
              ))}
            </ul>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              width={150}
              height={60}
              src="/logo_black.png"
              alt="logo"
              priority
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden md:flex">
          <div className="menu menu-horizontal px-1 flex gap-8">
            {LINKS.map(({ title, path }) => (
              <NavLink
                key={title}
                title={title}
                path={path}
                active={pathName === path}
              />
            ))}
          </div>
        </div>

        {/* Navbar End */}
        <div className="navbar-end items-center gap-4">
          {/* Search Input */}
          <label className="input input-bordered lg:flex items-center gap-2 rounded-full hidden">
            <CiSearch className="text-black text-2xl" />
            <input
              type="tex t"
              className="grow text-black"
              placeholder="Search"
            />
          </label>
          <CiSearch className="text-black text-3xl lg:hidden" />

          {/* Cart Icon */}
          <Link
            href="/#"
            className="relative hover:bg-violet-500 hover:text-white rounded-full p-1"
          >
            <IoBagOutline className="text-3xl" />
            <span className="px-1 rounded-full text-white bg-black absolute top-0 right-1 text-xs">
              5
            </span>
          </Link>

          {/* User Icon */}
          <Link
            href="/#"
            className="hover:bg-violet-500 hover:text-white rounded-full p-1"
          >
            <CiUser className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
