import students from "../models/Students.js";

class StudentsController {

  static listarStudents = (req, res) => {
    students.find((err, students) => {
      res.status(200).json(students)
    })
  }


  static listarStudents = (req, res) => {
    students.find().sort({ date: 'desc' }).then((student) => {
      res.status(200).json(student)
    }).catch((err) => {
      res.status(400).send('erro ao listar usuarios')

    })
  }



  static listarStudentsPorId = (req, res) => {
    const id = req.params.id;

    students.findById(id, (err, students) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Estudante não localizado.` })
      } else {
        res.status(200).send(students);
      }
    })
  }

  static cadastrarStudents = (req, res) => {
    let newStudent = new students(req.body);

    newStudent.save((err) => {

      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar Estudante.` })
      } else {
        res.status(201).send(newStudent.toJSON())
      }
    })
  }

  static atualizarStudents = (req, res) => {
    const id = req.params.id;

    students.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Estudante atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static excluirStudents = (req, res) => {
    const id = req.params.id;

    students.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Estudante removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message + "chegamos aqui" })
      }
    })
  }

}

export default StudentsController