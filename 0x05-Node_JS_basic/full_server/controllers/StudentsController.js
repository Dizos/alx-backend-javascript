import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = req.app.locals.databasePath;
      const fields = await readDatabase(databasePath);
      
      let response = 'This is the list of our students\n';
      const totalStudents = Object.values(fields).reduce((acc, names) => acc + names.length, 0);
      response += `Number of students: ${totalStudents}\n`;
      
      for (const [field, names] of Object.entries(fields).sort()) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const databasePath = req.app.locals.databasePath;
      const fields = await readDatabase(databasePath);
      
      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
