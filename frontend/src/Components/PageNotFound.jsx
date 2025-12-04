import { Link } from "react-router-dom";

//Author: Jaskirat
//Description: Lab-5

export default function PageNotFound() {
  return (
    <div>
      <h1>Error 404: </h1>
      <h1>Page Not Found</h1>
      <Link to={"/"}> return to home page </Link>
    </div>
  );
}