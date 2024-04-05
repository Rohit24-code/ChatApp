import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login<span className='text-blue-300'> ChatApp</span></h1>

        <form action="">
          <div>
            <label className='label p-2'>
              <span className='text-bold label-text'>username</span>
            </label>

            <input type="text" placeholder='username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-bold label-text'>username</span>
            </label>

            <input type="text" placeholder='enter password' className='w-full input input-bordered h-10' />
          </div>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Don't have any account
          </a>

          <button className='btn btn-block btn-sm mt-2'>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login