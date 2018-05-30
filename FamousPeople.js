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

knex.select('first_name', 'last_name', 'birthdate').from('famous_people')
.asCallback(function(err, rows) {
  if (err) {
    return console.error(err);
  }else {
      console.log(rows);
    }
 });
