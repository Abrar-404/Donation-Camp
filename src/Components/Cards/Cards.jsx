import AllCards from './AllCards';

const Cards = ({ cards, filteredItems }) => {
  console.log(cards);
  return (
    <div className="grid Md:grid-cols-3 gap-5 mx-auto mt-40 py-10 lg:grid-cols-4">
      {cards?.map(card => (
        <AllCards key={card.id} card={card}></AllCards>
      ))}
    </div>
  );
};

export default Cards;
