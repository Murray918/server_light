const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server)

app.get("/", (request, response) => {
  console.log(request.header)
  response.sendFile(__dirname + "/index.html")
})

//initialize connection
io.on("connection", (socket) => {
  console.log("hello i am the connection and i can sing!!!!")
  socket.on('disconnect', function(){
    console.log('user cannot sing anymore');
  });
})
 
//initiate the server
server.listen(3000, () => {
  console.log("server is listening on port 3000")
})
