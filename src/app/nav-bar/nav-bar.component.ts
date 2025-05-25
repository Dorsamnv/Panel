import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, MatIconModule, NgClass, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() isCollapsed = true;
  openedSubmenu: string | null = null;

  toggleSubmenu(submenu: string) {
    if (this.openedSubmenu === submenu) {
      this.openedSubmenu = null;
    } else {
      this.openedSubmenu = submenu;
    }
    console.log('Submenu toggled:', this.openedSubmenu);
  }
}
