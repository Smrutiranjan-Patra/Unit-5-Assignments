import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { Productlist } from "./GroceryList";
import css from "../style/groc.css";
import { nanoid } from "nanoid";

const Grocery = () => {
  const [product, setProduct] = useState([]);
  const items = (d) => {
    // console.log("data from grocery", d);
    const id = {
      title: d,
      product_id: nanoid(5),
    };
    setProduct([...product, id]);
    console.log(product);
  };
  return (
    <>
      <GroceryInput show={items} />
      <ul>
        {product.map((e, i) => (
          <Productlist item={e.title} key={e.product_id} />
        ))}
      </ul>
    </>
  );
};

export { Grocery };
