import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, DropdownModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { CapacityUtilizationGraphComponent } from './capacity-utilization-graph.component';
import { DocsComponentsModule } from '../../../../components';

describe('InputGroupsComponent', () => {
  let component: CapacityUtilizationGraphComponent;
  let fixture: ComponentFixture<CapacityUtilizationGraphComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapacityUtilizationGraphComponent],
      imports: [FormModule, CardModule, GridModule, ButtonModule, DropdownModule, DocsComponentsModule, RouterTestingModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(CapacityUtilizationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
