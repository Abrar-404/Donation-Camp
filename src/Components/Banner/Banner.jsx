import img2 from '../../Images/Group.jpg';

const Banner = ({ handleSubmit }) => {
  return (
    <>
      <div>
        <div className=" shadow-xl justify-center mx-auto">
          <div className="relative">
            <figure>
              <img
                className=" lg:w-[1400px] lg:h-[600px]"
                src={img2}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="absolute mt-[-480px] ml-[440px]">
            <div className="flex justify-center mx-auto mt-32">
              <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                I Grow By Helping People In Need
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-center mt-6">
                <input
                  type="text"
                  placeholder="Search here"
                  name="textSearch"
                  className="input input-bordered relative w-full max-w-xs"
                />
                <button
                  type="submit"
                  className="btn absolute mr-[-235px] bg-[#FF444A] text-white"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
