import teacher from "../models/Teacher.js";

class TeacherController {

  static listarTeacher = (req, res) => {
    teacher.find((err, teacher) => {
      res.status(200).json(teacher)
    })
  }

  static listarTeacherPorId = (req, res) => {
    const id = req.params.id;

    teacher.findById(id, (err, teacher) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Autor não localizado.` })
      } else {
        res.status(200).send(teacher);
      }
    })
  }

  static cadastrarTeacher = (req, res) => {
    const { nome, email, telefone } = req.body;
    let newTeacher = new teacher(req.body);
    console.log(newTeacher)

    newTeacher.save((err) => {

      if (err) {
        res.status(500).send({ message: `${nome} - falha ao cadastrar Autor.` })
      } else {
        res.status(201).send(newTeacher.toJSON())
      }
    })
  }

  static atualizarTeacher = (req, res) => {
    const id = req.params.id;

    teacher.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static excluirTeacher = (req, res) => {
    const id = req.params.id;

    teacher.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

}

export default TeacherController