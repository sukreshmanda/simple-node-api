const express = require ('express')
const fs = require ('express')

const app = express ()

app.get('/listVideo', function (req,res){
   fs.readFile(__dirname+"/video.json","utf8", function (err,data){
       console.log(data)
   });
})

var server = app.listen(1242, function (){
   var host = server.address().address
   var port = server.address().port
   console.log("server listening at http://%s:%s",host,port)
})
