import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesnlComponent } from './profesnl.component';

describe('ProfesnlComponent', () => {
  let component: ProfesnlComponent;
  let fixture: ComponentFixture<ProfesnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
