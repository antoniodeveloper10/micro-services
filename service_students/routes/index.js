import express from "express"
import bodyParser from "body-parser"
import students from "./studentsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "api Student" })
  })

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(
    students
  )
}

export default routes