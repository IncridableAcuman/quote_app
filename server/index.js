const express=require('express');
const axios=require('axios');
const cors=require('cors');
require('dotenv').config();
const app=express();

app.use(express.json());
app.use(cors({}));

app.get("/api/quote",async (req,res)=>{
    try {
        const {data}=await axios.get("https://dummyjson.com/quotes/random");
        return res.status(200).json(data);        
    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }

});

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on ${port} port.`);
});