const DonationCard = ({ card }) => {
  const { image, id, price, title, category, allCardColor } = card || {};
  return (
    <div>
      <div
        style={{ backgroundColor: allCardColor?.card_bg }}
        className="flex gap-5 rounded-lg items-center"
      >
        <div>
          <img className="h-full" src={image} alt="" />
        </div>
        <div className="gap-5 text-start my-5">
          <button
            className="btn text-white font-bold my-1"
            style={{ backgroundColor: allCardColor?.button_background }}
          >
            {title}
          </button>
          <p className="text-xl my-1 font-semibold">{category}</p>
          <p
            style={{ color: allCardColor?.button_background }}
            className="font-semibold"
          >
            Price: ${price}
          </p>
          <button
            style={{ backgroundColor: allCardColor?.button_background }}
            className="btn text-white px-1 my-1"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
