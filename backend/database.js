const mongoose =require("mongoose");

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser:true
    

})

    .then(db => console.log("bd is conectecd"))
    .catch(err => console.log(err));

