export default class Usermodal{
    constructor(id,name,email,password){
    this.id=id;
    this.name=name;
    this.email=email;
    this.password=password
    }
    static adduser(name,email,password){
        const newUser=new Usermodal(users.length+1,name,email,password);
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