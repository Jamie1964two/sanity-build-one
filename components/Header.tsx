import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between m-5 font-bold text-gray-600 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className="border-solid border-2 border-rose-600 p-1 cursor-pointer">
            <div className="bg-rose-600 p-2 text-center">
              <p className="text-white text-2xl leading-none font-light">
                RIVER WALK
              </p>
            </div>
          </div>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          {/* [&>*]:m-4 [&>*]:mt-2" */}
          <Link href="">
            <a>About</a>
          </Link>
          <Link href="">
            <a>Contact</a>
          </Link>
          <Link href="">
            <a className="text-white bg-rose-600 p-2 px-4 rounded-full">
              Follow
            </a>
          </Link>
        </div>
      </div>

      <div className="text-rose-600 space-x-5 flex items-center">
        <Link href="">
          <a>Sign In</a>
        </Link>
        <Link href="">
          <a className="border-solid border-2 p-2 px-4 rounded-full">
            Register
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
