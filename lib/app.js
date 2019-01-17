const People = require('./model/People');
const bodyParser = require('./bodyParser');
const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  
  res.setHeader('Content-Type', 'application/json');
  
  if(req.method === 'POST' && url.pathname === '/people') {
    bodyParser(req)
      .then(body => {
        People.create({
          name: body.name,
          age: body.age,
          favoriteColor: body.favoriteColor
        }, (err, createdPerson) => {
          console.log(data);
          res.end(JSON.stringify(createdPerson));
        });
      });
  } else if(req.method === '' && url.pathname) {
    
  }
};