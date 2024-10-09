import React from "react";
import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  const { name, price, id, features } = option;
  return (
    <div className="bg-blue-300 rounded-md p-4">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-6">{name}</h4>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
