import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiesComponent } from './energies.component';

describe('EnergiesComponent', () => {
  let component: EnergiesComponent;
  let fixture: ComponentFixture<EnergiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergiesComponent]
    });
    fixture = TestBed.createComponent(EnergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
