import express from "express";
import path from "path";
import ejs from "ejs";
import ejsLayouts from "express-ejs-layouts";
import Portal from "./src/controller/home-controller.js";
import Usercontroller from "./src/controller/user-controller.js";

const server = express();
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);
server.use(express.static("src/views"));

const web = new Portal();
server.use(express.static(path.resolve("src", "Assets")));
// server.use(ejs);
server.get("/", web.landingpage);

server.get("/jobs", web.getjoblist);

server.get("/login", Usercontroller.getlogin);

server.post("/login", Usercontroller.postlogin);

// server.get("/abc", web.abc);
export default server;
