const express = require("express")

const app = express()

// 设置一个全局的密钥供面膜验证返回token时使用
app.set('secret', 'as1f53af1fas')

app.use(require('cors')())
app.use(express.json())
//静态托管uploads下的文件
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})