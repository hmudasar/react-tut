import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import Posts from "../components/Posts";
import AddUser from "../components/Users/AddUser";
import UserApi from "../components/Users/UserApi";
const item = [
  { name: "home", id: 1 },
  { name: "profile", id: 2 },
  {
    name: "contact",
    id: 3,
    click() {
      alert("contact");
    },
  },
  { name: "blog", id: 4 },
];
const Hompage = () => {
  const counter = useSelector((state) => state.counter.value);
  // console.log(counter, "counter");
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => dispatch(decrement())}
          // style={{ display: counter === 0 && "none" }}
          // disabled={counter === 0 ? "true" : ""}
          disabled={counter === 0 && "true"}
        >
          Decrement
        </button>
        <div style={{ width: "150px", textAlign: "center" }}>
          <p style={{ marginBottom: "0" }}>Count Value: {counter} </p>
        </div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      {/* 
  <div
    style={{
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {item.map((data) => {
      console.log(data, "data");
      return (
        <button
          key={data.id}
          onClick={() => setTab(data.name)}
          className={tab === data.name ? `active ${data.name}` : ""}
        >
          {data.name}
        </button>
      );
    })}
  </div>
  <footer>
    <p>Footer Value: {counter}</p>
  </footer> */}

      {/* <Posts /> */}
      <UserApi />
    </Fragment>
  );
};

export default Hompage;
