import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';

const Home = () => {
  const cards = useLoaderData();

  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(cards);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.textSearch.value;
    setSearchText(form);
  };

  useEffect(() => {
    const filtered = cards.filter(item =>
      item?.title?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [cards, searchText]);

  return (
    <div>
      <Banner handleSubmit={handleSubmit}></Banner>
      <Cards cards={filteredItems}></Cards>
    </div>
  );
};

export default Home;
