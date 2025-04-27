import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
    byDate: new FormControl(new Date(), [Validators.required])
  })

  today = new Date().toISOString().split('T')[0];

  isModalOpen = false;

  onSubmit() {
    const taskElement : Task = {
      id: Date.now().toString(),
      title: this.taskFormGroup.get("name")?.value ?? "",
      description: this.taskFormGroup.get("description")?.value ?? "",
      byDate: this.taskFormGroup.get("byDate")?.value ?? new Date()
    }

    this.taskService.addTasks(taskElement)
    this.taskFormGroup.reset()
    alert("Added")
  }
  
}
