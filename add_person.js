var fName= process.argv[2];
var lName= process.argv[3];
var birth= process.argv[4];


const settings = require("./settings"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.insert({'first_name':fName, 'last_name':lName, 'birthdate':birth}).into('famous_people')
.asCallback(function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('success')
});
