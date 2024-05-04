"use client";
import { useSelector } from "react-redux";
import { plansPrices } from "../plans/page";
import { addOnsPrices } from "../add-ons/page";

import Link from "next/link";

const SummaryPage = ({ setShowThanks }) => {
  const activePlan = useSelector((store) => store.planSliceReducer);
  const activeAddOns = useSelector((store) => store.addOnsSliceReducer);

  function turnPlantoPropercase(plan) {
    if (plan === "arcade") {
      return "Arcade";
    } else if (plan === "advanced") {
      return "Advanced";
    } else {
      return "Pro";
    }
  }

  function turnBasistoPropercase(basis) {
    if (basis === "monthly") {
      return "Monthly";
    } else {
      return "Yearly";
    }
  }

  function turnAddOntoPropercase(addOn) {
    if (addOn === "online-service") {
      return "Online Service";
    } else if (addOn === "larger-storage") {
      return "Larger Storage";
    } else {
      return "Customizable Profile";
    }
  }

  function turnAddOnToCamelCase(addOn) {
    if (addOn === "online-service") {
      return "onlineService";
    } else if (addOn === "larger-storage") {
      return "largerStorage";
    } else {
      return "customizableProfile";
    }
  }

  const setPlanPrice = (plan, basis) => {
    return plansPrices[plan][basis + "Rate"];
  };

  const chosenPlanPrice = activePlan.plan
    ? setPlanPrice(activePlan.plan, activePlan.basis)
    : "9";

  function getTotalAddOnsPrice(addons, basis) {
    let TotalAddOnsPrice = 0;
    addons.forEach((addOn) => {
      let addOnPrice = 0;
      if (basis === "monthly") {
        addOnPrice = addOn.monthlyRate;
      } else {
        addOnPrice = addOn.yearlyrate;
      }

      TotalAddOnsPrice += addOnPrice;
    });
    return TotalAddOnsPrice;
  }

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
              <h2 className="font-semibold -mb-1">{`${
                activePlan.plan
                  ? turnPlantoPropercase(activePlan.plan)
                  : "Arcade"
              } (${
                activePlan.basis
                  ? turnBasistoPropercase(activePlan.basis)
                  : "Monthly"
              })`}</h2>
              <Link href="/plans">
                <small className="text-gray-400 hover:underline">Change</small>
              </Link>
            </div>
            <p className="font-semibold">{`$${chosenPlanPrice}/${
              activePlan.basis === "yearly" ? "yr" : "mo"
            }`}</p>
          </div>
          {activeAddOns.length > 0 ? (
            <div className="mt-4 pt-4 border-t border-gray-300 flex flex-col gap-4">
              {activeAddOns.map((addon, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <p className="text-gray-400 -mb-1">
                    {turnAddOntoPropercase(addon.title)}
                  </p>
                  <small>{`+${
                    activePlan.basis === "monthly"
                      ? addOnsPrices[turnAddOnToCamelCase(addon.title)]
                          .monthlyRate
                      : addOnsPrices[turnAddOnToCamelCase(addon.title)]
                          .yearlyRate
                  }/${activePlan.basis === "monthly" ? "mo" : "yr"}`}</small>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        {activeAddOns.length == 0 ? (
          <div className="flex justify-between items-center mt-4 px-4">
            <p className="text-gray-400 text-sm">{`Total (per ${
              activeAddOns.basis === "yearly" ? "year" : "month"
            })`}</p>

            <p className="text-[#3244ac] font-semibold text-lg">{`$${chosenPlanPrice}/${
              activePlan.basis === "yearly" ? "yr" : "mo"
            }`}</p>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-4 px-4">
            <p className="text-gray-400 text-sm">{`Total (per ${
              activePlan.basis === "yearly" ? "year" : "month"
            })`}</p>

            <p className="text-[#3244ac] font-semibold text-lg">{`${
              chosenPlanPrice +
              getTotalAddOnsPrice(activeAddOns, activePlan.basis)
            }/${activePlan.basis === "yearly" ? "yr" : "mo"}`}</p>
          </div>
        )}

        {/* End of Summary Section */}
      </div>
      <div className="bg-white flex justify-between items-center px-6 py-3 md:mt-20">
        <Link href="/add-ons">
          <p className="text-gray-400 font-semibold">Go Back</p>
        </Link>
        <button
          className="bg-[#3244ac] text-white font-medium px-4 py-2 rounded-md tracking-widest"
          onClick={() => setShowThanks(false)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
