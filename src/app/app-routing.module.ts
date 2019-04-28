import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApproverComponent } from './approver/approver.component';
import { PendingComponent } from './approver/pending/pending.component';
import { DeclinedComponent } from './approver/declined/declined.component';
import { AcceptedComponent } from './approver/accepted/accepted.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestdeclinedComponent } from './requestdeclined/requestdeclined.component';
import { RequestpendingComponent } from './requestpending/requestpending.component';
import { AuthGuard } from './auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { PopulationregisterComponent } from './populationregister/populationregister.component';

// import { AuthGuard } from './_guards';

const routes: Routes = [ 
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, pathMatch:'full' },
{ path: 'register', component: RegisterComponent },
//{path:'approver', component: ApproverComponent},
  {path: 'approver', component:ApproverComponent,canActivate:[AuthGuard]}, 


  {path: 'approver/pending', component:PendingComponent, canActivate:[AuthGuard], },
  {path: 'approver/declined', component: DeclinedComponent, canActivate:[AuthGuard]},
  {path: 'approver/accepted', component:AcceptedComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent},
  {path:'requestdeclined', component:RequestdeclinedComponent,canActivate:[AuthGuard]},
  {path:'requestpending', component:RequestpendingComponent, canActivate:[AuthGuard],},
  {path:'dashboard/registermembers', component:PopulationregisterComponent},
// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

   export class AppRoutingModule { 

   

}
