const mysql2=require('mysql2');
const db=mysql2.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'obesystem'
    }
);
const connectdb=()=>{
db.connect((err)=>{
if(err) throw err;
console.log('Database is connected');
});
}
module.exports={ db , connectdb };