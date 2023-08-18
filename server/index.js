const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.get("/", (req, res) => res.json({msg: "hello world after the class"}));

// HAzTgD6vXQ1YFva4
// mongodb+srv://ashishgupta020202:HAzTgD6vXQ1YFva4@cluster0.hwrojsv.mongodb.net/

 mongoose.connect('mongodb+srv://ashishgupta020202:HAzTgD6vXQ1YFva4@cluster0.hwrojsv.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000,()=>
    console.log("listning"))
