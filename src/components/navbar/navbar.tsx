"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className=" fixed z-50 w-full  top-0 flex flex-col justify-center items-center">
      <div className="md:max-w-3xl w-full lg:max-w-5xl sm:max-w-xl max-w-xs  px-2  lg:px-7 bg-[#434343]  mt-3 bg-opacity-80 rounded-full ">
        <div className="relative flex flex-wrap items-center justify-between py-3 md:py-4 ">
          <div className="w-full px-6 flex justify-between lg:w-max ">
            <Link
              href={"/"}
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <span
                className="lg:text-4xl text-xl font-bold  cursor-pointer"
                style={{ textShadow: "5px 2px rgb(249 115 22)" }}
              >
                A K S
              </span>
            </Link>
            <div className="-mr-2 lg:hidden text-white flex justify-center items-center">
              <button
                aria-label="humburger"
                id="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <GiHamburgerMenu size={25} />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex w-full flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
            <div className=" text-gray-600 lg:pr-4">
              <ul className="flex justify-center items-center space-y-4  font-medium text-sm md:flex md:space-y-0 text-orange-500 ">
                <li>
                  <a className="block md:px-4 transition  cursor-pointer hover:text-orange-700">
                    <span>What I Know</span>
                  </a>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </li>
                <Link
                  href={"https://blog.ashwanikumarsingh.in/"}
                  target="_blank"
                  className="block md:px-4 transition  cursor-pointer hover:text-orange-700"
                >
                  <span>Blogs</span>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              </ul>
            </div>
            <div className="flex space-x-4 w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l pl-7">
              <Link
                href={"/"}
                className="hover:text-yellow-700 dark:hover:text-yellow-500"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href={"https://www.instagram.com/ashwani_a.k.s"}
                className="hover:text-yellow-700 dark:hover:text-yellow-500"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="lg:hidden  md:max-w-3xl w-full lg:max-w-5xl sm:max-w-xl max-w-xs  px-2  lg:px-7 bg-[#3B3738]  mt-3 rounded-xl   md:rounded-full text-white"
          initial="closed"
          animate="open"
          variants={menuVariants}
        >
          <div className="relative flex  items-center justify-between py-3 gap-6 md:gap-0">
            <div className="w-full flex  justify-end items-center space-y-6 p-2  lg:rounded-full  md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="w-full flex flex-col md:flex-row md:p-2 justify-center items-center">
                <ul className="flex flex-col space-y-2 md:flex-row md:flex-wrap  justify-center items-center ">
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Events</span>
                    </a>
                  </li>
                  <Link
                    href={"/menu"}
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                  >
                    <span>Menu</span>
                  </Link>
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Awards</span>
                    </a>
                  </li>
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Ambiance</span>
                    </a>
                  </li>
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Chef</span>
                    </a>
                  </li>
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Sustainability</span>
                    </a>
                  </li>
                  <li>
                    <a className="block md:px-4 transition hover:text-yellow-700 cursor-pointer">
                      <span>Review</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
