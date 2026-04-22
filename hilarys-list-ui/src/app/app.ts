import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserSelector } from './components/user-selector/user-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, UserSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  sidebarOpen: boolean = true;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
