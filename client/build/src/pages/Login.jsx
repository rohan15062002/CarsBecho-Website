import { Form, Input, message } from "antd";
import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";
import Footer from "../Components/Footer";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState("")
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      //destructring here directly
      const { data } = await axios.post("/user/login", values);
      console.log(data);

      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.users, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  
  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

  return (
    <>
      <div className="logo-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler} className='container mx-auto mt-auto m'>
          <h1 className="text-md-center my-lg-5">Login Form</h1>
          <div>
          <Form.Item label="Email" name="email">
            <Input type="email"/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to={"/register"} className='text-decoration-none'>Not a user ? Click Here to regsiter !</Link>
            <button className="btn btn-primary">Log In</button>
          </div>
          </div>
        </Form>
        
      </div>
      
      <Footer/>

      
    </>
  );
};

export default Login;
