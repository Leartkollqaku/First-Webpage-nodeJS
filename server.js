const express = require('express');
const people = require('./people.json');
const app = express();

const server = app.listen(7000, () => {
	console.log('Express running -> PORT ${server.address().port}');
});


app.set('view engine', 'pug');
app.use(express.static('c'));
app.use(express.static('webDev'));
app.use(express.static('node-website-starter-files-master'));
app.use(express.static('public'));

app.get('/profile', (req,res) => {
	const person = people.profiles.find(p => p.id ===req.query.id);
	res.render('profile', {
		title: 'About ${person.firstname} ${person.lastname}',
		person,
	});
});



app.get('/', (req, res) => {
	res.render('index', {
		title: 'Homepage',
		people: people.profiles
	});
		
});


