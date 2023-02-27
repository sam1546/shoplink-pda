import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonGroupModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { RejectionDataEntryComponent } from './rejection-data-entry.component';

describe('ChecksRadiosComponent', () => {
  let component: RejectionDataEntryComponent;
  let fixture: ComponentFixture<RejectionDataEntryComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectionDataEntryComponent],
      imports: [CardModule, GridModule, ButtonModule, FormModule, ReactiveFormsModule, DocsComponentsModule, RouterTestingModule, ButtonGroupModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(RejectionDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});