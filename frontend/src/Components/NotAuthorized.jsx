import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <div>
      <h1>Error 403: User not Authrorized</h1>
      <Link to={"/"}> login first </Link>
    </div>
  );
}