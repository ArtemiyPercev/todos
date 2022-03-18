const express = require("express")
const mongoose = require("mongoose") // username artiom pw artiom1992
const exphbs = require("express-handlebars")
const todoRoutes = require("./routes/todos")
const path = require("path")

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
})
// zaregestrivoali dvizhok po kliuchu hbs
app.engine("hbs", hbs.engine)
// po umolchaniju budem ispolzovat handlebars
app.set("view engine", "hbs")
// regestriruem papku, gde xraniatsia faili
app.set("views", "views")
// mozhem schtiviat body v router v post
app.use(express.urlencoded({
    extended: true
}))
// pomogaet express naiti nuzhnuju papku s stiliami
app.use(express.static(path.join(__dirname, "public")))

// registracija routa
app.use(todoRoutes)


async function start() {
    try {
        // podkliuchenie bazi dannix 
        await mongoose.connect("mongodb+srv://artiom:artiom1992@cluster0.1cvcp.mongodb.net/todos", {
            // chtobi oshibok ne vibivalo
            useNewUrlParser: true
        })
        // pozvoliaet zapustit server
        app.listen(PORT, () => {
            console.log("Server has been started")
        })
    } catch (e) {
        console.log(e)
    }
}


start()