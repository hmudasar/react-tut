import React from "react";
import { useSelector } from "react-redux";

const CounterB = () => {
  const counter = useSelector((state) => state.counter.value);
  return <div>Value: is {counter}</div>;
};

export default CounterB;
