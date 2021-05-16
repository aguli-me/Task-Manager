import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((data) => (this.tasks = data));
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  deleteTask(task: Task) {
    this.tasks = this.taskService.deleteTask(task);
  // this.tasks.filter((t) => t.id !== task.id);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task);
  }

  addTask(task: Task) {
  this.tasks = this.taskService.addTask(task);
  }
}
