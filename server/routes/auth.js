const express = require('express');
const router = express.Router();

const users = {'test': '1234', 'test2': '1234'};

router.post('/login', (req, res) => {

    if (req.body.userId in users) {
        if (users[req.body.userId] === req.body.userPW) {
            let session = req.session;
            session.loginInfo = {
                _id: req.body.userId,
            };

            return res.json({
                success: true
            })
        }
        else {
            return res.status(401).json({
                error: "PASSWORD IS NOT CORRECT",
                code: 3
            });
        }
    }
    else {
        return res.status(401).json({
            error: "THERE IS NO USER",
            code: 2
        });
    }

});

router.get('/getInfo', (req, res) => {
   if (typeof req.session.loginInfo === "undefined") {
       return res.status(401).json({
           error: "THERE IS NO LOGIN DATA",
           code: 1
       });
   }

   res.json({info: req.session.loginInfo});
});

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err)
            throw err;
    })

    return res.json({
        success: true
    })
})

module.exports = router;
