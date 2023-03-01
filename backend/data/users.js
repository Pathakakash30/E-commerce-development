const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Akash Pathak",
    email: "akash@example.com",
    password: bcrypt.hashSync("123456", 10),
    
  },
  {
    name: "Aman Gupta",
    email: "aman@example.com",
    password: bcrypt.hashSync("123456", 10),
    
  },
];

module.exports = users;
