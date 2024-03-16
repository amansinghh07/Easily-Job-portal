import express from "express";
import path from "path";
import ejs from "ejs";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import homecontroller from "./src/controller/home-controller.js";
import Portal from "./src/controller/home-controller.js";
import Usercontroller from "./src/controller/user-controller.js";
import { auth } from "./src/middleware/auth-middleware.js";
import { uploadFile } from "./src/middleware/file-upload-middleware.js";

const server = express();
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);
server.use(express.static("src/views"));

const web = new Portal();
const home = new homecontroller();
server.use(express.static(path.resolve("src", "Assets")));
// server.use(ejs);
server.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
server.get("/", web.landingpage);

server.get("/jobs", web.getjoblist);

server.get("/login", Usercontroller.getlogin);

server.post("/login", Usercontroller.postlogin);

server.get("/more/:id", home.viewmore);

server.get("/apply-job/:id", Usercontroller.postapplyjob);

server.get("/register", Usercontroller.getregister);
// server.get("/abc", web.abc);
export default server;
