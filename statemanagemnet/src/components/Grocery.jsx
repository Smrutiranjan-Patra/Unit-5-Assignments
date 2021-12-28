import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { Productlist } from "./GroceryList";

const Grocery = () => {
  const [product, setProduct] = useState([]);
  const items = (d) => {
    console.log("data from grocery", d);
    setProduct([...product, d]);
  };
  return (
    <>
      <GroceryInput show={items} />
      <ol>
        {product.map((e) => (
          <Productlist item={e} />
        ))}
      </ol>
    </>
  );
};

export { Grocery };
