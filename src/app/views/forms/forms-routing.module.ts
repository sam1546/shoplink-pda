import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APQReportComponent } from './apq-report/apq-report.component';
import { ProductionReportComponent } from './production-report/production-report.component';
import { CapacityUtilizationGraphComponent } from './capacity-utilization-graph/capacity-utilization-graph.component';
import { LossAnalysisComponent } from './loss-analysis/loss-analysis.component';
import { ProductionCountReport } from './production-count-report/production-count-report.component';
import { RejectionDataEntryComponent } from './rejection-data-entry/rejection-data-entry.component';
import { OEERComponent } from './oee-report/oee-report.component';
import { MinutewiseGraphComponent } from './minutewise-graph/minutewise-graph.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '' //blank, display's after home
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'production-report',
        component: ProductionReportComponent,
        data: {
          title: 'ProductionReport'
        }
      },
      {
        path: 'production-count-report',
        component: ProductionCountReport,
        data: {
          title: 'ProductionCountReport'
        }
      },
      {
        path: 'rejection-data-entry',
        component: RejectionDataEntryComponent,
        data: {
          title: 'RejectionDataEntry'
        }
      },
      {
        path: 'loss-analysis',
        component: LossAnalysisComponent,
        data: {
          title: 'LossAnalysis'
        }
      },
      {
        path: 'capacity-utilization-graph',
        component: CapacityUtilizationGraphComponent,
        data: {
          title: 'CapacityUtilizationGraph'
        }
      },
      {
        path: 'apq-report',
        component: APQReportComponent,
        data: {
          title: 'APQReport'
        }
      },
      {
        path: 'oee-report',
        component: OEERComponent,
        data: {
          title: 'OEEReport'
        }
      },
      {
        path: 'minutewise-graph',
        component: MinutewiseGraphComponent,
        data: {
          title: 'MinuteWiseGraph'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
