import fs from 'fs/promises';

export function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
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

      return fields;
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}
