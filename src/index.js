const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const path = require('path')

// app.use(express.static('./src/public'))
app.use(express.static(path.join(__dirname, '/public')))


app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './src/resources/views')


app.get('/', (req, res) => {
  res.render('home')
})


app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})