import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { Productlist } from "./GroceryList";
import css from "../style/groc.css";
import { nanoid } from "nanoid";

const Grocery = () => {
  const [product, setProduct] = useState([]);
  const items = (d) => {
    const data = {
      title: d,
      product_id: nanoid(5),
    };
    setProduct([...product, data]);
  };

  const handleDelete = (id) => {
    setProduct(product.filter((e) => e.product_id !== id));
  };

  return (
    <>
      <GroceryInput show={items} />
      <ul>
        {product.map((e) => (
          <Productlist key={e.product_id} {...e} removedata={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export { Grocery };
