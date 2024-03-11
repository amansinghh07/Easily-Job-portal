import Usermodal from "../modals/user-modals.js";
export default class Usercontroller {
  static getlogin(req, res) {
    res.render("login-page");
  }
  static postlogin(req, res) {
    const { email, password } = req.body;
    const user = Usermodal.verifyuser(email, password);
    if (!user) {
      res.render("error-page", { errorMessage: "Invalid Credentials" });
    }
    res.render("homepage");
  }
  static viewmore(){
    
  }
}
