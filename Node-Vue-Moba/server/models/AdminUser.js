const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String },
    password: { 
        type: String, 
        select: false,
        set (val) {
            // hashSync()需传递两个参数，第一个是待散列的值，第二个是加密指数，加密指数越高越安全
            return require('bcrypt').hashSync(val, 10)
            // return val
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)