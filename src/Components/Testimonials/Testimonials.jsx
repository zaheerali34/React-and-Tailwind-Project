import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const Testimonials = () => {
  return (
    <>
      <div className="flex items-center">
        <div className=" absolute right-0 pt-[40rem]">
          <img src="./images/right-bg-decor.png" alt="" />
        </div>

        <div className="container text-center flex flex-col items-center gap-4 z-50 relative top-[18rem]">
          <h1 className=" font-bold text-3xl">
            What They Think <span className=" text-orange-400">About Us</span>
          </h1>
          <p className="text-ms w-[80%]">
            Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod
            purus non, convallis odio. Donec vitae magna ornare, pellentesque ex
            vitae, aliquet urna
          </p>

          <div className="flex items-center gap-14">
            <div className="flex items-center gap-4 flex-col mt-20">
              <button className="w-[5rem] h-[4rem] text-white rounded-md bg-orange-600 flex items-center justify-center text-[1.5rem]"><AiOutlineLeft className=" " /></button>
              <button className="w-[5rem] h-[4rem] text-white rounded-md bg-orange-600  flex items-center justify-center text-[1.5rem]"><AiOutlineRight /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
