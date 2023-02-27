import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils/src'; 
import { ChartjsComponent } from '@coreui/angular-chartjs';
 
@Component({
  selector: 'app-machine1',
  templateUrl: './machine1.component.html'
})
export class Machine1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void { }

}

