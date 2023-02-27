import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CardModule, CarouselModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { WorkOrderEntryComponent } from './workorderentry.component';

describe('CarouselsComponent', () => {
  let component: WorkOrderEntryComponent;
  let fixture: ComponentFixture<WorkOrderEntryComponent>;
  let iconSetService: IconSetService

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderEntryComponent ],
      imports: [CarouselModule, NoopAnimationsModule, CardModule, GridModule, IconModule, DocsComponentsModule, RouterTestingModule],
      providers: [IconSetService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(WorkOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
