import { Link } from 'react-router-dom';

const AllCards = ({ card }) => {
  const { id, image, title, allCardColor, category } = card || {};

  return (
    <Link to={`/cardDetails/${id}`}>
      <div className="">
        <div className="card card-compact shadow-xl">
          <figure>
            <img src={image} />
          </figure>
          <div
            className="card-body"
            style={{ backgroundColor: allCardColor.card_bg }}
          >
            <div>
              <button className="px-2 rounded bg-white justify-start text-white">
                <span
                  className="font-semibold"
                  style={{ color: allCardColor.text_color }}
                >
                  {title}
                </span>
              </button>
            </div>
            <p
              className="text-primary font-semibold"
              style={{ color: allCardColor.text_color }}
            >
              {category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default AllCards;
