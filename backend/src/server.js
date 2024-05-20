import express from "express"
// import userRouter from "./routes/users.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser());
// app.use("/api/users",userRouter)



app.listen(8080, ()=>{
    console.log("server listening on port " + `http://localhost:`+8080);
})