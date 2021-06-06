module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })

  router.post('/', async(req, res) => {
    const model = await req.Model.create(req.body)
    console.log(model)
    res.send(model)
  })
  router.put('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async(req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  //.populate()表示关联取出什么,为了上级列表中的上级分类显示名称
  router.get('/', async(req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    // 通过inflection转类名
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  router.get('/:id', async(req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)  
}