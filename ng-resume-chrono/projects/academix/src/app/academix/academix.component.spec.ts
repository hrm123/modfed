import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademixComponent } from './academix.component';

describe('AcademixComponent', () => {
  let component: AcademixComponent;
  let fixture: ComponentFixture<AcademixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
