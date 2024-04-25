import Link from "next/link";
import MobileHeader from "@/app/components/MobileHeader";

export default function Home() {
  return (
    <>
      <div className="bg-blue-100 h-[66vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white">
        <h1 className="font-bold text-3xl mb-2">Personal info</h1>
        <p className="text-gray-400 font-medium">
          Please provide your name, email, address, and phone number.
        </p>
        <form>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 mt-4 font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g Stephen King"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 mt-4 font-semibold text-gray-600"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="e.g stephenking@lorem.com"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-1 mt-4 font-semibold text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="e.g +1 234 567 890"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end px-6 py-3 md:mt-20">
        <button className="bg-[#1C65A3] text-white font-semibold px-4 py-2 rounded-md">
          Next Step
        </button>
      </div>
    </>
  );
}
