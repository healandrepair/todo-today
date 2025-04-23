import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList : Task[] = []

  constructor(private taskService : TaskService){}

  ngOnInit(): void {
    this.taskList = this.getTasks();
  }

  getTasks() : Task[] {
    return this.taskService.getTasks();
  }

  addTask(task : Task) {
    this.taskService.addTasks(task)
  }

  removeTask(task : Task) {
    const index = this.taskList.findIndex((t) => t.id === task.id)
    this.taskService.removeTask(index);
  }
}
