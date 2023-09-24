const Banner = () => {
  return (
    <>
      <div className="justify-center mx-auto">
        <div className="flex justify-center mx-auto mt-32">
          <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">
            I Grow By Helping People In Need
          </h1>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered relative w-full max-w-xs"
          />
          <button className="btn absolute mr-[-235px] bg-[#FF444A] text-white">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
