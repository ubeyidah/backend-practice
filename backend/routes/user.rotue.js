import express from "express"
import {getUsers} from "./../controller/user.controller.js"

const route = new express.Router() 



route.get("/", getUsers)


export default route;