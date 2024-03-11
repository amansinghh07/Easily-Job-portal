export default class Usermodal{
    constructor(id,email,password){
    this.id=id;
    this.email=email;
    this.password=password
    }
    static adduser(email,password){
        const newUser=new Usermodal(users.length+1,email,password);
        users.push(newUser);
    }
        static verifyuser(email,password){
        const results=users.find((u)=>{
            u.email==email && u.password==password
        });
        return results;
        }

    }

const users=[];