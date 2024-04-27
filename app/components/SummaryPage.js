"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Plans = ({ setShowThanks }) => {
  return (
    <div className={`max-w-[32rem]`}>
      <div className="bg-blue-100 h-[66vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white">
        <h1 className="font-bold text-3xl mb-2">Finishing up</h1>
        <p className="text-gray-400 font-medium">
          Double-check everything look OK before confirming.
        </p>

        {/* Summary  Section */}

        <div className="mt-8 bg-blue-50 p-4 rounded-md">
          <div className="flex items-center">
            <div className=" flex-1">
              <h2 className="font-semibold -mb-1">Arcade (Monthly)</h2>
              <small className="text-gray-400">Change</small>
            </div>
            <p className="font-semibold">$9/mo</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 -mb-1">Online service</p>
              <small>+$1/mo</small>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-400 -mb-1">Larger storage</p>
              <small>+$2/mo</small>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 mt-6">
          <h2 className="text-gray-300 ">Total (per month)</h2>
          <p className="text-blue-500 font-semibold">$12/mo</p>
        </div>

        {/* End of Summary Section */}
      </div>
      <div className="bg-white flex justify-between items-center px-6 py-3 md:mt-20">
        <p className="text-gray-400 font-semibold">Go Back</p>
        <button
          className="bg-blue-400 text-white font-medium px-4 py-2 rounded-md tracking-widest"
          onClick={() => setShowThanks(false)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Plans;
