const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override')


//Connect to db
db.connect();

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'));

// Template Engine
app.engine('hbs', 
    handlebars.engine({ 
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
