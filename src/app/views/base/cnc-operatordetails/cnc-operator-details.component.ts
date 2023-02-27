import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cnc-operator-details.component.html',
  styleUrls: ['./cnc-operator-details.component.scss']
})
export class CNCOperatorDetailsComponent implements OnInit {
  public items = <any>[];

  constructor() {}

  ngOnInit(): void {
  }
}
