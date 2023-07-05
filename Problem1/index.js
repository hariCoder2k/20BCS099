var http = require("http");
const express = require("express")
const path = require('path')
const app = express();
const PORT = 8008;

const https = require('https');



app.get("/numbers", function(req, res){
  
    var urls = req.query.url;
    http.get(urls, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          console.log(data);
        });
      }).on('error', (err) => {
        console.error(err);
      });
});

app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully on PORT", PORT)
})