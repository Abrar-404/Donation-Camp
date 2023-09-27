const DonationCard = ({ card }) => {
  const { image, title, price, category, allCardColor, id } = card || {};
  return (
    <div>
      <div
        className="flex gap-5 items-center rounded-lg"
        style={{ backgroundColor: allCardColor?.card_bg }}
      >
        <div>
          <img className="" src={image} alt="" />
        </div>
        <div className="gap-5 text-start my-5">
          <button
            className="py-1 px-1 my-1 rounded-lg text-white"
            style={{ backgroundColor: allCardColor?.button_background }}
          >
            {title}
          </button>
          <p className="text-xl my-1 font-semibold">{category}</p>
          <p
            className="text-xl font-semibold"
            style={{ color: allCardColor?.text_color }}
          >
            Price: ${price}
          </p>
          <button
            className="btn px-1 my-1"
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
