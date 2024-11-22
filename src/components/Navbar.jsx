import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const Links = (
    <>
      <Link
        href="/"
        className="text-black text-lg font-medium hover:text-violet-500"
      >
        Home
      </Link>
      <Link
        href="/"
        className="text-black text-lg font-medium hover:text-violet-500"
      >
        Shop
      </Link>
      <Link
        href="/"
        className="text-black text-lg font-medium hover:text-violet-500"
      >
        Deals
      </Link>
      <Link
        href="/"
        className="text-black text-lg font-medium hover:text-violet-500"
      >
        Whats new
      </Link>
    </>
  );

  return (
    <div className="bg-violet-50 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden text-black"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <a className="">
            <span>
              <Image
                width={150}
                height={60}
                src={"/logo_black.png"}
                alt="logo"
              ></Image>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <div className="menu menu-horizontal px-1 flex gap-8">{Links}</div>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered lg:flex items-center gap-2 rounded-full hidden">
            <CiSearch className="text-black text-2xl" />
            <input
              type="tex t"
              className="grow text-black"
              placeholder="Search"
            />
          </label>
          <CiSearch className="text-black text-3xl lg:hidden" />
          <Link
            href="/#"
            className="relative hover:bg-violet-500 hover:text-white rounded-full text-black bg-transparent p-1"
          >
            <IoBagOutline className="text-3xl" />
            <span className="px-1 rounded-full text-white bg-black absolute top-0 right-1 text-xs">
              5
            </span>
          </Link>
          <Link
            href="/#"
            className="hover:bg-violet-500 hover:text-white rounded-full text-black bg-transparent p-1"
          >
            <CiUser className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
