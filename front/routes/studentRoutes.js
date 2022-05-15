import express from "express"
import axios from "axios"
import request from 'request';
import http from 'http';

const router = express.Router();

router
    .get('/student/cad', function (req, res) {
        res.render('admin/students/addstudent')
    })

    .post('/student/save', function (req, res) {


        var erros = []
        if (!req.body.nome || typeof req.body.nome == undefined || typeof req.body.nome == null) {
            erros.push({ texto: "Nome Invalido" })
        }
        if (!req.body.email || typeof req.body.email == undefined || typeof req.body.email == null) {
            erros.push({ texto: "Email Invalido" })
        }
        if (!req.body.telefone || typeof req.body.telefone == undefined || typeof req.body.telefone == null) {
            erros.push({ texto: "Telefone Invalido" })
        }


        if (erros.length > 0) {
            res.render("admin/teachers/addteacher", { erros: erros })
        } else {

            axios.defaults.baseURL = 'http://apigateway:80';
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            axios.post('/apistudents', {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone
            })
                .then(function (response) {
                    req.flash("success_msg", "Criado com Sucesso")
                    res.redirect('/student/load');
                })
                .catch(function (error) {
                    res.send(error);
                });
        }


    })

    .get('/student/load', function (req, res) {

        axios.get('http://apigateway:80/apistudents')
            .then(function (response) {
                // manipula o sucesso da requisição
                res.render('admin/students/student', { teachers: response.data });
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.error(error);
            });
    })


    .post('/student/deletar', function (req, res) {

        axios.defaults.baseURL = 'http://apigateway:80';
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        req.body.id
        axios.delete('/apistudents/' + req.body.id)
            .then(function (response) {
                req.flash("success_msg", "Deletado com Sucesso")
                res.redirect('/student/load');
            })
            .catch(function (error) {
                res.send(error);
            });


    })

export default router;

