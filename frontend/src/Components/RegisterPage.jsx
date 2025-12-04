import FormComponent from "./FormComponent";
import axios from "axios";
import { useState } from "react";

//Author: Jaskirat
//Description: Lab-5

export default function RegisterPage() {
  // States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  // Handlers
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  // asyny function is for taling to server
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        //error seemes to be here
        ...formData,
      });
      //console.log(response.data.message);
      setPostResponse(response.data.message);
    } catch (error) {
      setPostResponse(error.response.data.message || "Cannot add username");
      console.log(error);
    }
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    handleRegister();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        handelOnChange={handleOnChange}
        handelOnSubmit={handelOnSubmit}
        currentPage="Register"
        nextPage=""
      />
    </div>
  );
}