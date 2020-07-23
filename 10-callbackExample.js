function login(req, res, callback) {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) return callback(err)
      user.comparePassword(req.body.password, (err, isMatched) => {
        if (err) return callback(err)
        if (!isMatched) return res.status(401).send('Incorrect password')

        const payload = {
          id: user._id,
          email: user.email,
        }
        jwt.sign(payload, config.secret, {}, (err, token) => {
          if (err) return callback(err)
          user.token = token
          user.save((err) => {
            if (err) return callback(err)
            res.json({
              token,
            })
          })
        })
      })
    },
  )
}
