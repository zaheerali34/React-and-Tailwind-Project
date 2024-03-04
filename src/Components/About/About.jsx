import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  const transition = { duration: 1.3, type: "spring " };

  return (
    <section className="about flex items-center justify-between max-lg:flex-col">
      <div className="w-[40%] h-[100vh] bg-[url('./images/left-bg-decor.png')] bg-cover bg-center bg-no-repeat mt-32 max-lg:mr-[40rem] max-lg:w-[700px]">
        <motion.img
          initial={{ opacity: 0, translateX: "0" }}
          whileInView={{ opacity: 1, translateX: "40px" }}
          viewport={{ once: true }}
          transition={transition}
          src="./images/left-image.png"
          alt=""
          className=" w-[20rem] relative top-[10rem] left-[6rem] max-lg:left-[400px] max-lg:top-[18rem] max-lg:w-[25rem]"
        />
      </div>

      <div className="flex items-center flex-col mt-44 gap-8">
        <motion.div
          initial={{ opacity: 0, translateX: "0", transitionDuration: "1s"}}
          whileInView={{ opacity: 1, translateX: "-40px", }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-4 ml-12 max-sm:pl-4"
        >
          <img src="./images/about-icon-01.png" alt="" className=" w-[5rem] max-lg:w-[7rem] max-sm:w-[5rem]" />
          <div className="flex items-start flex-col gap-2">
            <h2 className=" font-semibold text-sm max-lg:text-[1rem] max-sm:text-[0.8rem]">
              Vestibulum pulvinar rhoncus
            </h2>
            <p className="w-[20rem] text-[0.7rem] max-lg:text-[0.8rem] max-sm:text-[0.7rem] max-sm:w-[100%]">
              Please do not redistribute this template ZIP file for a download
              purpose. You may <span className=" text-blue-500">contact</span>{" "}
              us for additional licensing of our template or to get a PSD file.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: "0", transitionDuration: "1s"}}
          whileInView={{ opacity: 1, translateX: "-40px", }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-4 ml-12 max-sm:pl-4"
        >
          <img src="./images/about-icon-01.png" alt="" className=" w-[5rem] max-lg:w-[7rem] max-sm:w-[5rem]" />
          <div className="flex items-start flex-col gap-2">
            <h2 className=" font-semibold text-sm max-lg:text-[1rem] max-sm:text-[0.8rem]">
              Vestibulum pulvinar rhoncus
            </h2>
            <p className="w-[20rem] text-[0.7rem] max-lg:text-[0.8rem] max-sm:text-[0.7rem]  max-sm:w-[100%]">
              Please do not redistribute this template ZIP file for a download
              purpose. You may <span className=" text-blue-500">contact</span>{" "}
              us for additional licensing of our template or to get a PSD file.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: "0", transitionDuration: "1s"}}
          whileInView={{ opacity: 1, translateX: "-40px", }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-4 ml-12 max-sm:pl-4"
        >
          <img src="./images/about-icon-01.png" alt="" className=" w-[5rem] max-lg:w-[7rem] max-sm:w-[5rem]" />
          <div className="flex items-start flex-col gap-2">
            <h2 className=" font-semibold text-sm max-lg:text-[1rem] max-sm:text-[0.8rem]">
              Vestibulum pulvinar rhoncus
            </h2>
            <p className="w-[20rem] text-[0.7rem] max-lg:text-[0.8rem] max-sm:text-[0.7rem]  max-sm:w-[100%]">
              Please do not redistribute this template ZIP file for a download
              purpose. You may <span className=" text-blue-500">contact</span>{" "}
              us for additional licensing of our template or to get a PSD file.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
