import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantDetailsComponent } from './plantdetails/plantdetails.component';
import { CNCOperatorDetailsComponent } from './cnc-operatordetails/cnc-operator-details.component';
import { MachineInfoComponent } from './machineinfo/machineinfo.component';
import { WorkOrderEntryComponent } from './workorderentry/workorderentry.component';
import { DownTimeComponent } from './down-time-entry/down-time-entry.component';
import { MessageSettingComponent } from './message-setting/message-setting.component'; 

const routes: Routes = [
  {
    path: '',
    data: {
      title: '',  //blank, display's after home
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'base',
      },
      {
        path: 'plantdetails',
        component: PlantDetailsComponent,
        data: {
          title: 'Plantdetails',
        },
      },
      {
        path: 'cnc-operatordetails',
        component: CNCOperatorDetailsComponent,
        data: {
          title: 'CNCOperatorDetails',
        },
      },
      {
        path: 'machineinfo',
        component: MachineInfoComponent,
        data: {
          title: 'MachineInfo',
        },
      },
      {
        path: 'workorder',
        component: WorkOrderEntryComponent,
        data: {
          title: 'WorkOrder',
        },
      },
      {
        path: 'downtime',
        component: DownTimeComponent,
        data: {
          title: 'Downtime',
        },
      },
      {
        path: 'messagesetting',
        component: MessageSettingComponent,
        data: {
          title: 'MessageSetting',
        },
      }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

