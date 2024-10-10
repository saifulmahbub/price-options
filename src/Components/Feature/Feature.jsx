import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center m-2">
        <FaCheckCircle className="text-sky-800" />
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
