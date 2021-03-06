const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            background-color: black;
        }

        .center {
            position: relative;
            height: 100vh;
            width: 100vw;
        }
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 72px;
            color: white;
        }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raspberry Pi</title>
</head>
<body>
    <div class="center">
        <h1>
            Raspberry Pi 3
        </h1>
    </div>
</body>
</html>
    `)
})

module.exports = router;