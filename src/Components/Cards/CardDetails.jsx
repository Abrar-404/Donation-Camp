import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import CardDestination from './CardDestination';

const CardDetails = () => {
  const [card, setCards] = useState([]);

  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  const allCards = useLoaderData();

  useEffect(() => {
    const findCards = allCards?.find(card => card.id === idInt);
    setCards(findCards);
  }, [idInt, allCards]);
  console.log(card);

  return (
    <div>
      <CardDestination card={card}></CardDestination>
    </div>
  );
};

export default CardDetails;
