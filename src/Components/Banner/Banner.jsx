import img2 from '../../Images/Group.jpg';

const Banner = ({ handleSubmit }) => {
  return (
    <>
      <div className="mt-20 mx-auto md:max-w-full">
        <div className=" shadow-xl relative justify-center mx-auto">
          <div className="relative">
            <figure>
              <img
                className=" lg:w-[1400px] md:w-[768px] md:h-[500px] w-[425px] opacity-20 lg:h-[600px]"
                src={img2}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="absolute lg:mt-[-480px] md:ml-[150px] md:mt-[-480px] -mt-[300px] ml-[30px] lg:ml-[440px]">
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
