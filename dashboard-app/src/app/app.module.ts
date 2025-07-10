import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AccountComponent } from './components/pages/account/account.component';
import { TableComponent } from './components/table/table.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { PortfolioGoalsComponent } from './components/portfolio-goals/portfolio-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountComponent,
    NavbarComponent,
    TableComponent,
    WorkQueueComponent,
    PortfolioGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
