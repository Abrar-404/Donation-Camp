const CardDestination = ({ card }) => {
  const { image, description, price, title } = card || {};

  return (
    <>
      <div className="items-center text-center mx-auto">
        <div className="items-center flex justify-center mt-10">
          <div className="relative">
            <img
              className="w-[300px] md:w-[600px] lg:w-[800px]"
              src={image}
              alt=""
            />
            <div className="absolute items-center mx-auto overflow-y-hidden justify-start flex py-5 backdrop-brightness-50 w-full mt-[-92px]">
              <button className="btn ml-6 mt-[5px]">Donate {price}</button>
            </div>
          </div>
        </div>
        {/* <p style={{ title: title.text }}>{title}</p> */}
        <div className="items-center flex justify-center">
          <p className="mt-5 font-medium max-w-[855px]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardDestination;
