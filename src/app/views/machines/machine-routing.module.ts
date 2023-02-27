import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Machine1Component } from './machine1.component';
import { Machine10Component } from './machine10.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Machines',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'machine1',
      },
      {
        path: 'machine1',
        component: Machine1Component,
        data: {
          title: 'Machine1',
        },
      },
      {
        path: 'machine10',
        component: Machine10Component,
        data: {
          title: 'Machine10',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineRoutingModule {}
