import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full h-[100vh] mt-[40rem] bg-[url('./images/footer-bg.png')] bg-center bg-cover bg-no-repeat max-lg:h-[100%]"
    >
      <div className="flex items-center justify-center gap-8 p-12 mt-16 max-lg:flex-col">
        <form className="flex items-center flex-col gap-6 w-[50%] h-[60vh] bg-white shadow-md p-8 rounded-md max-lg:w-[90%]">
          <div className="flex items-center gap-4 max-md:flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className=" border outline-none p-[1rem] text-sm rounded-md max-lg:w-[32vw] max-md:w-[65vw]"
            />
            <input
              type="text"
              placeholder="E-Mail Address"
              className=" border outline-none p-[1rem] text-sm  rounded-md max-lg:w-[32vw]  max-md:w-[65vw]"
            />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className=" w-full mt-5 outline-none border p-4 text-sm  rounded-md  max-md:w-[65vw]"
          ></textarea>

          <button className="p-4 text-sm bg-orange-500 rounded-3xl text-white uppercase font-semibold hover:bg-blue-500 transition-all">
            send messsage now
          </button>
        </form>

        <div className="max-lg:text-center">
          <h1 className=" font-bold text-3xl text-white max-lg:text-4xl">
            More About <span className=" text-orange-300">Lava</span>
          </h1>
          <p className="text-white text-sm pt-6">
            Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo
            auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta
            metus. Suspendisse blandit pulvinar ligula ut elementum.
          </p>

          <p className="text-white text-sm pt-4">
            If you need this contact form to send email to your inbox, you may
            follow our contact page for more detail.
          </p>

          <div className=" text-white flex items-center gap-4 pt-8 max-lg:pl-[8rem]">
            <FaFacebookF className="hover:text-orange-300" />
            <FaInstagram className="hover:text-orange-300" />
            <FaWifi className="hover:text-orange-300" />
            <TbWorld className="hover:text-orange-300" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-10">
        <div className="w-[80%] h-[0.3px] bg-white mt-12"></div>
        <p className=" text-white text-sm">
          Copyright © 2020 Lava Landing Page | Designed by TemplateMo
        </p>
      </div>
    </footer>
  );
};
