const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server)

app.get("/", (request, response) => {
  console.log(request.header)
  response.sendFile(__dirname + "/index.html")
})

//initialize connection this needs to be done for each of the things you are doing i will go into more detail about this later
io.on("connection", (socket) => {
  console.log("hello i am the connection and i can sing!!!!")
  socket.on("chat message", (msg) => {
    console.log("message: " + msg)
  })

  io.on("connection", function(socket) {
    console.log("a user connected")
    socket.on("disconnect", function() {
      console.log("user disconnected")
    })
  })
})

//initiate the server
server.listen(3000, () => {
  console.log("server is listening on port 3000")
})
