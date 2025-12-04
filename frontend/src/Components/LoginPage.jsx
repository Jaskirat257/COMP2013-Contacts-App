import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";

export default function LoginPage() {
  // states
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  // Naviagte
  const navigate = useNavigate();

  // Handlers

  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        ...formData,
      });
      setPostResponse(response.data.message);
      if (response.status === 201) {
        navigate("/contacts", { state: formData });
        Cookies.set("jwt-authorizaion", response.data.token);
      }
    } catch (error) {
      setPostResponse(error?.response?.data.message || "Login Failed");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        handelOnChange={handleOnChange}
        handelOnSubmit={handleOnSubmit}
        nextPage="register"
        currentPage=""
      />
    </div>
  );
}