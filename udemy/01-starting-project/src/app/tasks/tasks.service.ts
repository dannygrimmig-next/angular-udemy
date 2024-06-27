import { Injectable } from '@angular/core';
import { dummyTasks } from '../../data/dummy-tasks';
import { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = dummyTasks;

  // local storage
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

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
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}
