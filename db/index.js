const mysql = require('mysql')

//创建数据库连接对象
const db = mysql.createPool({
  host: 'localhost',
  port:'3306',
  user: 'root',
  password: 'admin123',
  database: 'supermarket',
})

// 向外共享 db 数据库连接对象
module.exports = db


// const db = mysql.createConnection({
//     host: 'localhost',
//     port:'3306',
//     user: 'root',
//     password: 'admin123',
//     database: 'supermarket',
// })


// db.connect()

// var sql="select * from users;";

// db.query(sql,(err,result)=>{
//     if(err){
//         console.log('err',err);
//         return;
//     }
//     console.log('result',result);
// })
// //最后需要关闭连接
// db.end();





