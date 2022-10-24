const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入商品路由处理函数对应的模块
const user_handler = require('../router_handler/mall')


// 获取商品信息
router.post('/getMall', user_handler.getMall)

// 修改商品信息
router.post('/editMall', user_handler.editMall)

module.exports = router