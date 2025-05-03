import React, { useDeferredValue, useEffect, useState } from "react";

const ProductCard = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(name);
    const SIZE = 9999;
    const result = [];
    for (let i = 0; i < SIZE; i++) {
      result.push(name);
    }
    setProducts(result);
  }, [name]);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  );
};

export default function Product() {
  const [name, setName] = useState<string>("");
  const deferedName = useDeferredValue(name);
  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ProductCard name={deferedName} />
    </div>
  );
}
