import banner from "../assets/banner-stack.png"
const Banner = () => {
  return (
    <div className=" container mx-auto md:flex  text-center md:text-left  md:items-center mt-20">
      <div className="container grid gap-5  justify-center md:justify-start">

        <h1 className=" text-[#0F172A] font-bold text-4xl">Build Your Ideal <br /> <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>

        <div className="">
          <p className="text-[#475569] flex gap-1">Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your<br />
            next project.</p>
        </div>

        <div className="flex gap-3 justify-center md:justify-start">
          <button className="cursor-pointer bg-linear-to-r from-orange-500  to-pink-500 text-white px-2 py-2 rounded-md">Explore Technologies</button>
          <button className="border cursor-pointer hover:bg-gray-100 text-[#475569] border-gray-200 rounded-md px-9 py-2.5">Learn More</button>
        </div>
      </div>
      
      <div className="flex  container justify-center  md:justify-end">
        <img className="bg-center bg-cover w-fit h-85" src={banner} alt="banner" />
      </div>

    </div>
  );
};

export default Banner;