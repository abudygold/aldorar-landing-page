import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingTextComponent } from './heading-text.component';

describe('HeadingTextComponent', () => {
  let component: HeadingTextComponent;
  let fixture: ComponentFixture<HeadingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
