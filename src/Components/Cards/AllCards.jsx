import { Link } from 'react-router-dom';

const AllCards = ({ card }) => {
  const { id, image, button, title } = card || {};

  return (
    <Link to={`/cardDetails/${id}`}>
      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={image} />
          </figure>
          <div className="card-body">
            <div>
              <button
                // style={{ backgroundColor: button.backgroundColor }}
                className="btn justify-start w-28 text-white"
              >
                {/* <span style={{ font: button.text_color }}>Button</span> */}
              </button>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default AllCards;
