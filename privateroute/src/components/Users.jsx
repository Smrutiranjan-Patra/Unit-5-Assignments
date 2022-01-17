import { Link } from "react-router-dom";
export const Users = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((e) => (
        <div>
          <Link to={`/users/${e}`}>User</Link>
        </div>
      ))}
    </div>
  );
};
