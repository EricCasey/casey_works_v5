const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('i7rChiYfAo6xKF8Jx6XP8157p4znpITI-fsoeCpQMkE.fEFd7HcqekFNdT_M3-QYnFGRdl6nRWjwIqAPppaIfUs')
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
