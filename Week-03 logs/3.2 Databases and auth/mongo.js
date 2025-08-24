import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error(err));


const User = mongoose.model('Users', {
    name: String,
    email:String,
     password:String,
})


const user = new User({
     name : "nihal jasti",
     email: "nsj@mgail.com",
     password : "wsefwa",
})

user.save()