const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const port = 3000;

const app = express();
app.use(express.json())


const ALL_USERS = [
  {
    username: "nihal@12",
    password: "123",
    name: "Nihal",
  },
  {
    username: "aneesh@13",
    password: "123321",
    name: "Aneesh",
  },
  {
    username: "knapsr@1",
    password: "123321",
    name: "knapsr",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;

  for(let i=0; i<ALL_USERS.length; i++) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
        userExists = true;
    }

    return userExists;
  }
}



app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  //takes valid username and PW as input and returns token as response
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});



app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    //payload is decode, which is our username
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    
    // return a list of users other than this username
    res.json({
        users: ALL_USERS
    })

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});


// Start server
app.listen(port, () => {
    console.log(` Server running on port:${port}`);
});
