import swal from 'sweetalert';

const CardDestination = ({ card }) => {
  const { id, image, title, price, description, allCardColor } = card || {};

  const addTheDonationItems = () => {
    const addedCardsArray = [];

    const CardItems = JSON.parse(localStorage.getItem('donation'));

    if (!CardItems) {
      addedCardsArray.push(card);
      localStorage.setItem('donation', JSON.stringify(addedCardsArray));
      swal('Good job!', 'Products added successfully!', 'success');
    } else {
      const isExists = CardItems.find(card => card.id === id);
      if (!isExists) {
        addedCardsArray.push(...CardItems, card);
        localStorage.setItem('donation', JSON.stringify(addedCardsArray));
        swal('Congratulations!', 'Donation Added!', 'success');
      } else {
        swal('error!', 'no duplicate', 'error');
      }
    }
  };

  return (
    <>
      <div className="items-center flex justify-center mt-10">
        <div className="relative">
          <img
            className="w-full mx-auto md:w-[600px] lg:w-[800px]"
            src={image}
            alt=""
          />
          <div
            onClick={addTheDonationItems}
            className="absolute items-center mx-auto overflow-y-hidden justify-start flex py-5 backdrop-brightness-50 w-full mt-[-92px]"
          >
            <button
              style={{
                backgroundColor: allCardColor?.button_background,
              }}
              className="btn text-white border-none ml-6 mt-[5px]"
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
      <div className="text-start items-center">
        <p className="lg:ml-[20%] md:ml-[7%] ml-[5%] mt-5 font-semibold text-2xl">
          {title}
        </p>
        <p className="lg:ml-[20%] md:ml-[7%] ml-[5%] mt-5 font-normal text-xl">
          {description}
        </p>
      </div>
    </>
  );
};

export default CardDestination;
