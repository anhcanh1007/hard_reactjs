import React, {
  startTransition,
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";

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

export default function ProductStartTransition() {
  const [name, setName] = useState<string>("");
  // const deferedName = useDeferredValue(name);
  const [dedeferedName, setdeferedName] = useState<string>("");
  const [pending, start] = useTransition(); // cu phap useStartTransition

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    start(() => setdeferedName(value)); // khi dung useStartTransition

    startTransition(() => setdeferedName(value)); // khi dung startTranstion
  };
  console.log("pending", pending);
  return (
    <div>
      <h1>Product List</h1>
      <input type="text" value={name} onChange={handleChange} />
      {pending && <div>Loading ..</div>}
      {pending && <ProductCard name={dedeferedName} />}
      useStartTransition
    </div>
  );
}
