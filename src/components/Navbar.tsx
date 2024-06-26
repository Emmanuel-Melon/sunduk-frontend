import Link from "next/link";
import { RiCoinsLine, RiBankLine, RiBriefcase2Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <li>
              <Link href="/sunduk"><RiCoinsLine />Sunduk</Link>
            </li>
            <li>
            <Link href="/loans">Loans</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">Sunduk</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">
        <li>
          <Link href="/account"><RiBriefcase2Line /> Account</Link>
          </li>
          <li>
          <Link href="/loans"><RiCoinsLine /> Loans</Link>
          </li>
          <li>
          <Link href="/sunduk"><RiBankLine /> Sunduk</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href="profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li><Link href="settings">Settings</Link></li>
        <li><Link href="auth/login">Logout</Link></li>
      </ul>
    </div>
      </div>
    </div>
  );
};
