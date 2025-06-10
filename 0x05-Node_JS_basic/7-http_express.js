const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  
  if (!databasePath) {
    res.set('Content-Type', 'text/plain');
    res.send('This is the list of our students\nCannot load the database');
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
    
    res.set('Content-Type', 'text/plain');
    res.send(response.trim());
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
