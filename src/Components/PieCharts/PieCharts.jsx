import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const PieChartt = () => {
  const [totalDonation, setTotalDonation] = useState([]);
  const [myDonation, setMyDonation] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTotalDonation(data));
  }, []);

  useEffect(() => {
    const DonationAmount = JSON.parse(localStorage.getItem('donation'));
    setMyDonation(DonationAmount);
  }, []);

  const TotalDonation = totalDonation?.map(items => parseInt(items.price));
  const ItemsPrice = TotalDonation?.reduce(
    (itemPrice, currentPrice) => itemPrice + currentPrice,
    0
  );
  console.log(ItemsPrice);

  const donationAmount = myDonation?.map(dates => parseInt(dates.price));
  const totalAmount = donationAmount?.reduce(
    (preDonation, currentDonation) => preDonation + currentDonation,
    0
  );
  console.log(totalAmount);

  const totalDonationPercentAmount = parseFloat(
    (parseInt(totalAmount) / ItemsPrice) * 100
  ).toFixed(2);
  const totalDonationPercentages = parseFloat(totalDonationPercentAmount);
  console.log(totalDonationPercentages);

  const data = [
    { name: 'Group A', value: 50 },
    { name: 'Group B', value: totalDonationPercentages },
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="items-center">
      <div className="flex justify-center items-center mt-32">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="grid gap-0 lg:right-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        <div className="flex mx-auto justify-start md:justify-center lg:justify-center text-center w-full items-center gap-5">
          <p>My Donation</p>{' '}
          <button className=" bg-[#00C49F] py-2 px-16"></button>
        </div>
        <div className="flex items-center gap-5">
          <p>Total Donation</p>{' '}
          <button className=" bg-[#FF444A] py-2 px-16"></button>
        </div>
      </div>
    </div>
  );
};

export default PieChartt;
