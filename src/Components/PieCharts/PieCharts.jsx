import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const PieChartt = () => {
  const [totalDonation, setTotalDonation] = useState([]);
  const [myDonation, setMyDonation] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setTotalDonation(data));
  }, []);

  useEffect(() => {
    const donationAmount = JSON.parse(localStorage.getItem('donation'));
    setMyDonation(donationAmount);
  }, []);

  const allDonation = totalDonation?.reduce(
    (totalDonation, addedDonation) => totalDonation + addedDonation.price,
    0
  );
  const myDonationAmount = myDonation?.reduce(
    (totalDonation, addedDonation) => totalDonation + addedDonation.price,
    0
  );
  console.log(myDonationAmount);

  const totalPercentageDonation =
    parseInt(allDonation) + parseInt(myDonationAmount);
  const myDonationPercentage = parseFloat(
    (parseInt(myDonationAmount) / totalPercentageDonation) * 100
  ).toFixed(2);
  console.log(myDonationPercentage);

  // pic chart code here
  const data = [
    ['My Donation', 'Total Donation'],
    ['My Donation', parseInt(myDonationPercentage)],

    ['Total Donation', 100 - parseInt(myDonationPercentage)],
  ];
  console.log(data);

  const options = {
    sliceVisibilityThreshold: 0.2, // 20%
  };

  return (
    <div className="mt-7 mx-auto justify-center">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100%'}
        height={'400px'}
      />
    </div>
  );
};

export default PieChartt;
