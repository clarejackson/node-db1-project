const router = require('express').Router()

const accounts = require('./accounts-model')
const { checkAccountPayload, checkAccountId, checkAccountNameUnique } = require('../accounts/accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await accounts.getAll
    res.status(200).json(account)
  } catch (err) {
    next (err)
  }
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.status(200).json(req.account)
  } catch (err) {
    next (err)
  }
})

router.post('/', checkAccountNameUnique,  checkAccountPayload(), (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAcct = accounts.create(res.account)
    res.status(201).json(newAcct)
  } catch (err) {
    next (err)
  }
})

router.put('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {
    next (err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {
    next (err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
