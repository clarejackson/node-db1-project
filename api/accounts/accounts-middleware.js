const accounts = require("../accounts/accounts-model")

exports.checkAccountPayload = () => {
  // DO YOUR MAGIC
  return (req, res, next) => {
    if (!req.body.name || !req.body.budget) {
      return res.status(400).json({
        message: "name and budget are required"
      })
    }
    if (typeof req.body.name !== "string") {
      return res.status(400).json({
        message: "name of account must be a string"
      })
    }
    if (100 < ((req.body.name).trim) < 3) {
      return res.status(400).json({
        message: "name of account must be between 3 and 100"
      })
    }
    if (isNaN(req.body.budget)) {
      return res.status(400).json({
        message: "budget of account must be a number"
      })
    }
    if (1000000 < (req.body.budget) < 0) {
      return res.status(400).json({
        message: "budget of account is too large or too small"
      })
    }
    next()
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const 
  } catch (err) {
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
}
