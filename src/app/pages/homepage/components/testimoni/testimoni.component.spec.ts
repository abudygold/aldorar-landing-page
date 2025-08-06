import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniComponent } from './testimoni.component';

describe('TestimoniComponent', () => {
  let component: TestimoniComponent;
  let fixture: ComponentFixture<TestimoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
