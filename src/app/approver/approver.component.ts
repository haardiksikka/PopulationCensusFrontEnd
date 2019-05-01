import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css']
})
export class ApproverComponent implements OnInit {
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Agriculture', 'Software', 'Management', 'Manufacturing', 'Tourism and Hospitality', 'Education and Training', 'Other'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label:'Occupation Industry'},
   
  ];
  public isDataAvailable:boolean = false;

  constructor(private userService: UserService) { 
    this.getData();
  }
  ngOnInit(){
    
  }
  getData(){
    this.userService.getGraphData().subscribe((data)=> 
    {
      this.graphData(data)
    });
      
    

  }
  graphData(result){

    this.barChartData = [
      {data: [result.Agriculture, result.Software, result.Management, result.Manufacturing, result.HAndT,result.EducationAndTraining, result.Other], label: 'Occupation Industry'},
     
    ];
    this.isDataAvailable = true;
  }
 
  
    
}

  
    
   
  
  
  



