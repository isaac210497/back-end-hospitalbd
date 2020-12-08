const mongoose = require('mongoose');

const dbConnection = async () =>{

try{
    await mongoose.connect(process.env.DB_CNN,
     {useNewUrlParser: true,
         useUnifiedTopology: true,
        useCreateIndex: true});
        console.log('Db online');
} catch (err) {
    console.log (err);
    throw new err('erro a la hora de inicar bd');
}
}

module.exports= {
    dbConnection
}