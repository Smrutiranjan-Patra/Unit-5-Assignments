import css from "../style/list.css";
import remove from "../remove.png";

const Productlist = ({ item, product_id, removedata }) => {
  return (
    <>
      <div className="productdiv">
        <li className="product">{item}</li>
        <a href="#">
          <img
            src={remove}
            alt=""
            className="remove"
            onClick={() => removedata(product_id)}
          />
        </a>
      </div>
    </>
  );
};

export { Productlist };
