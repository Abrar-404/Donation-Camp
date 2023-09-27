const DonationCard = ({ card }) => {
  const { image, title, price, category, allCardColor, id } = card || {};
  return (
    <div>
      <div
        className="flex mt-6 gap-5 items-center rounded-lg"
        style={{ backgroundColor: allCardColor?.card_bg }}
      >
        <div>
          <img className="h-full" src={image} alt="" />
        </div>
        <div className="gap-5 text-start lg:my-5 md:my-2">
          <button
            className="lg:py-1 lg:px-1  py-1 px-1 lg:my-1 md:px-1 rounded-lg text-white"
            style={{ backgroundColor: allCardColor?.button_background }}
          >
            {title}
          </button>
          <p className=" text-sm lg:text-xl md:text-base my-1 font-semibold">
            {category}
          </p>
          <p
            className="   font-semibold"
            style={{ color: allCardColor?.text_color }}
          >
            Price: ${price}
          </p>
          <button
            className=" lg:px-2 lg:py-2 rounded-lg md:px-1 text-sm lg:text-xl md:text-base md:py-1 py-1 px-1 text-white lg:my-1 md:my-1"
            style={{ backgroundColor: allCardColor?.button_background }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
