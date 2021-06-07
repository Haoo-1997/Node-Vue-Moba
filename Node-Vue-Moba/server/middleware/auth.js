// 登录校验中间件
module.exports = (options) => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')

    return async(req, res, next) => {
        // 验证token
        const token = String(req.headers.authorization || '').split(' ').pop()
        // console.log(token)
        //token对比，返回登录用户的ID
        assert(token, 401, '请提供jwt token')
        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '无效的jwt token')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
    
        await next() // 处理完这个中间件，继续处理下一个
      }
}