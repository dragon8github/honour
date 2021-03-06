"use strict";
const express = require('express');
const fs = require('fs');
const url = require('url');
const sio = require('socket.io');

let app = express();
let port = 8090;
let result = "";

// the test html page
app.get('',function(req,res){
	res.end(fs.readFileSync('./index.html','utf8'));
})

// all get post
app.all('/ajax/menu/:id', function (req, res) {
  	res.header('Access-Control-Allow-Origin', '*');
	res.header("Content-Type", "text/plain;charset=utf-8");
	let id = req.params.id;
	if(req.url!=="/favicon.ico" && !isNaN(id)) {
	   result = {state:"200",msg:"success",result:fs.readFileSync("../data/menu.json", 'utf8')}; 
	} else {
		result = {state:"500",msg:"shoperId is not defined"}
	}
	res.end(JSON.stringify(result));
})

app.all('/ajax/desk/:id', function (req, res) {
  	res.header('Access-Control-Allow-Origin', '*');
	res.header("Content-Type", "text/plain;charset=utf-8");
	let id = req.params.id;
	if(req.url!=="/favicon.ico" && !isNaN(id)) {
	   result = {state:"200",msg:"success",result:fs.readFileSync("../data/desk.json", 'utf8')}; 
	} else {
		result = {state:"500",msg:"shoperId is not defined"}
	}
	res.end(JSON.stringify(result));
})

var server = app.listen(port, function () {
	console.log("Server Start!");
})

let socket = sio.listen(server);
socket.on('connection',function(socket){
	console.log("socket start!");

    socket.on("server_menu",function(menu_data){
        fs.writeFile('../data/desk.json',menu_data,function(err){
            if(err) console.error("文件写入失败");
            else console.log("文件写入成功");
        });
        sendClientData(menu_data);
	})
})
let sendClientData = (data) => {
    socket.emit('client_menu',data);
}