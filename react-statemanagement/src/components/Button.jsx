import React from "react";
import { useDispatch } from "react-redux";
import { useBearStore } from "../zustand";
import { increment, decrement } from "../redux-toolkit/Counter/counterSlice";
import { changeName } from "../redux-toolkit/User/userSlice";

export const Button = () => {
  // Zustand
  //   const increment = useBearStore((state) => state.increment);
  //   const decrement = useBearStore((state) => state.decrement);
  //   const getName = useBearStore((state) => state.getName);

  // Redux-toolkit
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          style={{ marginRight: "50px" }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
      </div>
    </>
  );
};

export default Button;
