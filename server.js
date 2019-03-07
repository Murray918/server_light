const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server)

app.get("/", (request, response) => {
  console.log(request.header)
  res.sendFile(__dirname + "/index.html")
})

//initialize connection
io.on("connection", () => {
  console.log("hello")

  // emit an event to the socket
  socket.emit("request", () => {
    console.log("this is a request", request)
  })

  // emit an event to all
  io.emit("broadcast", () => {
    console.log("broadcasting")
  })

  // listen to the event
  socket.on("reply", () => {
    conole.log("a reply has been sent i guess")
  })
})
server.listen(3000, () => {
  console.log("server is listening on port 3000")
})
