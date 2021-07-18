const router = require("express").Router()

// Middleware
const restrict = require('../middlewares/restrict')

// Controller
const auth = require("../controllers/authenticationController")

router.get("/", (req, res) => {
  res.json({
    status: "JWT Authentication Basic"
  })
})

router.post("/register", auth.register)
router.post("/login", auth.login)
router.get('/whoami', restrict, auth.whoami)


module.exports = router;