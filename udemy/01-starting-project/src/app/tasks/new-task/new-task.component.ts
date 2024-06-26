import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeAddTask = new EventEmitter<void>();

  private taskService = inject(TasksService);

  form: Task = {
    dueDate: '',
    id: '',
    summary: '',
    title: '',
    userId: '',
  };

  onCloseAddTask() {
    this.closeAddTask.emit();
  }

  onSubmit() {
    this.taskService.addTask(this.form, this.userId);
    this.closeAddTask.emit();
  }
}
