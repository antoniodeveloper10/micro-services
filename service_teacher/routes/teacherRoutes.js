import express from "express"
import TeacherController from "../controllers/teacherController.js";

const router = express.Router();

router
  .get("/teacher", TeacherController.listarTeacher)
  .get("/teacher/:id", TeacherController.listarTeacherPorId)
  .post("/teacher", TeacherController.cadastrarTeacher)
  .put("/teacher/:id", TeacherController.atualizarTeacher)
  .delete("/teacher/:id", TeacherController.excluirTeacher)

export default router;   