import React, { useState } from "react";
import { Button, Input, Logo, logo } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authServices from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { login as authLogin, login } from "../Store/authSlice";
import { useDispatch, useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authServices.createAccount(data);
      if (userData) {
        const userData = await authServices.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <span>
            <Logo />
          </span>
        </div>

        <h2>Sign in to your account</h2>
        <p>
          Don&apos;t have any account?&nbsp;
          <Link to="/signup">Sign up</Link>
        </p>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div>
            <Input
              label="Name:"
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email:"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Enter valid email address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your Password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
