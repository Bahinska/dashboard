import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-goals',
  templateUrl: './portfolio-goals.component.html',
  styleUrls: ['./portfolio-goals.component.scss']
})
export class PortfolioGoalsComponent implements OnInit {
  @Input() specialGoals: any[] = []; // Дані для перших двох прогрес-барів
  @Input() regularGoals: any[] = []; // Дані для останніх двох прогрес-барів

  constructor() {}

  ngOnInit(): void {}
} 