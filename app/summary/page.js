"use client";
import React, { useState } from "react";

import { Inter } from "next/font/google";
import SummaryPage from "@/app/components/SummaryPage";
import Thankyou from "@/app/components/Thankyou";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  const [showThanks, setShowThanks] = useState(true);
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
