// 导入数据库操作模块
const db = require('../db/index')

exports.getOrder = (req, res) => {

    const sql = `select * from order where area='${req.body.area}'`

    // console.log(req.body.area);

    db.query(sql, (err,results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        res.send({
            status: 0,
            message:'返回成功',
            data: results
        })
    })
}