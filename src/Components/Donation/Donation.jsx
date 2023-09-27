import { useState, useEffect } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
  const [donation, setDonationData] = useState([]);

  const [noDataFound, setNoDataFound] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const [donationTotal, setDonationTotal] = useState(0);

  useEffect(() => {
    const AllDonation = JSON.parse(localStorage.getItem('donation'));

    if (AllDonation) {
      setDonationData(AllDonation);

      const totalDonation = AllDonation.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );

      setDonationTotal(totalDonation);
    } else {
      setNoDataFound('No donation yet');
    }
  }, []);

  return (
    <div>
      {noDataFound ? (
        <p className="h-[80vh] flex justify-center items-center">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {showAll
              ? donation?.map(card => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 4)
                  .map(card => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>

          {donation.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-5 mt-10 bg-black text-white btn block ${
                showAll ? 'hidden' : ''
              } mx-auto`}
            >
              {showAll ? ' ' : 'see more'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
