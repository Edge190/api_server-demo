// 导入数据库操作模块
const db = require('../db/index')

//获取商品信息的处理函数
exports.getMall = (req, res) => {
    // const area = toString(req.body) 
    // console.log(req.query);
    const sql = `select * from goods where area='${req.body.area}'`

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

//修改商品信息的处理函数
exports.editMall = (req, res) => {
    const sql = `update goods set surplus='${req.body.surplus}',stock='${req.body.stock}' where goodsId='${req.body.goodsId}'`

    db.query(sql, (err,results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        res.send({
            status: 0,
            message:'修改成功',
            data: {
                goodsId: req.body.goodsId,
                stock: req.body.stock,
                surplus: req.body.surplus,
            }
        })
    })
}