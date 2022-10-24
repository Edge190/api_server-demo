// 导入数据库操作模块
const db = require('../db/index')

// 导入 bcryptjs 这个包
// const bcrypt = require('bcryptjs')
// 导入生成 Token 的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')


// 登录的处理函数
exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body
    // 定义 SQL 语句
    const sql = `select * from users where username=?`
    // 执行 SQL 语句，根据用户名查询用户的信息
    db.query(sql, userinfo.username, (err,results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但没有相应的username
        if (results.length !== 1) {
            return res.cc('用户名错误')
        }
       

        // TODO：判断密码是否正确
        if (userinfo.password !== results[0].password) {
            return res.send({
                status: 1,
                message: '密码错误！',
            })
        }
        // console.log(results[0]);
        // TODO：在服务器端生成 Token 的字符串
        const user = { ...results[0], password: '' }
        // console.log(user);
        // 对用户的信息进行加密，生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })

        // 调用 res.send() 将 Token 响应给客户端
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr,
            data: {
                name: results[0].name,
                position: results[0].position,
                area: results[0].area,
            },

        })
    })
}
