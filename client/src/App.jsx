import React from 'react'

const App = () => {
  return (
    <>
    <div className="container w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-6 text-center rounded-md shadow-lg">
        <h1 className='text-3xl lg:text-4xl font-extrabold py-5'>Quote App</h1>
        <p className='pb-2'>Work Hard! Dream Big.</p>
        <span className=''>John Doe</span>
        <div className="pt-5">
        <button className='bg-indigo-500 text-white px-5 py-2 lg:px-10 cursor-pointer shadow-lg rounded-md hover:bg-indigo-700 transtion duration-300'>Submit</button>          
        </div>
      </div>
    </div>
    </>
  )
}

export default App