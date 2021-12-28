import css from "../style/list.css";
import remove from "../remove.png";

const Productlist = ({ item }) => {
  return (
    <>
      <div className="productdiv">
        <li className="product">{item}</li>
        <a href="#">
          <img src={remove} alt="" className="remove" />
        </a>
      </div>
    </>
  );
};

export { Productlist };
