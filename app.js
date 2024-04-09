const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
responRouter= require("./routes/responsabilidad")


//settings
const app = express();
const port= process.env.PORT || 3001;

app.use(express.json());

//middleware
app.use('/api',responRouter);




//routes
app.get("/",(req,res)=> {
res.send("Welcome to my API");
});

//mongodb connection

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("connected to MongoDB Atlas"))
.catch((error)=> console.error(error));

app.listen(port, () => console.log("server listening to",port));