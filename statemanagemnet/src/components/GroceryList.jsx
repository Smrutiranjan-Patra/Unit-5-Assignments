import css from "../style/list.css";
import remove from "../remove.png";

const Productlist = ({ title, product_id, removedata }) => {
  return (
    <>
      <div className="productdiv">
        <li className="product">{title}</li>
        <img
          src={remove}
          className="remove"
          onClick={() => removedata(product_id)}
        />
      </div>
    </>
  );
};

export { Productlist };
