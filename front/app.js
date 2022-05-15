import express from "express"
import bodyParser from "body-parser"
import routes from "./routes/index.js"
import { engine } from 'express-handlebars';
import cors from "cors";
import path from 'path';
import session from "express-session"
import flash from "connect-flash"

const app = express();
const __dirname = path.dirname('public');

app.use(session({
    secret: 'school',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())


app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        },
        if_eq: function (a, b, opts) {
            if (a == b) // Or === depending on your needs
                return opts.fn(this);
            else
                return opts.inverse(this);
        }

    }
}))




app.set('view engine', 'handlebars');
app.set('views', './views')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

routes(app);

export default app



