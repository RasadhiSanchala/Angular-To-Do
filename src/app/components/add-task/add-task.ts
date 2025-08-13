import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTask {
  task: Partial<Task> = {
    title: '',
    description: '',
    due: ''
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit() {
    // Provide a default for required fields if needed
    if (!this.task.title) { return; }
    this.taskService.addTask(this.task as Task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
