import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

class UserFormModel {
  name: string = '';
  email: string = '';
  role: string = '';
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  showModal = false;
  isEditing = false;
  userForm = new UserFormModel();
  editingUserId: number | null = null;
  @Input() isCollapsed = false;
  constructor() {}

  ngOnInit() {
    // Sample data
    this.users = [
      { id: 1, name: 'علی محمدی', email: 'ali@example.com', role: 'admin' },
      { id: 2, name: 'سارا احمدی', email: 'sara@example.com', role: 'user' },
      { id: 3, name: 'رضا کریمی', email: 'reza@example.com', role: 'user' }
    ];
  }

  openModal() {
    this.isEditing = false;
    this.userForm = new UserFormModel();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.editingUserId = null;
  }

  editUser(user: User) {
    this.isEditing = true;
    this.editingUserId = user.id;
    this.userForm = { ...user };
    this.showModal = true;
  }

  deleteUser(user: User) {
    if (confirm('آیا از حذف این کاربر اطمینان دارید؟')) {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }

  onSubmit() {
    if (this.isEditing && this.editingUserId) {
      const index = this.users.findIndex(u => u.id === this.editingUserId);
      if (index !== -1) {
        this.users[index] = {
          ...this.userForm,
          id: this.editingUserId
        };
      }
    } else {
      // Add new user
      const newUser: User = {
        id: this.users.length + 1,
        ...this.userForm
      };
      this.users.push(newUser);
    }

    this.closeModal();
  }
}
