import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <>
     
      <header className="flex items-center justify-evenly cursor-pointer bg-white w-full h-16
      p-4 shadow-md] max-xl:justify-between max-lg:p-[2rem] fixed top-0 left-0 right-0 z-[99]">
        <div className="uppercase font-bold">
          <h3 className="tracking-[.25em]">YOUR LOGO</h3>
        </div>

        <nav className="max-lg:hidden ">
          <ul className="flex items-center gap-4 uppercase text-xs">
            <li className="hover:text-orange-400 transition">home</li>
            <li className="hover:text-orange-400 transition"><a href="About">About</a></li>
            <li className="hover:text-orange-400 transition">testimonials</li>
            <li className="hover:text-orange-400 transition ">
              drop down <GoChevronDown className=" inline" />
              <motion.div
                initial={{opacity: 0, translateY: "-1px"}}
                whileInView={{opacity: 1, translateY: "5px"}}

                className="drop_bar absolute w-[15%] h-[9rem] pt-2 pl-0 uppercase bg-white shadow-md p-7 "
              >
                <li  className="hover:border-l-4 border-l-orange-400 mt-4  pl-2 transition-all">
                  about us
                </li>
                <li className="hover:border-l-4 border-l-orange-400 mt-4  pl-2 transition-all">
                  features
                </li>
                <li className="hover:border-l-4 border-l-orange-400 mt-4  pl-2 transition-all">
                  aq's
                </li>
                <li className="hover:border-l-4 border-l-orange-400 mt-4  pl-2 transition-all">
                  blog
                </li>
              </motion.div>
            </li>
            <li className="hover:text-orange-400 transition">contact us</li>
          </ul>
        </nav>

        <AiOutlineMenu className=" text-orange-500 hidden	max-lg:block"/>
      </header>
    </>
  );
}
export default Header;
