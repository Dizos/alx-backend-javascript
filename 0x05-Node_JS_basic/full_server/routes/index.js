import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

export default function router(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}
