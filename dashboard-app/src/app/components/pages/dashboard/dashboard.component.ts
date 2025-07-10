import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  specialGoals = [
    {
      title: 'PORTFOLIO LOSS RATIO TARGET',
      sections: [
        { width: 48.2, color: '#3bb979' },
        { width: 51.8, color: '#cc0101' }
      ],
      value: 48.2,
      target: '55%',
      targetPosition: 55,
      indicatorPosition: 48.2,
      status: '-6.8% GOOD',
      statusClass: 'good'
    },
    {
      title: 'RENEWAL RETENTION',
      sections: [
        { width: 88, color: '#fdd261' },
        { width: 12, color: '#cc0101' }
      ],
      value: 88,
      target: '85-90%',
      targetPosition: 90,
      indicatorPosition: 88,
      status: 'ON TARGET',
      statusClass: 'on-target'
    }
  ];
  
  regularGoals = [
    {
      title: 'NEW BUSINESS TARGET',
      value: 8.1,
      max: 12,
      current: '8.1M',
      target: '$12M',
      statusClass: 'good'
    },
    {
      title: 'ANNUAL GWP TARGET',
      value: 28.4,
      max: 42,
      current: '28.4M',
      target: '$42M',
      statusClass: 'good'
    }
  ];
}