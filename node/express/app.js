const express = require('express');
const { title } = require('process');
//creating app 
const app = express();
// setting view engine (ejs)
app.set('view engine', 'ejs');
// listening mode
app.listen(3000);
// listening for get requests and corresponding response
app.get('/', (req, res) => {
    const blogs = [
        {title : 'Akila and the Bee', snippet : 'In the benigigi, Akila went for spelling bee and did quite well with the help of his coach'},
        {title : 'The magician of sound', snippet : 'Long ago, a boy with supersensitive hearing was born and he could pick up sound from 10km radius'},
        {title : 'Lord of the mysteries', snippet : 'A transmigrator work up in a strange body, waking up and feeling confused, he decided to live this new life to the fullest'}
    ]
    res.render('index', { title : 'Home', blogs})
})
app.get('/about', (req, res) => {
    res.render('about', { title : 'About'})
})
app.get('/blogs/create', (req, res)=> {
    res.render('create', { title : 'Create'})
})
app.get((req, res) => {
    res.status(404).render('404', { title : '404'})
})