import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginadmin.css";
import Logoof from "../assets/logo (1).f830610ede8618ccafa5.png";
import axios from "axios";
import { toast } from "react-hot-toast";
const Loginadmin = () => {
  const nevigate = useNavigate()
  const handalesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email: email,
      password: password,
    };
    try{
      fetch("http://localhost:5000/auth/adminlogin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res=> res.json())
      .then(data => {
        if(data.admin){
          toast.success("Login Success")
          nevigate("/admindashboard")
        } else{
          toast.error("Incorrect email or password")
        }
      })
    } catch (err){
      console.log(err);
    }
   
  };
  return (
    <>
      <nav className="border bg-white shadow-lg">
        <div className="max-w-screen-xl flex shadow-lg flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={Logoof} className="sizeimg" alt="" />
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center mt-3">
        <div className="w-96 bg-white rounded-lg shadow-lg border-2 border-gray-900 dark:shadow-lg p-8 mt-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Admin Login </h2>
          <form onSubmit={handalesubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                required=""
              />
            </div>
            <div>
              <label className="block font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="password"
                id="password"
                name="password"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label
                  className="ml-2 block text-sm text-gray-900"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <a
                className="text-blue-600 hover:text-blue-500 text-sm"
                href="#!"
              >
                Forget Password?
              </a>
            </div>
            <button
              className="w-full mt-3 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginadmin;
