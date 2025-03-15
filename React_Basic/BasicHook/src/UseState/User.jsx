import React, { useState } from "react";

const initialAddress = () => {
  return {
    nation: "viet nam",
    city: {
      street: "duong 36",
      house: "Builing",
    },
  };
};

export default function User() {
  const [name, setname] = useState("anh canh");
  const [age, setAge] = useState(24);
  const [address, setAddress] = useState(initialAddress);
  const [, forceRerender] = useState(0);

  const increAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const changeStreet = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = "67 mai chi tho";
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  const rerender = () => {
    forceRerender((prevState) => prevState + 1);
  };
  console.log("rerender");

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <div>
        <ul>
          <li>{address.nation}</li>
          <li>{address.city.street}</li>
          <li>{address.city.house}</li>
        </ul>
      </div>
      <div>
        <button onClick={increAge}>Change Age</button>
        <button onClick={changeStreet}>Change Address</button>
        <button onClick={rerender}>Rerender</button>
      </div>
    </div>
  );
}
