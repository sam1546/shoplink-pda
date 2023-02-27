import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from './forms-routing.module';
import { LossAnalysisComponent } from './loss-analysis/loss-analysis.component';
import { APQReportComponent } from './apq-report/apq-report.component';
import { ProductionReportComponent } from './production-report/production-report.component';
import { ProductionCountReport } from './production-count-report/production-count-report.component';
import { RejectionDataEntryComponent } from './rejection-data-entry/rejection-data-entry.component';
import { CapacityUtilizationGraphComponent } from './capacity-utilization-graph/capacity-utilization-graph.component';
import { OEERComponent } from './oee-report/oee-report.component';
import { MinutewiseGraphComponent } from './minutewise-graph/minutewise-graph.component';


@NgModule({
  declarations: [
    LossAnalysisComponent,
    APQReportComponent,
    ProductionReportComponent,
    ProductionCountReport,
    RejectionDataEntryComponent,
    CapacityUtilizationGraphComponent,
    OEERComponent,
    MinutewiseGraphComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class CoreUIFormsModule {
}
