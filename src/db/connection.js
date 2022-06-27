const mongoose= require("mongoose");

require("dotenv").config();

const connection =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("succesful database connection")
    } catch (error) {
        console.log (error)
    }
};


connection ();
// module.exports = { connection };