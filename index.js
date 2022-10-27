const express = require('express');
//var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());


const courses = require('./data/courses.json');
const course = require('./data/course.json');

app.get('/', (req, res)=> {
    res.send('News API Running');
});

app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.get('/all',(req,res)=>{
    res.send(course);
})

app.get('/course/:id',(req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    const selectedCourse = course.find(c => c.course_id === id);
    res.send(selectedCourse);
})

app.listen(port, ()=> {
    console.log('Server run');
})