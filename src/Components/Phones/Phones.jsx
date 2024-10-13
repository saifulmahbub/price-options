import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
    //   axios
    //     .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    //     .then((data) => setPhones(data.data.data));
  }, []);
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
      <h1>phones:{phones.length}</h1>
    </div>
  );
};

export default Phones;
