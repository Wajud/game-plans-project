"use client";
import React, { useState } from "react";
import SummaryPage from "@/app/components/SummaryPage";
import Thankyou from "@/app/components/Thankyou";

const page = () => {
  const [showThanks, setShowThanks] = useState(false);

  return (
    <div>
      {showThanks ? (
        <Thankyou />
      ) : (
        <SummaryPage setShowThanks={setShowThanks} />
      )}
    </div>
  );
};

export default page;
