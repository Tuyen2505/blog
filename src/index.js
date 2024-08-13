const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))
// Template Engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// HTTP Logger
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
// Bản mới nhất mà vẫn chạy được, mời các bạn tham khảo
