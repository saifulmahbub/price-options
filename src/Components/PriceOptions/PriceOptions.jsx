import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "1 personal training session per month",
      ],
    },

    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Unlimited group fitness classes",
        "Unlimited personal training sessions",
        "Access to sauna and pool",
        "Nutrition consultation",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 99.99,
      features: [
        "All Premium Plan benefits",
        "Priority booking for fitness classes",
        "Monthly massage therapy session",
        "Access to VIP lounge",
        "Custom workout and nutrition plan",
        "24/7 gym access",
      ],
    },
  ];

  return (
    <div className="m-8">
      <h2 className="text-5xl mb-3 text-center"> Best Prices In The Town</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
