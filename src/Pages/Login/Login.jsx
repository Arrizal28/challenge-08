import { MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import "./Login.scss";
import { login } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };

  return (
    <div>
      <>
        <div className="Login d-flex justify-content-center text-center justify-content-center align-items-center flex-column ">
          <div className="container mx-auto">
            <h1 className="text-black fs-1">Login</h1>
            <Input
              size="large"
              placeholder="Email Adress"
              maxLength={30}
              className="rounded-pill my-3"
              suffix={<MailOutlined />}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input.Password
              placeholder="Password"
              size="large"
              className="my-3"
              maxLength={30}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <div>
                <Button onClick={handleSubmit}>Login</Button>
              </div>
              <p>or connect with</p>
              <div>
                <GoogleLogin label="Sign In With Google" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
