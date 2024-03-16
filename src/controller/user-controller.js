import Usermodal from "../modals/user-modals.js";
import JobsModal from "../modals/jobs-modal.js";
export default class Usercontroller {
  static getlogin(req, res) {
    res.render("login-page");
  }
  static getregister(req, res) {
    res.render("register-page");
  }
  static postregister(req, res) {
    const { name, email, password } = req.body;
    Usermodal.adduser(name, email, password);
    return res.render()
  }
  static postlogin(req, res) {
    const { email, Password } = req.body;
    const user = Usermodal.verifyuser(email, Password);
    if (!user) {
      res.render("error-page", { errorMessage: "Invalid Credentials" });
    }
    req.session.userEmail = email;
    return res.render("homepage", { email: req.session.userEmail });
  }
  static postapplyjob(req,res){
   const id=req.params.id;
   const jobObj = JobsModal.getJobbyId(id);
   return res.render("job-apply", {
     jobObj
   });
 }
 static getUpdateJob(req,res){
 
 }
 static getCreateJob(req,res){
  
 }
  }
