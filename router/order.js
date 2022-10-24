const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入订单路由处理函数对应的模块
const user_handler = require('../router_handler/order')

// 获取订单信息
router.post('/getOrder', user_handler.getOrder)





module.exports = router