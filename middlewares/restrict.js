const passport = require('../library/passport')
module.exports = passport.authenticate('jwt', {
 session: false
})
