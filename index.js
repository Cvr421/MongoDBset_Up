const  Mongoose= require('mongoose');

const connect=()=>{
    return Mongoose.connect('mongodb://localhost:27017/MongoDBsetUp');
}
connect() // here semicolon are not accepted

.then(connection=>{
    console.log('mongo DB connection setup Done');
})
.catch(err=>console.log(err));



