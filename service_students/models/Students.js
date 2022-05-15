
import mongoose from "mongoose"

const studentsSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    email: { type: String },
    telefone: { type: Number },
    matriculado: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: Date.now()
    }
  },
  {
    versionKey: false
  }
)

const students = mongoose.model("students", studentsSchema)

export default students;