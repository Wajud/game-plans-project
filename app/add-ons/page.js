"use client";
import React, { useState } from "react";
import { add, remove } from "@/redux/features/addOnsSlice";
import { useDispatch, useSelector } from "react-redux";

const Plans = () => {
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  const dispatch = useDispatch();

  const addOns = useSelector((store) => store.addOnsSliceReducer);

  function handleOnlineService(e) {
    setOnlineService(e.target.checked);
    if (e.target.checked) {
      dispatch(add(e.target.name));
    } else {
      dispatch(remove(e.target.name));
    }
  }

  function handleLargerStorage(e) {
    setLargerStorage(e.target.checked);
    if (e.target.checked) {
      dispatch(add(e.target.name));
    } else {
      dispatch(remove(e.target.name));
    }
  }

  function handleCustomizableProfile(e) {
    setCustomizableProfile(e.target.checked);
    if (e.target.checked) {
      dispatch(add(e.target.name));
    } else {
      dispatch(remove(e.target.name));
    }
  }

  return (
    <div className="max-w-[32rem]">
      <div className="bg-blue-100 h-[66vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white">
        <h1 className="font-bold text-3xl mb-2">Pick add-ons</h1>
        <p className="text-gray-400 font-medium">
          Add-ons help enhance your gaming experience.
        </p>

        {/* Add-ons Section */}

        <form className="mt-6 flex flex-col gap-4">
          {/* Online Service */}
          <label
            htmlFor="online-service"
            className={`cursor-pointer flex gap-4 items-center border border-gray-200 p-2 rounded-md ${
              onlineService
                ? "border-blue-700 bg-blue-50"
                : "border-gray- bg-transparent"
            }`}
          >
            <input
              type="checkbox"
              name="online-service"
              id="online-service"
              onChange={handleOnlineService}
            />
            <div className="flex-1">
              <h2 className="font-semibold -mb-1">Online service</h2>
              <small className="text-xs text-gray-400 leading-tight">
                Access to multiplayer games
              </small>
            </div>
            <p className="text-sm text-blue-500">$1/mo</p>
          </label>
          {/* End of Online Service */}

          {/* Larger Storage */}
          <label
            htmlFor="larger-storage"
            className={`cursor-pointer flex gap-6 items-center border border-gray-200 p-2 rounded-md ${
              largerStorage
                ? "border-blue-700 bg-blue-50"
                : "border-gray- bg-transparent"
            }`}
          >
            <input
              type="checkbox"
              name="larger-storage"
              id="larger-storage"
              onChange={handleLargerStorage}
            />
            <div className="flex-1">
              <h2 className="font-semibold -mb-1">Larger storage</h2>
              <small className="text-xs text-gray-400 leading-tight">
                Extra 1TB of cloud save
              </small>
            </div>
            <p className="text-sm text-blue-500">$2/mo</p>
          </label>

          {/* End of Larger Storage */}

          {/* Customizable Profile */}
          <label
            htmlFor="customizable-profile"
            className={`cursor-pointer flex gap-6 items-center border border-gray-200 p-2 rounded-md ${
              customizableProfile
                ? "border-blue-700 bg-blue-50"
                : "border-gray- bg-transparent"
            }`}
          >
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
              onChange={handleCustomizableProfile}
            />
            <div className="flex-1">
              <h2 className="font-semibold -mb-1">Customizable Profile</h2>
              <small className="text-xs text-gray-400 leading-tight">
                Custom theme on your profile
              </small>
            </div>
            <p className="text-sm text-blue-500">$2/mo</p>
          </label>
          {/* End of Customizable Profile */}
        </form>

        {/* End of Plans Section */}
      </div>
      <div className="flex justify-between items-center px-6 py-3 md:mt-20">
        <p className="text-gray-400 font-semibold">Go Back</p>
        <button className="bg-[#1C65A3] text-white font-medium px-4 py-2 rounded-md tracking-widest">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plans;
