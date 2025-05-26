import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() menuToggle = new EventEmitter<void>();
  @Input() isCollapsed = true;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.menuToggle.emit();
  }

  logout() {
    // Add your logout logic here
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
