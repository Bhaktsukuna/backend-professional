// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const server = app.listen(process.env.PORT, () => {
      console.log(`Server is running at PORT ${process.env.PORT}`);
    });
    server.on("error",(err)=>{
         console.error("SERVER ERROR:", err);
    })
  })
  .catch((err) => {
    console.log("MONGO DB connectrion Failed", err);
      process.exit(1);
  });

/*
import express from "express"

const app = express()

;(async()=>{
try {
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)


const server = app.listen(process.env.PORT,()=>{
  console.log(`App is listening on port ${process.env.PORT}`);

})

server.on("error",(error)=>{
  console.error("ERROR:", error);
})
} catch (error) {
console.error("ERROR:",error);
throw error
}
})()
*/
