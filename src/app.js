const express=require("express")
const app=express()

//socket
const server=require('http').createServer(app);

//io
const io=require('socket.io')(server,{
    cors:{
        origin:"*"
    }
})

//socket router
const sockerRouter=require("./routes/socketrouter")(io);

//initiate in app
app.use("/api/v1",sockerRouter)


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//socket connection check
io.on("connection",(socket)=>console.log(`${socket.id} connected`))

server.listen(3000,()=>{
    console.log('running on port 3000')
})

