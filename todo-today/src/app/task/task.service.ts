import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : Task[] = []

  constructor() {
    const localStore = localStorage.getItem("taskList");
    if (localStore) {
      this.tasks = JSON.parse(localStore)
    }
   }

  addTasks(task: Task) {
    this.tasks.push(task)
    
    const currentTasks = JSON.stringify(this.tasks);
    localStorage.setItem("taskList", currentTasks);
    console.log("Added Task")
  }

  removeTask(index : number) {
    this.tasks.splice(index, 1)

    const currentTasks = JSON.stringify(this.tasks);
    localStorage.setItem("taskList", currentTasks);

    console.log("removed Task")
  }

  getTasks() : Task[] {
    return this.tasks;
  }
}
