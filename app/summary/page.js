"use client";
import React, { useState } from "react";

import { Inter } from "next/font/google";
import SummaryPage from "@/app/components/SummaryPage";
import Thankyou from "@/app/components/Thankyou";

import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  const [showThanks, setShowThanks] = useState(true);

  const addOns = useSelector((store) => store.addOnsSliceReducer);
  console.log("add on: ", addOns);
  return (
    <div>
      {showThanks ? (
        <SummaryPage setShowThanks={setShowThanks} />
      ) : (
        <Thankyou />
      )}
    </div>
  );
};

export default page;
