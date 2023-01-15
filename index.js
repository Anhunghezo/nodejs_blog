
const express = require('express');
const app = express()
const port = 3003

app.get('/', (req, res) => {
    return res.send("Hello world from BE 🌈")
})


app.listen(port, () => console.log(`BE is listening at http://localhost:${port}`))