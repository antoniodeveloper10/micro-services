import mongoose from "mongoose"

const teacherSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    email: { type: String },
    telefone: { type: Number }
  },
  {
    versionKey: false
  }
)

const teacher = mongoose.model("teacher", teacherSchema)

export default teacher;