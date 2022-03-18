// razivat logiku po vsemu prilozhenij
const {
    Router
} = require("express")
const Todo = require("../models/Todo")
const router = Router()

router.get("/", async (req, res) => {
    // poluchit vse todos kotorie est
    const todos = await Todo.find({})
    res.render("index", {
        title: "Todos list",
        isIndex: true,
        todos
    })
})

router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create todo",
        isCreate: true
    })
})

router.post("/create", async (req, res) => {
    // peredajom to chto s klienta
    const todo = new Todo({
        title: req.body.title

    })
    //soxroniaet
    await todo.save()
    // redirect
    res.redirect("/")
})

router.post("/complete", async (req, res) => {
    // potomuchto v post name = id = dolzhno bit odinakovo
    const todo = await Todo.findById(req.body.id)

    todo.completed = !!req.body.completed
    await todo.save()

    res.redirect("/")

})


module.exports = router