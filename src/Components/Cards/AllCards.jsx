import { Link } from 'react-router-dom';

const AllCards = ({ card }) => {
  const { id, image, button, title, backgroundColor } = card || {};

  return (
    <Link to={`/cardDetails/${id}`}>
      <div className="">
        <div className="card card-compact shadow-xl">
          <figure>
            <img src={image} />
          </figure>
          <div
            className="card-body"
            style={{ backgroundColor: backgroundColor }}
          >
            <div>
              <button
                style={{ backgroundColor: button.backgroundColor }}
                className="btn justify-start w-28 text-white"
              >
                <span style={{ font: button.text_color }}>Button</span>
              </button>
            </div>
            <p className="text-primary" style={{ color: button.text_color }}>
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default AllCards;
