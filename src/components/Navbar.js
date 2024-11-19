"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseconfig";
import "../app/globals.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    if (!isLoading) {
      router.push("/authenticate");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  const handleHomeClick = () => {
    if (!isLoading) {
      router.push("/");
    }
  };

  const handleSectionScroll = (sectionId) => {
    const isHomePage = router.pathname === "/";

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
      }, 500);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full px-8 sticky top-0 z-50 text-[#1E2D3D] bg-[#FFFFFF] bg-opacity-50 backdrop-blur-md">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row w-full justify-between md:w-auto">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <a
              href="#_"
              onClick={handleHomeClick}
              className="flex items-center font-medium text-[#1E2D3D] cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/domzgxu5n/image/upload/v1731336066/unqw15uxvaudyeopgasq.png"
                alt="OCD Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* Mobile Login/Logout Button */}
            <div className="md:hidden flex items-center">
              {user ? (
                <a
                  onClick={handleLogout}
                  className="mr-2 text-sm font-medium leading-6 text-[#FFFFFF] bg-[#ff4b2b] hover:bg-[#FF416C] px-4 py-1.5 rounded-lg transition duration-150 ease-in-out cursor-pointer"
                >
                  Log Out
                </a>
              ) : (
                <a
                  onClick={handleLogin}
                  className="mr-2 text-sm font-medium leading-6 text-[#FFFFFF] bg-[#ff4b2b] hover:bg-[#FF416C] px-4 py-1.5 rounded-lg transition duration-150 ease-in-out cursor-pointer"
                >
                  Log In
                </a>
              )}

              {/* Hamburger Menu Button */}
              <button
                className="p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - without login button */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col w-full mt-4 space-y-4`}
          >
            <a
              onClick={handleHomeClick}
              className="font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleSectionScroll("about")}
              className="font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleSectionScroll("faqs")}
              className="font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              FaQs
            </a>
            <a
              onClick={() => router.push("/resources")}
              className="font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col md:flex-row items-center md:space-x-8">
          <nav className="flex flex-wrap items-center mb-5 text-base md:text-right md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-[#F2F4F7]">
            <a
              onClick={handleHomeClick}
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleSectionScroll("about")}
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleSectionScroll("faqs")}
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              FaQs
            </a>
            <a
              onClick={() => router.push("/resources")}
              className="mr-5 font-medium leading-6 text-[#1E2D3D] hover:text-[#ff4b2b] cursor-pointer"
            >
              Resources
            </a>
          </nav>
        </div>

        {/* Desktop Login/Logout Button */}
        <div className="hidden md:inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {user ? (
            <a
              onClick={handleLogout}
              className="text-base font-medium leading-6 text-[#FFFFFF] bg-[#ff4b2b] hover:bg-[#FF416C] px-5 py-2 rounded-lg transition duration-150 ease-in-out cursor-pointer"
            >
              Log Out
            </a>
          ) : (
            <a
              onClick={handleLogin}
              className="text-base font-medium leading-6 text-[#FFFFFF] bg-[#ff4b2b] hover:bg-[#FF416C] px-5 py-2 rounded-lg transition duration-150 ease-in-out cursor-pointer"
            >
              Log In
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;