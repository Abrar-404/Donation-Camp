// import { useEffect, useState } from 'react';
// import CardDetails from '../Cards/CardDetails';

const Donation = () => {
  // const [donationDetails, setDonationDetails] = useState([]);
  // const [empty, setEmpty] = useState(false);

  // useEffect(() => {
  //   const cardDetailsHere = JSON.parse(
  //     localStorage.getItem('details of cards')
  //   );
  //   if (cardDetailsHere) {
  //     setDonationDetails(cardDetailsHere);
  //   } else {
  //     setEmpty('No donation yet');
  //   }
  // }, []);

  // console.log(donationDetails);

  return (
    <div>
      {/* {empty ? (
        <p>{empty}</p>
      ) : (
        <div>
          {donationDetails?.map(card => (
            <CardDetails key={card.id} card={card}></CardDetails>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Donation;
