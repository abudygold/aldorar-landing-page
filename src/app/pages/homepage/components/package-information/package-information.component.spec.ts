import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageInformationComponent } from './package-information.component';

describe('PackageInformationComponent', () => {
  let component: PackageInformationComponent;
  let fixture: ComponentFixture<PackageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
