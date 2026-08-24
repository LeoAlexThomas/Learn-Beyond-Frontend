import { useEffect, useState } from "react";
import { getToken } from "../utils/commonfn";
import { PrimaryButton } from "./Buttons";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="bg-primary w-full">
      <div className="flex items-center justify-between p-4 gap-4 max-w-300 mx-auto">
        <div className=" flex items-center gap-2">
          <img
            src="/images/Logo.png"
            alt="LOGO"
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
          />
          <p className="text-base sm:text-xl font-Title font-bold text-white">
            LEARN BEYOND
          </p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-4 text-white">
            <li className="hover:font-bold hover:underline hover:cursor-pointer">
              Find Tutors
            </li>
            <li className="hover:font-bold hover:underline hover:cursor-pointer">
              Subjects
            </li>
            <li className="hover:font-bold hover:underline hover:cursor-pointer">
              How it works
            </li>
            {!isLoggedIn && (
              <li className="hover:font-bold hover:underline hover:cursor-pointer">
                Login
              </li>
            )}
            <li className="hover:font-bold hover:underline hover:cursor-pointer">
              GET STARTED
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
