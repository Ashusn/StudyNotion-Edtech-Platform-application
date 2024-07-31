const mongoose = require("mongoose")
require("dotenv").config()

exports.BASE_URL = ()=>{
  console.log(process.env.REACT_APP_BASE_URL)
  const BASE_URL = process.env.REACT_APP_BASE_URL
  return BASE_URL
}

exports.connectDB = () => {
  console.log(process.env.MONGODB_URL)
  mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB connection successfull!")
    })
    .catch((error) => {
      console.log("DB Connection Failed")
      console.error(error)
      process.exit(1)
    })
}
