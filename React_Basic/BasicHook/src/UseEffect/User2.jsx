import React, { useEffect, useState } from "react";

const initialAddress = () => {
  console.log("initialAddress");
  return {
    nation: "viet nam",
    city: {
      street: "duong 36 linh dong",
      house: "Building",
    },
  };
};
const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: "viet name",
        city: {
          street: "67 mai chi tho",
          house: "Building",
        },
      });
    }, 3000);
  });
};

export default function User2() {
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
  //   console.log("rerender");

  //trường hợp gọi useEffect không truyền deps, nó đóng vai trò như componentDidUpdate trong class component, nó được gọi sau khi component re-render
  useEffect(() => {
    console.log("compnent did update");
  });

  //trường hợp dùng useEffect có deps nhưng là aray rỗng, thì nó đóng vai trò như một componentDidMount, chỉ chạy một lần sau khi component mounted. vì vậy nó thường được dùng để gọi api
  useEffect(() => {
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    //clean up function
    return () => {
      console.log("huy goi api");
    };
  }, []);

  //trường hợp dùng useEffect có truyền deps và tham số trong deps thì mỗi lần tham số truyền vào trong deps thay đổi thì nó sẽ chạy useEffect
  useEffect(() => {
    console.log(`age or name has change: count = ${age}, name: ${name}`);
    return () => {
      console.log("no flow");
    };
  }, [age, name]);

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
