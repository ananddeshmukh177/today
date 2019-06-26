var express=require("express");
var app=express();

var employeeController=function(req,resp)
{
	var employee=[
	{Empid:101,Ename:"Anand",BSalary:30000,email:"anand@gmail"},
	{Empid:102,Ename:"Vinayak",BSalary:30000,email:"vinayak@gmail"},
	{Empid:103,Ename:"nitesh",BSalary:30000,email:"nitesh@gmail"}
	];
	resp.send(employee);
};
app.get('/employee',employeeController);
var server=app.listen(2500);
console.log("Listening on port no. 2500");