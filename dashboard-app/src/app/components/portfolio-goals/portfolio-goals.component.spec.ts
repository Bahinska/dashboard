import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGoalsComponent } from './portfolio-goals.component';

describe('PortfolioGoalsComponent', () => {
  let component: PortfolioGoalsComponent;
  let fixture: ComponentFixture<PortfolioGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioGoalsComponent]
    });
    fixture = TestBed.createComponent(PortfolioGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
