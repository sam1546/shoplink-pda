import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// SHoplink Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views
import { PlantDetailsComponent } from './plantdetails/plantdetails.component';
import { CNCOperatorDetailsComponent } from './cnc-operatordetails/cnc-operator-details.component';
import { MachineInfoComponent } from './machineinfo/machineinfo.component';
import { WorkOrderEntryComponent } from './workorderentry/workorderentry.component';
import { DownTimeComponent } from './down-time-entry/down-time-entry.component';
import { MessageSettingComponent } from './message-setting/message-setting.component'; 

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
  ],
  declarations: [
    PlantDetailsComponent,
    CNCOperatorDetailsComponent,
    MachineInfoComponent,
    WorkOrderEntryComponent,
    DownTimeComponent,
    MessageSettingComponent, 
  ],
})
export class BaseModule {}
