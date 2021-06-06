const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    // 表示mongo数据库中的ID, ref表示关联的模型
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}
})

module.exports = mongoose.model('Category', schema)