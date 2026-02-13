//const express = require("express")
import express from "express"
import path from "path";
import cors from "cors";
import {serve} from "inngest/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import {inngest, functions} from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const __dirname = path.resolve();


//middleware 
app.use(express.json())
//credientials:true?? = server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))
app.use(clerkMiddleware());//to verify the user is authenticated before accessing any api routes

app.use("/api/inngest", serve({
    client:inngest,
    functions,
    signingKey: ENV.INNGEST_SIGNING_KEY
}))
 
app.use("/api/chat", chatRoutes);

// console.log(ENV.PORT); 
// console.log(ENV.DB_URL)

app.get("/health", (req, res) => {
    
    res.status(200).json({msg:"api is up and running"})
})







//make ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))


    app.get("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});
}


const startServer = async () =>{
    try{
        await connectDB();
        app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
    } catch(error){
        console.error("Error starting the server", error)
    }
};

startServer();