const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }
    
    try {
      const data = await fs.readFile(databasePath, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }
      
      const students = lines.slice(1);
      const fields = {};
      
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });
      
      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.length}\n`;
      
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      
      res.end(response.trim());
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
