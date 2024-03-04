function Home() {
  return (
    <>
      <div className="flex max-lg:flex-col-reverse">
        <div className="container pt-12 flex flex-col gap-5 mt-40">
          <h1 className=" font-bold text-4xl uppercase max-lg:text-[3rem] max-lg:leading-tight max-sm:text-[2rem]">
            Simple App that we <span className=" text-orange-400">create</span>
          </h1>
          <p className="max-sm:w-full">
            Lava <span className=" text-blue-600">HTML landing page </span>
            template is provided by
            <span className=" text-blue-600">TemplateMo.</span> You can modify
            and use it for your commercial websites for free of charge. This
            template is last updated on 29 Oct 2019.
          </p>
          <button className="uppercase w-[10rem] p-2 text-sm text-white rounded-3xl bg-orange-400 border-none hover:bg-blue-500 transition-all">
            know us better
          </button>
        </div>
        <div className="home_img">
          <img
            src="./images/banner-bg.png"
            alt=""
            className=" h-[35rem] w-[70rem] max-lg:h-full"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
