import { useNavigate } from "react-router-dom";

//Author: Jaskirat
//Description: Lab-5

export default function FormComponent({
  formData,
  handelOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{currentPage || "Login"}</h1>
      <form onSubmit={handelOnSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="passowrd"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{postResponse}</p>
      <button onClick={() => navigate(`/${nextPage}`)}>
        {nextPage === "" ? "Go to Login Page" : "Go to Register Page"}
      </button>
    </div>
  );
}