import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { Productlist } from "./GroceryList";
import css from "../style/groc.css";
import { nanoid } from "nanoid";

const Grocery = () => {
  const [product, setProduct] = useState([]);
  const items = (d) => {
    const id = {
      title: d,
      product_id: nanoid(5),
    };
    setProduct([...product, id]);
  };
  const handleDelete = (id) => {
    setProduct(product.filter((e) => e.product_id !== id));
  };

  return (
    <>
      <GroceryInput show={items} />
      <ul>
        {product.map((e, i) => (
          <Productlist
            item={e.title}
            key={e.product_id}
            removedata={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export { Grocery };
