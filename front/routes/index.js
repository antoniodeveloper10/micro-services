import express from "express"
import bodyParser from "body-parser"
import teacher from "./teacherRoutes.js"
import student from "./studentRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.render('index')
    })

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(
        teacher,
        student
    )
}

export default routes