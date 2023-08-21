const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

const route = require("./routes/index.route");
const db = require("./config/db");

// Connect to DB
db.connect();

// app.use(express.static('./src/public'))
app.use(express.static(path.join(__dirname, "/public")));

// add middleware to pre-handle param to body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(morgan("combined"));
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
