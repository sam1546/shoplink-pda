import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-production-report',
  templateUrl: './production-report.component.html',
  styleUrls: ['./production-report.component.scss']
})

export class ProductionReportComponent implements OnInit { 
  userid : any
  datePicker1 = Date.now()
  timePicker1 = Date.now()
  datePicker2 = Date.now()
  timePicker2 = Date.now()
  constructor(public router : Router) {
  }

  ngOnInit(): void {
    if(localStorage.getItem("userid") != null || localStorage.getItem("userid") != ''){
        this.userid = localStorage.getItem("userid")
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}