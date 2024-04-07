import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmedPassword: "",
    gender: "",
  });

  const {loading,signUp}=useSignup()

  const handleChange=(e:any)=>{
     setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const handleCheckBoxChange=(gender:string)=>{
    setInputs({...inputs,gender})
  }

  const handleSubmit=(e:any)=>{
    e.preventDefault()
    signUp(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-wd-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up<span className="text-blue-300"> ChatApp</span>
        </h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <label className="label p-2">
              <span className="text-bold label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              name="fullName"
              onChange={handleChange}
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-bold label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={inputs.userName}
              onChange={handleChange}
              placeholder="User Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-bold label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-bold label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmedPassword"
              value={inputs.confirmedPassword}
              onChange={handleChange}
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox 
          onCheckBoxChange={handleCheckBoxChange}
          selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already Have a account
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
