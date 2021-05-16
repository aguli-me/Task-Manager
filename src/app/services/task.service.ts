import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { tasks } from "../../../db.json";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Array<Task> = [];

  constructor() {
    this.tasks = tasks;
   }

  getTasks() {
    return this.tasks;
  }

  deleteTask(task: Task) {
    for (let i=0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === task.id) {
        this.tasks.splice(i, 1);
      }
    }
    return this.tasks;
  }

  updateTaskReminder(task: Task) {
    for (let i=0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === task.id) {
        this.tasks[i] = task;
      }
    }
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }
}
