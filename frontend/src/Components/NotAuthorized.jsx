import { Link } from "react-router-dom";

//Author: Jaskirat
//Description: Lab-5

export default function NotAuthorized() {
  return (
    <div>
      <h1>Error 403: User not Authrorized</h1>
      <Link to={"/"}> login first </Link>
    </div>
  );
}