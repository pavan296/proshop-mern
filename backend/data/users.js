import bcrypt from 'bcryptjs';


const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Pavan',
        email:'pavan@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Namratha',
        email:'namratha@example.com',
        password:bcrypt.hashSync('123456',10),
    }
]

export default users;