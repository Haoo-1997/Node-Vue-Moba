module.exports = app => {
  const express = require('express')

  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')

  const router = express.Router({
    mergeParams: true
  })

  // 创建资源
  router.post('/', async(req, res) => {
    const model = await req.Model.create(req.body)
    console.log(model)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async(req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 资源列表
  router.get('/', async(req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      //.populate()表示关联取出什么,为了上级列表中的上级分类显示名称
      queryOptions.populate = 'parent'
    }
    // 通过inflection转类名
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async(req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)
  
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads'})
  // 上传文件
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录请求
  app.post('/admin/api/login', async (req, res) => {
    // res.send(req.body)
    const { username, password } = req.body
    // 1.根据用户名找用户
    // const AdminUser = require('../../models/AdminUser')
    // 由于AdminUser中密码为不可选中状态，无法直接取出密码，所以加select方法
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户不存在') // 这一行取代下面的if判断
    // if(!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    // 2.校验密码
    // 通过bcrypt的compareSync对比密码是否正确
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')


    // 3.返回token,通过jsonwebtoken返回token
    // const jwt = require('jsonwebtoken')
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })

  // 错误处理函数，捕获异常，配合assert抛出的异常，进行报错处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}