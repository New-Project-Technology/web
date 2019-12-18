const express = require('express');
const AWS = require('aws-sdk');
const Key = require('../keys/aws_key');

const router = express.Router();

AWS.config.update({
    region: "ap-northeast-2",
    accessKeyId: Key.AWSAccessKeyId,
    secretAccessKey: Key.AWSSecretKey
})

router.post('/login', (req, res) => {

    const faveClient = new AWS.DynamoDB.DocumentClient();
    const table = "fave_user";

    const params = {
        TableName: table,
        Key: {
            "userID": req.body.userId
        }
    };

    faveClient.get(params, (err, data) => {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            return res.status(404);
        } else {
            if (Object.keys(data).length === 0) {
                return res.status(401).json({
                    error: "THERE IS NO USER",
                    code: 2
                });
            }

            if (data.Item.password === req.body.userPW) {
                let session = req.session;
                session.loginInfo = {
                    _id: data.Item.userID,
                    name: data.Item.name,
                    age: data.Item.age
                };

                return res.json({
                    success: true
                })
            } else {
                return res.status(401).json({
                    error: "PASSWORD IS NOT CORRECT",
                    code: 3
                });
            }
        }
    })

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
