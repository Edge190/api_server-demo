const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

// 1. 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_supermarket } = require('../supermarket/user')

// 登录
router.post('/login', expressJoi(reg_login_supermarket), user_handler.login)


module.exports = router