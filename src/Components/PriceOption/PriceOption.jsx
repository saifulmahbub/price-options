import React from "react";
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, id, features } = option;
  return (
    <div className="bg-blue-300 flex flex-col rounded-md p-4">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-6">{name}</h4>
      <div className="p-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-6 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-sky-400">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
