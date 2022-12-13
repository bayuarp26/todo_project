const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/users')
const routes = require('./routes/todo')
const mysql = require('mysql2')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('database ready!'))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(router)
app.use(routes)



app.listen(port, () => console.log(`running server on port ${port}`))