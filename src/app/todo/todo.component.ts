import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


interface Todo {
  id: number;
  task: string;
  desc: string;
  completed: boolean;
}



@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  newTask: string = '';
  newDesc: string = '';

  ngOnInit() {
    this.filteredTodos = this.todos;
  }

  addTask() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        desc: this.newDesc,
        completed: false
      };
      this.todos.push(newTodo);
      this.filteredTodos = this.todos;
      this.newTask = '';
      this.newDesc = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.filteredTodos = this.todos;
  }

  showAllTasks() {
    this.filteredTodos = this.todos;
  }

  showCompletedTasks() {
    this.filteredTodos = this.todos.filter(todo => todo.completed);
  }
  showIncompleteTasks() {
    this.filteredTodos = this.todos.filter(todo => !todo.completed);
  }
}