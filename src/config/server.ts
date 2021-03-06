
import express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";

import {saveCourse} from './save-course.route';
import {loginUser} from './login.route';

import { getQuestionbank } from '../config/questionbank/get-qb.route'

const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);


app.route('/api/courses/:id').put(saveCourse);

app.route('/api/login').post(loginUser);

app.route('/api/qb').get(getQuestionbank);

app.use("*",(req, res) =>{
    res.send(`<h1>Server up and running !</h1>`);
});
const PORT : string|number = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`hosting @${PORT}`));