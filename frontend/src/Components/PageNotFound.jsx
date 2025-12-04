import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Error 404: </h1>
      <h1>Page Not Found</h1>
      <Link to={"/"}> return to home page </Link>
    </div>
  );
}