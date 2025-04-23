import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private taskService : TaskService) {}

  taskFormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    byDate: new FormControl(new Date())
  })

  onSubmit() {
    const taskElement : Task = {
      id: Date.now().toString(),
      title: this.taskFormGroup.get("name")?.value ?? "",
      description: this.taskFormGroup.get("description")?.value ?? "",
      byDate: this.taskFormGroup.get("byDate")?.value ?? new Date()
    }

    this.taskService.addTasks(taskElement)
  }
}
