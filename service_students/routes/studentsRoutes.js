import express from "express"
import StudentsController from "../controllers/studentsController.js";

const router = express.Router();

router
  .get("/students", StudentsController.listarStudents)
  .get("/students/:id", StudentsController.listarStudentsPorId)
  .post("/students", StudentsController.cadastrarStudents)
  .put("/students/:id", StudentsController.atualizarStudents)
  .delete("/students/:id", StudentsController.excluirStudents)

export default router;   