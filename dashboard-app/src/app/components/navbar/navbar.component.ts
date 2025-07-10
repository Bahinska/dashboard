import { Component } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeTab: string = 'dashboard';
  assignedTasks: number = 0;

  constructor(private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.eventBus.on('taskCountUpdate', (count: number) => {
      this.assignedTasks = count;
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  updateTaskCount(count: number): void {
    this.assignedTasks = count;
  }
}
