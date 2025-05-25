import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports:[MatIcon],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() menuToggle = new EventEmitter<void>();
  @Input() isCollapsed = true;

  toggleSidebar() {
    this.menuToggle.emit();
  }
}
