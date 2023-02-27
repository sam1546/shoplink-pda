import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { Machine1Component } from './machine1.component';
import { Machine10Component } from './machine10.component';

// Theme Routing
import { MachineRoutingModule } from './machine-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MachineRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    Machine1Component, 
    Machine10Component,
  ]
})
export class MachineModule {
}
