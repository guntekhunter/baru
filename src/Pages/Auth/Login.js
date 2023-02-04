import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [pinValue, setPinVlue] = useState([]);
  const [pin, setPin] = useState([
    { id: 1, pin: "1234" },
    { id: 2, pin: "2345" },
    { id: 3, pin: "3456" },
    { id: 4, pin: "4567" },
    { id: 5, pin: "5678" },
    { id: 6, pin: "6789" },
    { id: 7, pin: "7891" },
    { id: 8, pin: "8910" },
    { id: 9, pin: "9101" },
    { id: 10, pin: "1011" },
  ]);

  // input handler to get the pin
  const inputPin = (e) => {
    setPinVlue(e.target.value);
    // filter the pin array of object to find the same pin from input
    const result = pin
      .filter((pin) => pin.pin === e.target.value)
      .map((pin) => pin.id);
    setResult(result);
  };

  // redirect to checklist pages
  const handleGo = (e) => {
    //condition to check rather the pin is available or not
    console.log(result);
    if (result) {
      setResult(result);
      alert(`The value ${result} was found in the array.`);
    } else {
      alert(`The value ${pinValue} was not found in the array.`);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-50 drop-shadow-md rounded-[.5rem]">
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div>
            <input
              onChange={inputPin}
              type="text"
              className="bg-inherit focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              placeholder="Enter 4-digit code"
            />
            <Link to={{ pathname: "/checklist" }} state={{ data: result }}>
              <button
                onClick={handleGo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mt-4"
              >
                Submit
              </button>
            </Link>
          </div>
          <div className="mt-2">
            <Link to="/register">
              <u className="text-1 mb-4 mt-2">Register</u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
