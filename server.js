const express = require("express");
const app = express();
const errorHandler = require('./middleware/error')
const fileupload = require('express-fileupload')
const dotenv = require("dotenv");
const db = require("./config/db");
const path =require('path')
// const morgan = require("morgan")
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());

//File uploading
// app.use(morgan("tiny"))
app.use(express.static(path.join(__dirname, 'public')))

const contractrouter = require('./routers/Contract_router')
app.use('/contracts' , contractrouter)

/* const userrouter = require('./routers/User_router')
app.use('/users' , userrouter)
app.use(errorHandler); */

const sheetrouter = require('./routers/PresenceSheet_router')
app.use('/sheets' ,sheetrouter )

const directorrouter = require('./routers/Director_router')
app.use('/directors' ,directorrouter)

const holidayrouter = require('./routers/Holiday_router')
app.use('/holidays' ,holidayrouter)

const rhrouter = require('./routers/Rh_router')
app.use('/rhs' ,rhrouter)

const prrouter = require('./routers/PresenceSheet_router')
app.use('/pres' ,prrouter)

const employeerouter = require('./routers/Employee_router')
app.use('/employees' ,employeerouter)

const annualHolidayrouter = require('./routers/AnnualHoliday_router')
app.use('/annualHolidays' ,annualHolidayrouter)

const ExceptionalHolidayrouter = require('./routers/ExceptionalHoliday_router')
app.use('/exceptionalHolidays' ,ExceptionalHolidayrouter)

const authrouter = require('./routers/Auth_router')
app.use('/auth' , authrouter)
 

app.get("/getImage/:img", (req,res)=>{
    res.sendFile(__dirname + "/storages/" + req.params.img)
})
 

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`)
})