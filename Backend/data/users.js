import bcrypt from "bcryptjs"
const users =[
        {
                name:"Shivani Awasthi",
                email:"shivani@gmail.com",
                password:bcrypt.hashSync("1234",10),
                isAdmin:true
        },
        {
                name:"person",
                email:"person@gmail.com",
                password:bcrypt.hashSync("1234",10),
               
        }
]

export default users