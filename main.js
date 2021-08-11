const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 8090;

app.use(cors());

app.get('/', (req, res) => {
  var file = fs.createReadStream('./sample.pdf');
  var stat = fs.statSync('./sample.pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
  file.pipe(res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
