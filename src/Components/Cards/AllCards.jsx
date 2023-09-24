const AllCards = ({ card }) => {
  const { id, image, button, title } = card || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <button
            className="btn justify-start w-28 text-white"
            style={{ backgroundColor: button.backgroundColor }}
          >
            BTn
          </button>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
