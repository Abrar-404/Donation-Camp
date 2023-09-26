const DonationCard = ({ card }) => {
  const { image, id } = card || {};
  return (
    <div>
      <div className="flex gap-5 items-center">
        <div>
          <img className="" src={image} alt="" />
        </div>
        <div className="gap-5 text-start my-5">
          <button className="btn my-1" style={{}}>Btn</button>
          <p className="text-xl my-1 font-semibold">Title Here {id}</p>
          <p>Price</p>
          <button className="btn px-1 my-1">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
