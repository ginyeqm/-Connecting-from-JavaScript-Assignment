var famousPeople= process.argv[2];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = '${famousPeople}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    for(index in result.rows){
    var firstName =(result.rows[index].first_name);
    var LastName = (result.rows[index].last_name);
    var birthdate = (result.rows[index].birthdate);
    var id = Number(index) + 1;
    var year = birthdate.getFullYear();
    var month = birthdate.getMonth();
    var day = birthdate.getDate();

    console.log(id + " " + firstName + LastName + ', ' + 'born ' + year + '-' + month + '-' + day);
    client.end();
    }
  });
});

// node lookup_people.js Paul
// Searching ...
// Found 2 person(s) by the name 'Paul':
// - 1: Paul Rudd, born '1969-04-06'
// - 2: Paul Giamatti, born '1967-06-06'
