const router = require('express').Router()
const { Restaurant } = require('../db/models')

router.route('/restaurants')
  .get((req, res) => {
    console.log('я в ресторанах');
    Restaurant.findAll({ attributes: ['id', 'name', 'info'], raw: true })
      .then((data) => {
        return res.json(data)
      })
      .catch((error) => console.log(error))
  })

router.route('/restaurants/:id')
  .get((req, res) => {
    const { id } = req.params
    Restaurant.findByPk(id)
      .then((data) => {
        console.log(data);
        return res.json(data)
      })
      .catch((error) => console.log(error))
  })

module.exports = router
