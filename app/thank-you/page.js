import Image from "next/image";
import { Inter } from "next/font/google";
import thankYouImage from "@/app/assets/images/icon-thank-you.svg";

const inter = Inter({ subsets: ["latin"] });

const Plans = () => {
  return (
    <div className="w-full md:max-w-[48rem] mx-auto md:px-8 overflow-y-hidden">
      <div className="bg-blue-100 h-[75vh] md:hidden"></div>
      <div className="w-[90%] md:w-full px-4 md:pr-8 py-8 absolute md:static top-24 mt-[6px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 rounded-md bg-white flex flex-col items-center gap-2">
        <Image
          src={thankYouImage}
          alt="thank you image"
          className="mt-8 mb-4"
        />
        <h1 className="font-bold text-3xl mb-2">Thank you!</h1>
        <p className="text-gray-400 font-medium text-center leading-relaxed">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at wajudkareem757@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Plans;
