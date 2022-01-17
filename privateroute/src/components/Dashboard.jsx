import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export const Dashboard = () => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return <div>Welcome to Dashboard</div>;
};
