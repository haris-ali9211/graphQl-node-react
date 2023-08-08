const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongoose Connected ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;