import { Injectable } from '@angular/core';
import { dummyTasks } from '../../data/dummy-tasks';
import { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: Task, userId: string) {
    let updatedTask = {
      ...newTask,
      id: new Date().getTime().toString(),
      userId: userId,
    };
    this.tasks.push(updatedTask);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
