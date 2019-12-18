const express = require('express');
const AWS = require('aws-sdk');

const router = express.Router();

module.exports = (upload) => {

    router.get('/getLogs', (req, res) => {

        const s3 = new AWS.S3();
        const params = {
            Bucket: 'new-technology-project',
            Key: 'log.json'
        }

        s3.getObject(params, (err, data) => {

            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                return res.status(404);
            }

            const str = data.Body.toString('utf-8');
            let newJson = str.replace(/'/g, '"');

            newJson = newJson.replace(/([^"]+)|("[^"]+")/g, function($0, $1, $2) {
                if ($1) {
                    return $1.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
                } else {
                    return $2;
                }
            });

            let logs = JSON.parse(newJson);

            res.json(logs);
        })
    });

    router.post('/register', upload.array('files', 20), (req, res) => {

        const files = req.files;
        const s3 = new AWS.S3();

        for (let i = 0; i < files.length; i++) {

            let file = files[i];
            let filename = file.originalname;

            const params = {
                Bucket: 'fave-test',
                Key: 'users/' + req.body.userName + '/'+ filename,
                ACL : 'public-read',
                Body: file.buffer,
                ContentType: 'image/png'
            }

            s3.putObject(params, (err, data) => {
                if (i === files.length - 1) {
                    if (!err) {
                        return res.json({
                            success: true
                        })
                    } else {
                        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                        return res.status(404);
                    }
                }
            })
        }


    })

    return router;
}
