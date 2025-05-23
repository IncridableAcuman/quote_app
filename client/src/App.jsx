import { useState } from "react";
import axios from 'axios';
const App = () => {
  const [quote,setQuote]=useState(null);
  const handleSubmit=async ()=>{
    try {
      const {data}=await axios.get("/api/quote");
      setQuote(data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  }
  return (
    <>
    <div className="container w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-6 text-center rounded-md shadow-lg">
        <h1 className='text-3xl lg:text-4xl font-extrabold py-5'>Quote App</h1>
        <p className='pb-2'>{`${quote?.quote? quote.quote : "Work Hard! Dream Big."}`}</p>
        <span className=''>{quote?.author? quote.author :"John Doe"}</span>
        <div className="pt-5">
        <button className='bg-indigo-500 text-white px-5 py-2 lg:px-10 cursor-pointer shadow-lg rounded-md hover:bg-indigo-700 transtion duration-300'
         onClick={handleSubmit}>Submit</button>          
        </div>
      </div>
    </div>
    </>
  )
}

export default App