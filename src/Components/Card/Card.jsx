import { motion } from "framer-motion";

export const Card = () => {
  const transition = { duration: 1, type: "spring " };

  return (
    <>
      <section className="container">
        <div className="mt-20 flex items-center justify-between max-xl:flex-wrap">
          <motion.div
            initial={{ opacity: 0, translateX: 0 }}
            whileInView={{ opacity: 1, translateX: "-20px" }}
            transition={transition}
            viewport={{once:true}}

            className="w-[18rem] h-[26rem] bg-white shadow-md rounded-1xl shadow-slate-300 max-md:w-full max-md:relative max-md:left-6"
          >
            <h1 className=" font-bold text-8xl text-red-100 p-3">01</h1>

            <div className="flex items-center flex-col gap-6 ">
              <img src="./images/features-icon-1.png" alt="" className="w-20" />
              <h2 className="font-semibold">Trend Analysis</h2>
              <p className="text-center text-sm text-[0.8rem] w-[13rem]">
                Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam,
                nec consectetur diam.
              </p>
              <button className=" bg-orange-500 text-white uppercase text-sm w-[8rem] h-10 rounded-3xl border-none hover:bg-blue-500 transition-all">
                read more
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 0 }}
            whileInView={{ opacity: 1, translateY: "-7px" }}
            transition={transition}
            viewport={{once:true}}

            className="w-[18rem] h-[26rem] bg-white shadow-md rounded-1xl shadow-slate-300  max-md:w-full max-md:relative max-md:left-1"
          >
            <h1 className=" font-bold text-8xl text-red-100 p-3">02</h1>

            <div className="flex items-center flex-col gap-6">
              <img src="./images/features-icon-2.png" alt="" className="w-20" />
              <h2 className="font-semibold">Site Optimization</h2>
              <p className=" text-center text-sm text-[0.8rem] w-[13rem]">
                Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam,
                nec consectetur diam.
              </p>
              <button className=" bg-orange-500 text-white uppercase text-sm w-[8rem] h-10 rounded-3xl border-none hover:bg-blue-500 transition-all">
                read more
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 0 }}
            whileInView={{ opacity: 1, translateX: "20px" }}
            transition={transition}
            viewport={{once:true}}

            className="w-[18rem] h-[26rem] bg-white shadow-md rounded-1xl shadow-slate-300  max-md:w-full max-md:relative max-md:right-4"
          >
            <h1 className=" font-bold text-8xl text-red-100 p-3">03</h1>

            <div className="flex items-center flex-col gap-6">
              <img src="./images/features-icon-3.png" alt="" className="w-20" />
              <h2 className="font-semibold">Email Design</h2>
              <p className=" text-center text-sm text-[0.8rem] w-[13rem]">
                Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam,
                nec consectetur diam.
              </p>
              <button className=" bg-orange-500 text-white uppercase text-sm w-[8rem] h-10 rounded-3xl border-none hover:bg-blue-500 transition-all">
                read more
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
