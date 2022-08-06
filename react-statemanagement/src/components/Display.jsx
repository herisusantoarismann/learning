import React, { useContext } from "react";
import { useSelector } from "react-redux";
// import { useBearStore } from "../zustand";

const Display = () => {
  // Zustand
  //   const counter = useBearStore((state) => state.counter);
  //   const name = useBearStore((state) => state.name);

  // Redux Toolkit
  const counter = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.user.name);

  return (
    <div style={{ textAlign: "center" }}>
      <p>{name}</p>
      <p>{counter}</p>
    </div>
  );
};

export default Display;
