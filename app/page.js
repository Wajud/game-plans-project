"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "@/redux/features/userSlice";

export default function Home() {
  const user = useSelector((store) => store.userSliceReducer);

  const [userName, setUserName] = useState(user?.name ? user.name : "");
  const [userEmail, setUserEmail] = useState(user?.email ? user.email : "");
  const [userPhone, setUserPhone] = useState(user?.phone ? user.phone : "");

  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const router = useRouter();

  function createUser(name, email, phone) {
    const user = { name, email, phone };
    return user;
  }

  const dispatch = useDispatch();

  function handleHomeNav() {
    if (!userName) {
      setUserNameError(true);
      setTimeout(() => setUserNameError(false), 3000);
      return;
    }

    if (!userEmail) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 3000);
      return;
    }

    if (!userPhone) {
      setPhoneError(true);
      setTimeout(() => setPhoneError(false), 3000);
      return;
    }

    const user = createUser(userName, userEmail, userPhone);

    dispatch(signIn(user));

    router.push("/plans");
  }

  return (
    <div className="max-w-[32rem]">
      <div className="bg-blue-100 h-[66vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white">
        <h1 className="font-bold text-3xl mb-2">Personal info</h1>
        <p className="text-gray-400 font-medium">
          Please provide your name, email, address, and phone number.
        </p>
        <form>
          <div>
            <div className="mt-4 mb-1 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-semibold text-gray-600"
              >
                Name
              </label>
              {userNameError && (
                <p className="text-red-400">This field must be filled</p>
              )}
            </div>
            <input
              type="text"
              id="name"
              placeholder="e.g Stephen King"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <div className="flex mt-4 mb-1 justify-between items-center">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-600"
              >
                Email Address
              </label>
              {emailError && (
                <p className="text-red-400">This filled must be filled</p>
              )}
            </div>
            <input
              type="text"
              id="email"
              placeholder="e.g stephenking@lorem.com"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="mt-4 mb-1 flex justify-between items-center">
              <label
                htmlFor="phoneNumber"
                className="block font-semibold text-gray-600"
              >
                Phone Number
              </label>
              {phoneError && (
                <p className="text-red-400">This field must be filled</p>
              )}
            </div>
            <input
              type="text"
              id="phoneNumber"
              placeholder="e.g +1 234 567 890"
              className="py-2 px-2 text-gray-400 block border border-gray-200 w-full rounded-md"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end px-6 py-3 md:mt-20">
        <button
          className="bg-[#1C65A3] text-white px-4 py-2 rounded-md tracking-widest font-medium"
          onClick={handleHomeNav}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
