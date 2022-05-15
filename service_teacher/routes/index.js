import express from "express"
import bodyParser from "body-parser"
import teacher from "./teacherRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" })
  })

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(
    teacher
  )
}

export default routes