import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApproverComponent } from './approver/approver.component';
import { PendingComponent } from './approver/pending/pending.component';
import { AcceptedComponent } from './approver/accepted/accepted.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { ApproverNavBarComponent } from './approver-nav-bar/approver-nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestpendingComponent } from './requestpending/requestpending.component';
import { RequestdeclinedComponent } from './requestdeclined/requestdeclined.component';
import { VolunteerNavbarComponent } from './volunteer-navbar/volunteer-navbar.component';
import { PopulationregisterComponent } from './populationregister/populationregister.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ApproverComponent,
    PendingComponent,
    AcceptedComponent,
    DeclinedComponent,
    ApproverNavBarComponent,
    DashboardComponent,
    RequestpendingComponent,
    RequestdeclinedComponent,
    VolunteerNavbarComponent,
    PopulationregisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
