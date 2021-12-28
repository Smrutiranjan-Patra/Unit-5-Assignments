import { useState } from "react";

const GroceryInput = ({show}) => {
  const [list, setlist] = useState("");

  const item = (e) => {
    setlist(e.target.value);
  };

  const itemname = () => {
    // console.log(list);
    show(list);
  };
  return (
    <>
      <input type="text" placeholder="Write Item name Here" onChange={item} />
      <button onClick={itemname}>Add</button>
    </>
  );
};

export { GroceryInput };
