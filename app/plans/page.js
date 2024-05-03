"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import arcadeImage from "@/app/assets/images/icon-arcade.svg";
import advancedImage from "@/app/assets/images/icon-advanced.svg";
import proImage from "@/app/assets/images/icon-pro.svg";
import Link from "next/link";
import styles from "@/app/globals.css";

import { useSelector, useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const Plans = () => {
  const [yearly, setYearly] = useState(false);
  const [addClass, setAddClass] = useState("");

  console.log("yearly: ", yearly);

  function moveRoller() {
    if (yearly === true) {
      setYearly(false);
      setAddClass("slide-to-left");
    } else {
      setYearly(true);
      setAddClass("slide-to-right");
    }
  }

  return (
    <div className="max-w-[32rem]">
      <div className="bg-blue-100 h-[66vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white">
        <h1 className="font-bold text-3xl mb-2">Select your plan</h1>
        <p className="text-gray-400 font-medium">
          You have the option of monthly or yearly billing.
        </p>

        {/* Plans Section */}
        <section className="flex flex-col md:flex-row gap-4 py-8 pb-2">
          <div className="cursor-pointer md:w-[33%] flex md:flex-col gap-4 py-4 px-4 border border-gray-100 shadow-md rounded-md hover:bg-blue-50 hover:border-blue-800">
            <Image src={arcadeImage} alt="arcade image" />
            <div>
              <p className="font-semibold text-blue-950 -mb-1 md:mt-6">
                Arcade
              </p>
              <small className="text-xs font-semibold text-gray-400">
                ${yearly ? "90" : "9"}/{yearly ? "yr" : "mo"}
              </small>
              {yearly && (
                <small className="block text-blue-950 font-normal">
                  2 months free
                </small>
              )}
            </div>
          </div>

          <div className="cursor-pointer md:w-[33%] flex md:flex-col gap-4 py-4 px-4 border border-gray-100 shadow-md rounded-md  hover:bg-blue-50 hover:border-blue-800">
            <Image src={advancedImage} alt="advanced image" />
            <div>
              <p className="font-semibold text-blue-950 -mb-1 md:mt-6">
                Advanced
              </p>
              <small className="text-xs font-semibold text-gray-400">
                ${yearly ? "120" : "12"}/{yearly ? "yr" : "mo"}
              </small>
              {yearly && (
                <small className="block text-blue-950 font-normal">
                  2 months free
                </small>
              )}
            </div>
          </div>

          <div className="cursor-pointer md:w-[33%] flex md:flex-col gap-4 py-4 px-4 border border-gray-100 shadow-md rounded-md  hover:bg-blue-50 hover:border-blue-800">
            <Image src={proImage} alt="pro image" />
            <div>
              <p className="font-semibold -mb-1 md:mt-6">Pro</p>
              {/* <small className="text-xs font-semibold text-gray-400"> */}
              <small className="text-xs font-semibold text-gray-400">
                ${yearly ? "150" : "15"}/{yearly ? "yr" : "mo"}
              </small>
              {yearly && (
                <small className="block text-blue-950 font-normal">
                  2 months free
                </small>
              )}
            </div>
          </div>
        </section>
        <div
          className={`flex justify-center items-center gap-4 bg-blue-50 py-3 rounded-md mt-4 md:mt-6 ${inter.className}`}
        >
          <p
            className={
              yearly ? "font-semibold text-gray-400" : "font-bold text-blue-950"
            }
          >
            Monthly
          </p>
          <div
            className="cursor-pointer w-[36px] h-[18px] px-1 py-[0.2rem] bg-blue-950 rounded-full relative"
            onClick={moveRoller}
          >
            <p
              className={
                // yearly
                //   ? `w-3 h-3 absolute left-[20px] top-[3px] bg-white rounded-full ${addClass}`
                //   : `duration-1000 w-3 h-3 absolute left-[4px] top-[3px] bg-white rounded-full ${addClass}`

                `w-3 h-3 absolute left-[4px] top-[3px] bg-white rounded-full ${addClass}`
              }
            ></p>
          </div>
          <p
            className={
              yearly ? "font-bold text-blue-950" : "font-semibold text-gray-400"
            }
          >
            Yearly
          </p>
        </div>

        {/* End of Plans Section */}
      </div>
      <div className="flex justify-between items-center px-6 py-3 md:mt-20">
        <Link href="/">
          <p className="text-gray-400 font-semibold">Go Back</p>
        </Link>
        <Link href="/add-ons">
          <button className="bg-[#1C65A3] text-white font-medium px-4 py-2 rounded-md tracking-widest">
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Plans;
