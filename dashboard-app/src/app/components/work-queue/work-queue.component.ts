import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus';

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent implements OnInit {
  activeTab: string = 'assigned';

  // Визначення колонок таблиці
  columns = [
    { field: 'originator', header: 'Originator' },
    { field: 'clientLine', header: 'Client/Line' },
    { field: 'type', header: 'Type' },
    { field: 'status', header: 'Status' },
    { field: 'created', header: 'Created' }
  ];

  // Дані для таблиці
  data = [
    { originator: 'Sam Masters', clientLine: 'NAMEX Tech Solutions', type: 'Underwriter Referral', status: 'New', created: '04/16/2025' },
    { originator: 'Annalise Willis', clientLine: 'Maritime Logistics Corp', type: 'Underwriter Referral', status: 'New', created: '04/16/2025' },
    { originator: 'Patrick Devenport', clientLine: 'GreenField Energy Ltd', type: 'Loss Control Request', status: 'Completed', created: '04/20/2025' },
    { originator: 'Ana Killian', clientLine: 'NorthStar Financial Group', type: 'Underwriter Referral', status: 'Pending Review', created: '04/22/2025' },
    { originator: 'Ana Killian', clientLine: 'Alliance Healthcare Systems', type: 'Email', status: 'Completed', created: '04/20/2025' },
    { originator: 'Me', clientLine: 'QuantumTech Industries', type: 'Email', status: 'New', created: '04/20/2025' }
  ];

  filteredData: any = [];

  constructor(private eventBus: EventBusService) {}

  ngOnInit(): void {
    this.filterData();
    this.eventBus.emit('taskCountUpdate', this.filteredData.length);
  }

  setTab(tab: string): void {
    this.activeTab = tab;
    this.filterData();
  }

  filterData(): void {
    // Фільтрація даних залежно від активної вкладки
    if (this.activeTab === 'assigned') {
      this.filteredData = this.data.filter(item => item.status === 'New');
    } else if (this.activeTab === 'pending') {
      this.filteredData = this.data.filter(item => item.status === 'Pending Review');
    } else if (this.activeTab === 'referrals') {
      this.filteredData = this.data; // Для вкладки "Referrals" поки показуємо всі дані
    }
  }

  // Підрахунок кількості елементів для кожної вкладки
  getCount(tab: string): number {
    if (tab === 'assigned') {
      return this.data.filter(item => item.status === 'New').length;
    } else if (tab === 'pending') {
      return this.data.filter(item => item.status === 'Pending Review').length;
    } else if (tab === 'referrals') {
      return this.data.length; // Поки що всі дані для вкладки "Referrals"
    }
    return 0;
  }
}