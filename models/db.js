const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


module.exports = mongoose.connect("mongodb://localhost:27017/todolist",
//     {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser : true,
//     useFindAndModify : false
// },
    err => {
    // if (err) {
    //     console.log(`Error in DB Connection ${err}`);
    // }
    // else {
    //     console.log(`MongoDB Connection Suceeded...`);
    // }
    if(err) throw err;
   console.log('Connected to MongoDB!!!',err)
});

