import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: { field: string, header: string }[] = [];
  @Input() data: any[] = [];

  activeMenu: any = null;

  toggleMenu(row: any): void {
    if (this.activeMenu === row) {
      this.activeMenu = null;
    } else {
      this.activeMenu = row;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.menu')) {
      this.activeMenu = null;
    }
  }

  onAction(action: string, row: any): void {
    console.log(`Action: ${action}, Row:`, row);
    this.activeMenu = null;
  }

  getCellClass(row: any, field: string): string {
    if (field === 'status') {
      if (row[field] === 'New') {
        return 'status-new';
      } else if (row[field] === 'Pending Review') {
        return 'status-pending';
      } else if (row[field] === 'Completed') {
        return 'status-completed';
      }
    }

    if (field === 'lossRatio') {
      if (row[field] > 50) {
        return 'loss-ratio-high';
      } else if (row[field] > 30) {
        return 'loss-ratio-medium';
      } else {
        return 'loss-ratio-low';
      }
    }

    return '';
  }
}