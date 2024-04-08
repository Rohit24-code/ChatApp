import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const {loading,login}=useLogin();

  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    await login(userName,password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login<span className='text-blue-300'> ChatApp</span></h1>

        <form action="" onSubmit={(e:any)=>handleSubmit(e)}>
          <div>
            <label className='label p-2'>
              <span className='text-bold label-text'>username</span>
            </label>

            <input type="text" value={userName} onChange={(e:any)=>setUserName(e.target.value)}  placeholder='username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-bold label-text'>username</span>
            </label>

            <input type="password" value={password} onChange={(e:any)=>setPassword(e.target.value)} placeholder='enter password' className='w-full input input-bordered h-10' />
          </div>

          <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Don't have any account
          </Link>

          <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
